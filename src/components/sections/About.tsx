"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const },
        },
    };

    return (
        <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] as const }}
                        className="relative w-full max-w-[450px] mx-auto rounded-2xl overflow-hidden group shadow-xl"
                        style={{ aspectRatio: "738/1047" }}
                    >
                        <motion.div
                            className="w-full h-full relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/about-poster.jpeg"
                                alt="2tymes Bakery Artistry"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                        </motion.div>

                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col justify-center"
                    >
                        <motion.div variants={textVariants} className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-accent" />
                            <span className="uppercase text-sm tracking-widest text-accent font-medium">The MK Hills Legacy</span>
                        </motion.div>

                        <motion.h2 variants={textVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-8">
                            Redefining the <br /> Art of Baking.
                        </motion.h2>

                        <motion.p variants={textVariants} className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                            Founded on the belief that true luxury lies in the details, MK Hills Food brings you <strong className="font-medium text-foreground">2tymes</strong>. A brand dedicated to transforming ordinary moments into extraordinary experiences through our crafted baked goods.
                        </motion.p>

                        <motion.p variants={textVariants} className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
                            Every cake, cookie, and donut is meticulously prepared using heritage recipes and the finest globally sourced ingredients. We don't just bake; we architect flavors that leave a lasting impression.
                        </motion.p>

                        <motion.div variants={textVariants}>
                            <div className="flex items-center gap-6">
                                <div>
                                    <h4 className="font-heading text-xl font-bold text-foreground mb-2">Premium Quality</h4>
                                    <p className="text-sm text-muted-foreground">No compromises across our entire culinary range.</p>
                                </div>
                                <div className="w-[1px] h-12 bg-muted hidden sm:block" />
                                <div>
                                    <h4 className="font-heading text-xl font-bold text-foreground mb-2">Bespoke Design</h4>
                                    <p className="text-sm text-muted-foreground">Architecturally polished aesthetics in every bite.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
