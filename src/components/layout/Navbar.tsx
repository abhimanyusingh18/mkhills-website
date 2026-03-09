"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Products", href: "/#products" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-muted/20 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Brand Group */}
                <div className="flex items-center gap-3 z-50 relative">
                    {/* MK Hills Original Logo */}
                    <Link href="/" className="group flex items-center transition-transform hover:scale-105">
                        <div className="relative h-12 w-32">
                            <Image
                                src="/images/MKHillsLogo.svg"
                                alt="MK Hills"
                                fill
                                className="object-contain"
                                sizes="128px"
                            />
                        </div>
                    </Link>

                    <div className="h-6 w-[1px] bg-zinc-300 dark:bg-white/10 hidden sm:block" />

                    {/* 2tymes Original Logo */}
                    <Link href="/" className="group flex items-center transition-transform hover:scale-105">
                        <div className="relative h-10 w-28 drop-shadow-md">
                            <Image
                                src="/images/2tymes-final-logo.png"
                                alt="2tymes"
                                fill
                                className="object-contain"
                                sizes="112px"
                            />
                        </div>
                    </Link>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${(!isHome || isScrolled) ? "text-zinc-800 dark:text-white/80" : "text-white/90"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden z-50 p-2 -mr-2 transition-colors ${(!isHome || isScrolled || mobileMenuOpen) ? "text-zinc-900 dark:text-white" : "text-white"
                        }`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: "100%" },
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] as const }}
                className="fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden text-white"
            >
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                    >
                        <Link
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-heading text-white hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.header>
    );
}
