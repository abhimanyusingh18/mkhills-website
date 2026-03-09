"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Tried their packaged slice cakes recently and was honestly surprised by how fresh they tasted. Usually packaged stuff is dry, but these were super soft. Definitely buying again.",
        author: "Abhimanyu Singh",
        role: "Customer",
    },
    {
        id: 2,
        quote: "We started stocking 2tymes cookies at our checkout counters a month ago. They fly off the shelves. Customers keep coming back specifically asking for the 2tymes products.",
        author: "Gautam Aggarwal",
        role: "Retailer",
    },
    {
        id: 3,
        quote: "Bought a bunch of donut cakes for my kid's birthday party and they were a huge hit. They taste fresh and the chocolate filling is really good. Highly recommend!",
        author: "Khushal Jain",
        role: "Regular Customer",
    },
    {
        id: 4,
        quote: "Been handling their distribution for a few months now. The packaging quality is excellent—very little transit damage compared to other brands, and the shelf life holds up exactly as claimed.",
        author: "Akash Pareek",
        role: "Distributor",
    },
    {
        id: 5,
        quote: "We order their premium cookie gift packs for our client Diwali hampers. It's a lifesaver. The presentation looks premium and the feedback from our clients has been completely positive.",
        author: "Piyush Harlalka",
        role: "Bulk Corporate Buyer",
    },
    {
        id: 6,
        quote: "For mass-produced packaged bakery items, the texture of their slice cakes is genuinely impressive. They've managed to retain moisture without relying on an overly artificial aftertaste. A very solid product.",
        author: "Hitesh Rupani",
        role: "Food Critic",
    },
];

export function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.25, 1, 0.5, 1] as const },
        },
    };

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-zinc-950 text-white relative">
            <div className="absolute inset-0 bg-[url('/images/bigHomePage.png')] bg-cover bg-center opacity-10" />
            <div className="container relative z-10 mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] as const }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <div className="flex justify-center mb-4">
                        <span className="uppercase text-sm tracking-widest text-accent font-medium">Client Echoes</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 text-white">
                        Words of Delight.
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-lg md:text-xl font-light leading-relaxed mb-8 italic text-white/90">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-lg text-white">{testimonial.author}</h4>
                                <p className="text-sm text-accent tracking-wide uppercase">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
