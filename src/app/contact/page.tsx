"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Instagram, Globe, Building2, User, FileText } from "lucide-react";

export default function ContactPage() {
    const [mobile, setMobile] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateMobile = (val: string) => {
        if (!val) return "";
        if (!/^[6-9][0-9]{9}$/.test(val)) return "Mobile number must be exactly 10 digits and start with 6, 7, 8, or 9.";
        return "";
    };

    const validateEmail = (val: string) => {
        if (!val) return "";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid email address.";
        return "";
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const mErr = validateMobile(mobile);
        const eErr = validateEmail(email);

        if (mErr || eErr) {
            e.preventDefault();
            setMobileError(mErr);
            setEmailError(eErr);
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
            <Navbar />

            <div className="flex-1 bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24 relative overflow-hidden transition-colors">
                {/* Decorative background circle */}
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl -z-10" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl -z-10" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="flex justify-center mb-4">
                            <span className="uppercase text-sm tracking-widest text-accent font-semibold bg-white dark:bg-zinc-900 px-4 py-1.5 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-800 text-accent font-semibold">Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-[1.1] mb-6">
                            Let's Connect.
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                            Have questions or want to place a bulk order? Our team at <strong className="font-semibold text-zinc-900 dark:text-white">MK Hills Food</strong> is here to assist you with a premium experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

                        {/* Contact Details Bento Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }}
                            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >

                            {/* HQ Card */}
                            <div className="sm:col-span-2 bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-red-50 dark:bg-red-500/10 p-3.5 rounded-2xl text-red-600 dark:text-red-400">
                                        <Building2 size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white">Locations</h3>
                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Where to find us</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                                            <MapPin size={16} className="text-red-500" /> Factory Address
                                        </h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                            Vill - Sarapara P-1, NH 17, PO/PS - Rangjuli,<br />
                                            Dist - Goalpara, Assam, Pincode- 783130
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                                            <MapPin size={16} className="text-red-500" /> Office Address
                                        </h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                            32B, 1st floor, Barooah Market, Fancy Bazar, TRP Road<br />
                                            Near ITA Centre, Guwahati, Assam, Pin-781001
                                        </p>
                                    </div>
                                    <div className="md:col-span-2 pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2">
                                        <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                                            <MapPin size={16} className="text-red-500" /> Address
                                        </h4>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                                            MK HILLS FOOD, Vill- Sarapara<br />
                                            PO/PS - Rangjuli, Goalpara, Assam - 783130
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Contacts Card */}
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-emerald-50 dark:bg-emerald-500/10 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                                        <User size={22} />
                                    </div>
                                    <h3 className="text-lg font-heading font-bold text-zinc-900 dark:text-white">Direct Contact</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-zinc-100 dark:border-zinc-800">
                                        <h4 className="font-medium text-zinc-900 dark:text-white">Mohit Bansal</h4>
                                        <a href="tel:7002647183" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-2 mt-1">
                                            <Phone size={14} /> 7002647183
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-zinc-900 dark:text-white">Anil Bansal</h4>
                                        <a href="tel:8811916892" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-2 mt-1">
                                            <Phone size={14} /> 8811916892
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Digital & Legal Card */}
                            <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-3xl p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1 flex items-center gap-2">
                                            <Mail size={14} /> Email Us
                                        </p>
                                        <a href="mailto:mkhillsfood@gmail.com" className="hover:text-zinc-600 dark:hover:text-white/80 transition-colors font-medium break-all">
                                            mkhillsfood@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1 flex items-center gap-2">
                                            <Globe size={14} /> Website
                                        </p>
                                        <a href="https://mkhillsfood.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-white/80 transition-colors font-medium">
                                            mkhillsfood.com
                                        </a>
                                    </div>
                                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1 flex items-center gap-2">
                                            <FileText size={14} /> Business Registration
                                        </p>
                                        <p className="font-medium tracking-wide">
                                            GST: 18ACDFM1722A1ZT
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }}
                            className="lg:col-span-5"
                        >
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-heading font-bold mb-2 text-zinc-900 dark:text-white">Send an Inquiry</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Fill out the form below and we'll get back to you immediately.</p>

                                <form action="https://formsubmit.co/mkhillsfood@gmail.com" method="POST" className="space-y-5" onSubmit={handleSubmit}>
                                    <input type="hidden" name="_subject" value="New Submission from MK Hills Website!" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="box" />

                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-zinc-400 dark:placeholder-zinc-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="mobile" className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ml-1">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            required
                                            maxLength={10}
                                            value={mobile}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                setMobile(val);
                                                if (val) setMobileError(validateMobile(val));
                                                else setMobileError("");
                                            }}
                                            className={`w-full bg-zinc-50 dark:bg-zinc-950 border ${mobileError ? "border-red-400 focus:ring-red-400" : "border-zinc-200 dark:border-zinc-800 focus:border-accent focus:ring-accent/50"} rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-400 dark:placeholder-zinc-600`}
                                            placeholder="9XXXXXXXXX"
                                        />
                                        {mobileError && <p className="text-xs text-red-500 ml-1 mt-1 font-medium">{mobileError}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ml-1">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (e.target.value) setEmailError(validateEmail(e.target.value));
                                                else setEmailError("");
                                            }}
                                            className={`w-full bg-zinc-50 dark:bg-zinc-950 border ${emailError ? "border-red-400 focus:ring-red-400" : "border-zinc-200 dark:border-zinc-800 focus:border-accent focus:ring-accent/50"} rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-400 dark:placeholder-zinc-600`}
                                            placeholder="john@example.com"
                                        />
                                        {emailError && <p className="text-xs text-red-500 ml-1 mt-1 font-medium">{emailError}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-zinc-400 dark:placeholder-zinc-600 resize-none"
                                            placeholder="How can we help you today?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-zinc-900 hover:bg-black text-white font-medium py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4 active:scale-[0.98]"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
