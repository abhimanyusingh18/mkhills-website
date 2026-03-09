"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const products = [
    { id: 1, name: "Donut Cakes Collection", category: "Cakes", image: "/images/products/page_3_img_1.jpeg" },
    { id: 2, name: "Cup Cakes Collection", category: "Donuts", image: "/images/products/page_2_img_1.jpeg" },
    { id: 3, name: "Lovify Heart Shape Cakes", category: "Cakes", image: "/images/products/page_4_img_1.jpeg" },
    { id: 4, name: "Finger Cakes", category: "Cakes", image: "/images/products/page_6_img_1.jpeg" },
    { id: 5, name: "Slice Cakes Collection", category: "Cakes", image: "/images/products/page_5_img_1.jpeg" },
    { id: 6, name: "Slice Cakes Collection", category: "Exclusive", image: "/images/products/extra_product.png" },
    { id: 7, name: "Premium Gift Pack Cookies", category: "Cookies", image: "/images/products/page_7_img_1_cropped.jpeg" },
    { id: 8, name: "Premium Gift Pack Cookies", category: "Cookies", image: "/images/products/page_8_img_1_cropped.jpeg" },
    { id: 9, name: "Premium Cookies", category: "Cookies", image: "/images/products/page_9_img_1_cropped.jpeg" }
];

export function ProductsGallery() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
        },
    };

    return (
        <section id="products" className="py-24 md:py-32 bg-muted/30">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] as const }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <div className="flex justify-center mb-4">
                        <span className="uppercase text-sm tracking-widest text-accent font-medium">Our Masterpieces</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-6">
                        The 2tymes Collection.
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        A curated selection of our finest baked goods. Each item is a testament to our commitment to incomparable taste and stunning presentation.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-6 shadow-sm bg-white border border-muted/20 flex items-center justify-center">
                                <motion.div
                                    className="w-full h-full relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wider">{product.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
