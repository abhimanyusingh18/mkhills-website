import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProductsGallery } from "@/components/sections/ProductsGallery";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Content */}
      <div className="flex-1">
        <Hero />
        <ProductsGallery />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
