import fitz
import sys
import os

pdf_path = sys.argv[1]
output_dir = sys.argv[2]
os.makedirs(output_dir, exist_ok=True)

pdf_document = fitz.open(pdf_path)

for page_num in range(len(pdf_document)):
    page = pdf_document[page_num]
    # Render the entire page to a Pixmap
    # We use a zoom factor to get a high-quality (high-res) image
    zoom = 2.0 
    mat = fitz.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    
    image_name = f"page_{page_num+1}_img_1.jpeg"
    image_path = os.path.join(output_dir, image_name)
    
    pix.save(image_path)
    print(f"Saved {image_path}")

print(f"Extracted {len(pdf_document)} rendered pages.")
