"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Search, Filter, Calendar, MapPin, Tag, ArrowRight, Share2, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const campusPhotos = [
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal8.jpg",
        alt: "Students engaging in campus activities at GCE Erode.",
        caption: "Student Activities"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal16.jpg",
        alt: "A scenic view of the GCE Erode campus grounds.",
        caption: "Campus Grounds"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal24.jpg",
        alt: "Students processing during the annual convocation ceremony.",
        caption: "Convocation Ceremony"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/img4.jpg",
        alt: "Dignitaries inaugurating a major institute event.",
        caption: "Event Inauguration"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/blog/img21.jpg",
        alt: "GCE Erode NSS Team volunteers organized for a community event.",
        caption: "NSS Team"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/img1-1.jpg",
        alt: "Front view of the Government College of Engineering Erode building.",
        caption: "Main Administrative Building"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal12.jpg",
        alt: "Students studying inside the central library at GCEE",
        caption: "Central Library"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal32.jpg",
        alt: "Mechanical engineering students working in the workshop lab",
        caption: "Mechanical Workshop"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal5.jpg",
        alt: "Students performing experiments in the science laboratory",
        caption: "Science Laboratory"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal30.jpg",
        alt: "Students gathering for a cultural farewell event",
        caption: "Cultural Event"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/main/irtt_gal27.jpg",
        alt: "Students presenting projects at the department technical expo",
        caption: "Technical Expo"
    },
    {
        src: "https://www.gcee.ac.in/assets/img/blog/img8.jpg",
        alt: "Student club representatives organizing an event",
        caption: "Clubs & Events"
    }
];

const newsItems = [
    { id: 1, title: "GCEE Sanctioned Pre-Incubator by StartupTN", desc: "A major boost to entrepreneurship on campus. The incubation center will foster innovative ventures.", category: "Innovation", date: "Jan 15, 2024", image: "https://www.gcee.ac.in/assets/img/main/irtt_gal8.jpg" },
    { id: 2, title: "Mechanical Department Secures CMRG Grant", desc: "Funds sanctioned for 'LABMAN' Probe Sonicator installation for advanced mechanical research.", category: "Research", date: "Jan 28, 2024", image: "https://www.gcee.ac.in/assets/img/main/irtt_gal32.jpg" },
    { id: 3, title: "Anna University Zone XI Men's Sports Meet", desc: "Congratulations to our athletic teams on securing multiple podium finishes in the recent zonal meet.", category: "Sports", date: "Feb 10, 2024", image: "https://www.gcee.ac.in/assets/img/main/irtt_gal16.jpg" },
    { id: 4, title: "2024 Placements Reach New Peak of 38.5 LPA", desc: "Our students continue to break records with major offers from SIERRA, Cadence and ZOHO.", category: "Placement", date: "Feb 15, 2024", image: "https://www.gcee.ac.in/assets/img/blog/TPCell.jpg" },
    { id: 5, title: "Industrial Visit to TAFE Manufacturing Hub", desc: "Final year students visited the TAFE plant to understand large-scale manufacturing processes.", category: "Academic", date: "Feb 22, 2024", image: "https://www.gcee.ac.in/assets/img/main/irtt_gal4.jpg" },
    { id: 6, title: "National Level Symposium 'TECHNO-2024'", desc: "Registration open for our flagship annual technical symposium across all engineering branches.", category: "Events", date: "Mar 05, 2024", image: "https://www.gcee.ac.in/assets/img/main/irtt_gal21.jpg" },
];

const categories = ["All", "Innovation", "Research", "Sports", "Placement", "Academic", "Events"];

const NewsArchivePage = () => {
    const [filter, setFilter] = useState("All");

    const filteredNews = filter === "All"
        ? newsItems
        : newsItems.filter(item => item.category === filter);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHeader
                title="News & Events Archive"
                subtitle="Stay updated with the latest happenings, academic breakthroughs and achievements at GCE Erode."
                breadcrumb="News & Events"
            />

            <section className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
                    Campus Moments
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Glimpses from recent activities and life at GCE Erode.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {campusPhotos.map((photo) => (
                        <figure
                            key={photo.src}
                            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            {photo.caption && (
                                <figcaption className="px-3 py-2 text-xs text-gray-600 bg-gray-50 border-t border-gray-100">
                                    {photo.caption}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap justify-center gap-4 p-2 bg-gray-50 rounded-2xl border border-gray-100 flex-shrink-0">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setFilter(c)}
                                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${filter === c
                                            ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                            : "text-gray-400 hover:text-primary hover:bg-white bg-transparent"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input type="text" placeholder="Search archives..." className="w-full px-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-primary/20 transition-all outline-none text-sm" />
                            </div>
                            <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-primary transition-all">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode="popLayout">
                            {filteredNews.map((news) => (
                                <motion.div
                                    key={news.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white border border-gray-100 rounded-[50px] shadow-xl hover:shadow-2xl transition-all group overflow-hidden flex flex-col h-full relative"
                                >
                                    <div className="relative h-64 overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                        <Image src={news.image} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top" alt={news.title} />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-primary/90 text-secondary text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-sm border border-white/10 z-10">
                                            {news.category}
                                        </div>
                                    </div>

                                    <div className="p-10 flex-grow flex flex-col space-y-6">
                                        <div className="flex items-center space-x-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-3 h-3 text-secondary" />
                                                <span>{news.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Tag className="w-3 h-3 text-secondary" />
                                                <span>Official Update</span>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-bold font-heading text-primary leading-tight group-hover:underline decoration-secondary decoration-4 underline-offset-4 cursor-pointer">{news.title}</h4>

                                        <p className="text-gray-500 text-sm font-body leading-relaxed flex-grow line-clamp-3">
                                            {news.desc}
                                        </p>

                                        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <button className="flex items-center text-xs font-bold text-primary group-hover:translate-x-2 transition-transform">
                                                Read Full Article <ArrowRight className="ml-2 w-4 h-4 text-secondary" />
                                            </button>
                                            <div className="flex items-center space-x-4">
                                                <Share2 className="w-4 h-4 text-gray-300 hover:text-primary transition-colors cursor-pointer" />
                                                <MoreHorizontal className="w-4 h-4 text-gray-300 hover:text-primary transition-colors cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-24 pt-12 border-t border-gray-100 text-center">
                        <button className="px-12 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/30 transition-all flex items-center mx-auto text-sm">
                            View All Past Updates <ArrowRight className="ml-3 w-5 h-5 text-secondary" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default NewsArchivePage;
