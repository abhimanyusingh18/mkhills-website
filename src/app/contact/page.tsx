"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Instagram, Globe, Building2, User, FileText } from "lucide-react";

export default function ContactPage() {
    const [mobile, setMobile] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mErr = validateMobile(mobile);
        const eErr = validateEmail(email);

        if (mErr || eErr) {
            setMobileError(mErr);
            setEmailError(eErr);
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/mkhillsfood@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                setMobile("");
                setEmail("");
                (e.target as HTMLFormElement).reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-zinc-900 rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-zinc-100 dark:border-zinc-800 text-center relative overflow-hidden"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -z-10" />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", damping: 20, stiffness: 200 }}
                                className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                        d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </motion.div>

                            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Response Sent!</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-sm">Thank you for reaching out. We've received your inquiry and our team will get back to you shortly.</p>

                            <button
                                onClick={() => setIsSuccess(false)}
                                className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium py-3.5 rounded-xl transition-all active:scale-[0.98]"
                            >
                                Done
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                                        <a href="tel:7099075538" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-2 mt-1">
                                            <Phone size={14} /> 7099075538
                                        </a>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-zinc-900 dark:text-white">Anil Bansal</h4>
                                        <a href="tel:7399064403" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-2 mt-1">
                                            <Phone size={14} /> 7399064403
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

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <input type="hidden" name="_subject" value="New Submission from MK Hills Website!" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_autoresponse" value="Thank you for reaching out to MK Hills Food! We have received your inquiry and our team will get back to you as soon as possible. Our representatives will be in touch shortly. Best Regards, The MK Hills Team" />

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
                                        disabled={isSubmitting}
                                        className="w-full bg-zinc-900 hover:bg-black text-white font-medium py-4 rounded-xl transition-all shadow-md hover:shadow-lg mt-4 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : "Submit Request"}
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
