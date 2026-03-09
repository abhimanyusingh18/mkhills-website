"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-white/70 pt-24 pb-12 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-3">
                                <div className="relative h-14 w-40 transition-transform group-hover:scale-105">
                                    <Image
                                        src="/images/MKHillsLogo.svg"
                                        alt="MK Hills"
                                        fill
                                        className="object-contain"
                                        sizes="160px"
                                    />
                                </div>
                                <div className="h-10 w-[1px] bg-white/20" />
                                <div className="relative h-12 w-36 transition-transform group-hover:scale-105">
                                    <Image
                                        src="/images/2tymes-final-logo.png"
                                        alt="2tymes"
                                        fill
                                        className="object-contain"
                                        sizes="144px"
                                    />
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/60 mb-6 max-w-sm font-light leading-relaxed">
                            Premium packaged cakes, cookies, and donuts crafted with the finest ingredients to deliver absolute indulgence. Brought to you by MK Hills Food.
                        </p>
                        <div className="flex mt-8">
                            <a href="https://instagram.com/mkhills_official" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white hover:text-accent transition-colors">
                                <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                                    <Instagram size={26} className="text-white" />
                                </div>
                                <span className="text-lg font-medium tracking-wide"><span className="text-white/20 font-light mr-3">|</span>mkhills_official</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-medium text-white text-lg mb-6">Explore</h3>
                        <ul className="space-y-4 font-light">
                            <li><Link href="/about" className="text-white/60 hover:text-accent transition-colors">Our Story</Link></li>
                            <li><Link href="/#products" className="text-white/60 hover:text-accent transition-colors">Products</Link></li>
                            <li><Link href="/#testimonials" className="text-white/60 hover:text-accent transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-medium text-white text-lg mb-6 tracking-wide">Contact</h3>
                        <ul className="space-y-5 text-white/60 font-light">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                                <span>
                                    <strong className="block text-white font-medium mb-1">MK HILLS FOOD</strong>
                                    Vill- Sarapara P-1, NH 17, PO/PS - Rangjuli,<br />
                                    Dist - Goalpara, Assam, Pincode- 783130
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-accent shrink-0" size={20} />
                                <a href="mailto:mkhillsfood@gmail.com" className="hover:text-accent transition-colors">mkhillsfood@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-accent shrink-0" size={20} />
                                <div>
                                    <a href="tel:7002647183" className="hover:text-accent transition-colors block">7002647183</a>
                                    <a href="tel:8811916892" className="hover:text-accent transition-colors block">8811916892</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} MK Hills Food. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
