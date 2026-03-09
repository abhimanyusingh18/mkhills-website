"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Soft parallax effect for the background image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1] as const, // Cinematic ease
            },
        },
    };

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
                <Image
                    src="/images/bigHomePage.png"
                    alt="Premium 2tymes Cakes and Confections"
                    fill
                    priority
                    className="object-cover object-[15%_center] md:object-center"
                    sizes="100vw"
                />
                {/* Dark elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
            </motion.div>

            {/* Content */}
            <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl flex flex-col items-center"
                >
                    <motion.span variants={itemVariants} className="uppercase tracking-widest text-accent text-sm md:text-base font-medium mb-6">
                        Bespoke Confections
                    </motion.span>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-8 tracking-tight">
                        Indulgence, <br />
                        <span className="italic font-light text-white/90">Crafted Twice.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed">
                        Experience the pinnacle of culinary artistry with MK Hills Food. Our 2tymes collection brings you premium cakes, delicate cookies, and artisanal donuts.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                        <Link href="#products" className="bg-accent text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-accent-light hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            Explore Collection
                        </Link>
                        <Link href="/about" className="px-8 py-4 rounded-full text-white font-medium border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                            Our Story
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="uppercase text-[10px] tracking-widest text-white/50">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
                />
            </motion.div>
        </section>
    );
}
