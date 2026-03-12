"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { UserCircle, Mail, Phone, ExternalLink, Search, Filter, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const professors = [
    // Administrative
    { id: 1, name: "Dr. Saradha", dept: "Administrative", role: "Principal", qual: "M.E., Ph.D.", exp: "34 Years", spec: "Semantic Web, Neural Networks", email: "gceeprincipal@gmail.com", image: "http://www.gcee.ac.in/include/ajax/cse/professor&hod.jpeg" },
    { id: 101, name: "Dr. B. Suresh", dept: "Administrative", role: "Registrar i/c", qual: "M.E., Ph.D.", exp: "22 Years", spec: "Public Administration", email: "registrar@gcee.ac.in" },
    { id: 102, name: "Mr. K. Ramesh", dept: "Administrative", role: "Administrative Officer", qual: "MBA, M.Phil.", exp: "18 Years", spec: "Management Systems", email: "ao@gcee.ac.in" },

    // Civil
    { id: 2, name: "Dr. P. Saravanakumar", dept: "Civil", role: "Assistant Professor (Sr) & Head", qual: "M.E., Ph.D", exp: "20 Years", spec: "Structural Engineering", email: "grpsaravanan@gmail.com", phone: "+91-94436 67806", journals: 6, conf: 10, image: "http://www.gcee.ac.in/include/ajax/civil/civil_hod.jpg" },
    { id: 3, name: "Dr. G. M. Gowthama kumar", dept: "Civil", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "16 Years", spec: "Structural Engineering", email: "gowthamakumar@irttech.ac.in", phone: "+91-97505 15559", journals: 4 },
    { id: 4, name: "Dr. D. Sathies Kumar", dept: "Civil", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "14 Years", spec: "Structural Engineering", email: "sathieskumaar2004@gmail.com", phone: "+91-94884 73460", journals: 4, conf: 6 },

    // Automobile
    { id: 5, name: "Dr. R. Senthilraja", dept: "Automobile", role: "Head of Department i/c", qual: "M.E., Ph.D", exp: "12 Years", spec: "Thermal Engineering", email: "senthilraja@irttech.ac.in", phone: "+91-94432 78504", journals: 1, conf: 1 },

    // Mechanical
    { id: 6, name: "Dr. K. Balamurugan", dept: "Mechanical", role: "Head of the Department", qual: "M.E., Ph.D", exp: "23 Years", spec: "Manufacturing Engineering", email: "drkbalamurugan@gcee.ac.in", phone: "+91-9150166322", journals: 80, conf: 25, extra: "Ph.D Supervision: 11 | R&D Projects: 6" },
    { id: 7, name: "Dr. R. Senthilraja", dept: "Mechanical", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "12 Years", spec: "Thermal Engineering", email: "senthilraja@irttech.ac.in", phone: "+91-94432 78504", journals: 7, conf: 1 },
    { id: 8, name: "Mr. N. S. Nandakumar", dept: "Mechanical", role: "Assistant Professor", qual: "M.E", exp: "17 Years", spec: "Engineering Design", email: "nandukongu97@gmail.com", phone: "+91-98427 97980", journals: 2, conf: 8 },
    { id: 9, name: "Dr. N. Vadivel", dept: "Mechanical", role: "Assistant Professor", qual: "Ph.D", exp: "22 Years", spec: "Thermal Engineering", email: "vadivel_n@gcee.ac.in", phone: "+91-9489891187", journals: 8, conf: 3 },
    { id: 10, name: "Mrs. K. Uma", dept: "Mechanical", role: "Assistant Professor", qual: "M.E", exp: "14.5 Years", spec: "Manufacturing Engineering", email: "uma_nithen@yahoo.com", phone: "+91-9952800483", journals: 2, conf: 3 },
    { id: 11, name: "Mr. P. Gowtham", dept: "Mechanical", role: "Assistant Professor", qual: "M.E", exp: "8 Years", spec: "Thermal Engineering", email: "gowthamvortex@gmail.com", phone: "+91-9629742301", journals: 4, conf: 0 },

    // EEE
    { id: 12, name: "Dr. M. Mohammadha Hussaini", dept: "EEE", role: "Head of the Department", qual: "M.E., Ph.D", exp: "25 Years", spec: "Power Systems", email: "hussaini1008@gmail.com", phone: "+91-9443406070", journals: 9, conf: 20 },
    { id: 13, name: "Dr. B. Baby Priya", dept: "EEE", role: "Associate Professor", qual: "M.E., Ph.D", exp: "22 Years", spec: "Electrical Machines", email: "babypriya@irttech.ac.in", phone: "+91-94869 37393", journals: 4, conf: 9 },
    { id: 14, name: "Dr. A. Vetrivel", dept: "EEE", role: "Associate Professor", qual: "M.E., Ph.D", exp: "22 Years", spec: "Power Systems", email: "vetrivel@irttech.ac.in", phone: "+91-9367771401", journals: 4, conf: 6 },
    { id: 15, name: "Dr. S. Dhanapal", dept: "EEE", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "14 Years", spec: "Power Electronics", email: "sdhanapalirtt@gmail.com", phone: "+91-9994039996", journals: 3 },
    { id: 16, name: "Mrs. S. Gomathi", dept: "EEE", role: "Assistant Professor", qual: "M.E", exp: "12 Years", spec: "Control Systems", email: "gomathi@irttech.ac.in", phone: "+91-99949 68455", journals: 2, conf: 6 },
    { id: 17, name: "Dr. K. TamilSelvan", dept: "EEE", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "12 Years", spec: "Process Control", email: "ktstamil@gmail.com", phone: "+91-98650 15550", conf: 4 },
    { id: 18, name: "Dr. A. Gowthaman", dept: "EEE", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "19 Years", spec: "Applied Electronics", email: "gowthaman@irttech.ac.in", phone: "+91-94423 34682", conf: 4 },
    { id: 19, name: "Dr. P. Govindasamy", dept: "EEE", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "18 Years", spec: "Power Electronics", email: "govindasamy@irttech.ac.in", phone: "+91-94436 18383", journals: 2, conf: 2 },

    // ECE
    { id: 20, name: "Mr. M. RAJA", dept: "ECE", role: "Head of the Department", qual: "M.E", exp: "30 Years", spec: "Microwave Engineering", email: "raja@irttech.ac.in", phone: "+91-9842765554", journals: 2, conf: 2 },
    { id: 21, name: "Dr. G. Gowrison", dept: "ECE", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "36 Years", spec: "Electronics", email: "gowrisonirtt@gmail.com", phone: "9486614404", journals: 21, conf: 4 },
    { id: 22, name: "Mrs. S. Barathi", dept: "ECE", role: "Assistant Professor", qual: "M.Tech", exp: "21 Years", spec: "VLSI Design", email: "bharathi@irttech.ac.in", phone: "+91-424-2533279-113" },
    { id: 23, name: "Dr. R. Senthil Kumar", dept: "ECE", role: "Assistant Professor", qual: "Ph.D", exp: "18 Years", spec: "Image Processing", email: "senthilkumar@irttech.ac.in", phone: "+91-424-2533279-148", journals: 4, conf: 9 },
    { id: 24, name: "Mrs. S. K. Fairoze Banu", dept: "ECE", role: "Assistant Professor", qual: "M.E", exp: "14 Years", spec: "Applied Electronics", email: "fairozebanu@irttech.ac.in", phone: "+91-424-2533279-151", conf: 2 },
    { id: 25, name: "Mrs. N. Madhavi", dept: "ECE", role: "Assistant Professor", qual: "M.E", exp: "14 Years", spec: "Applied Electronics", email: "madhavi@irttech.ac.in", phone: "+91-424-2533279-151" },
    { id: 26, name: "Mr. P. Kaliram", dept: "ECE", role: "Assistant Professor", qual: "M.E", exp: "14 Years", spec: "Communication systems", email: "kaliram@irttech.ac.in", phone: "+91-9944846466", journals: 3, conf: 2 },
    { id: 27, name: "Dr. P. K. Kowsalya", dept: "ECE", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "12 Years", spec: "Applied Electronics", email: "kowsalya@irttech.ac.in", phone: "+91-424-2533279-151" },

    // CSE & DS
    { id: 28, name: "Dr. A. Kavitha", dept: "CSE & DS", role: "Head of the Department", qual: "M.E., Ph.D", exp: "24 Years", spec: "Semantic Web", email: "kavitha@gcee.ac.in", phone: "9442513055", journals: 6, conf: 3 },
    { id: 29, name: "Mr. R. Sivasubramanian", dept: "CSE & DS", role: "Associate Professor", qual: "M.S", exp: "30 Years", spec: "Data Structure", email: "sivasubramanian@irttech.ac.in", phone: "+91 9443971304", journals: 2, conf: 2 },
    { id: 30, name: "Dr. G. Venkatachalam", dept: "CSE & DS", role: "Associate Professor", qual: "M.E., Ph.D", exp: "30 Years", spec: "Computer Networks", email: "venkatachalam@irttech.ac.in", phone: "9842794127", journals: 10, conf: 2 },
    { id: 31, name: "Mrs. M. Annapoorani", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E", exp: "21 Years", spec: "Operating Systems", email: "annapoorani@irttech.ac.in", phone: "+91-9894513301", conf: 2 },
    { id: 32, name: "Dr. S. Palanisamy", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "21 Years", spec: "XML Data Management", email: "palanisamy@irttech.ac.in", phone: "+91-424-2533279-113", journals: 2, conf: 5 },
    { id: 33, name: "Dr. N. Magesh", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "24 Years", spec: "Machine Learning", email: "magesh@irttech.ac.in", phone: "9442837703", journals: 16, conf: 14 },
    { id: 34, name: "Dr. M. Marikkannan", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "26 Years", spec: "Databases", email: "marikkannanm@gcee.ac.in", phone: "9443851839", journals: 35, conf: 6 },
    { id: 35, name: "Dr. D. S. Thenmozhi", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E, Ph.D", exp: "18+ Years", spec: "Computer Science", phone: "+91-98429 81158", journals: 4, conf: 4 },
    { id: 36, name: "Dr. V. Thilagavathe", dept: "CSE & DS", role: "Assistant Professor (SR)", qual: "M.E, Ph.D", exp: "17+ Years", spec: "Computer Science", phone: "+91-99427 65072", journals: 3, conf: 3, extra: "Books Published: 2" },
    { id: 37, name: "Dr. R. Kalaivani", dept: "CSE & DS", role: "Assistant Professor", qual: "M.E, Ph.D", exp: "17+ Years", spec: "Computer Science", phone: "+91-99429 11433", journals: 2, conf: 2 },
    { id: 38, name: "Mrs. N. Vasuki", dept: "CSE & DS", role: "Assistant Professor", qual: "M.E", exp: "15 Years", spec: "Operating System", email: "vasuki@irttech.ac.in", phone: "+91-424-2533279-113", conf: 2 },
    { id: 39, name: "Dr. S. Kalaivani", dept: "CSE & DS", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "18 Years", spec: "Compiler Design", email: "kalaivanis@irttech.ac.in", phone: "+91-424-2533279-143", journals: 5, conf: 6 },
    { id: 40, name: "Mrs. S. VIJAYALAKSHMI", dept: "CSE & DS", role: "Assistant Professor", qual: "M.E", exp: "16 Years", spec: "Computer Science", phone: "+91-94438 19811" },

    // IT
    { id: 41, name: "Dr. I. Bhuvaneshwarri", dept: "IT", role: "Head of the Department i/c", qual: "M.E, Ph.D", exp: "24 Years", spec: "Big Data Analytics", email: "ibw@gcee.ac.in", phone: "+91-9442689006", journals: 12, conf: 10, extra: "Books & Patents: 1 & 1" },
    { id: 42, name: "Dr. K. G. Maheswari", dept: "IT", role: "Assistant Professor", qual: "M.Tech., Ph.D", exp: "21 Years", spec: "Information Technology", phone: "+91-98943 53799", journals: 24, conf: 10, extra: "Patents: 3 | Books: 1" },
    { id: 43, name: "Dr. M. Poongothai", dept: "IT", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "16 Years", spec: "Data Mining", email: "poongothai@irttech.ac.in", phone: "+91-97502 30003", journals: 1, conf: 2 },
    { id: 44, name: "Mrs. R. Sathyavani", dept: "IT", role: "Assistant Professor (SR)", qual: "M.Tech", exp: "19 Years", spec: "Advanced computing", email: "sathyavani@irttech.ac.in", phone: "+91-9443831800", conf: 1 },
    { id: 45, name: "Dr. S. Thilagavathi", dept: "IT", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "21 Years", spec: "Wireless Networks", email: "thilagavathi@irttech.ac.in", phone: "+91-94439 07577", journals: 3, conf: 3 },
    { id: 46, name: "Dr. S. Mohanasundaram", dept: "IT", role: "Assistant Professor (SR)", qual: "M.Tech., Ph.D", exp: "26 Years", spec: "Embedded Systems", email: "smohanirtt@gmail.com", phone: "+91-96986 12555", journals: 25, conf: 7, extra: "Patents: 1" },
    { id: 47, name: "Dr. P. Thangavel", dept: "IT", role: "Assistant Professor (SR)", qual: "M.E., Ph.D", exp: "26 Years", spec: "Computer Networks", email: "thangsirtt@gmail.com", phone: "+91-9698622666", journals: 25, conf: 7, extra: "Patents: 1" },
    { id: 48, name: "Dr. M. Sathyakala", dept: "IT", role: "Assistant Professor", qual: "M.Tech., Ph.D.", exp: "15 Years", spec: "Data Mining", email: "sathyakala@irttech.ac.in", phone: "+91-99427 98628", journals: 1, conf: 2 },
    { id: 49, name: "Dr. M. N. Sudha", dept: "IT", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "17+ Years", spec: "Information Technology", phone: "+91-94434 45334", journals: 2, conf: 3 },
    { id: 50, name: "Mr. B. V. Prakash", dept: "IT", role: "Assistant Professor", qual: "M.E", exp: "15 Years", spec: "Software Engineering", email: "prakash@irttech.ac.in", phone: "+91-98652 33933", journals: 1, conf: 3 },
    { id: 51, name: "Dr. R. Anurekha", dept: "IT", role: "Assistant Professor", qual: "M.E. Ph.D", exp: "19 Years", spec: "Network Security", email: "dranurekha@gmail.com", phone: "+91-98429 18929", journals: 7, conf: 17 },
    { id: 52, name: "Dr. K. Murugan", dept: "IT", role: "Assistant Professor", qual: "M.E., Ph.D", exp: "14 Years", spec: "Software Engineering", email: "murugan@irttech.ac.in", phone: "+91-99430 05801", journals: 1, conf: 3 },
    { id: 53, name: "Dr. T. SUMATHI", dept: "IT", role: "Assistant Professor", qual: "M.E, Ph.D", exp: "15+ Years", spec: "Information Technology", phone: "+91-9976020109", journals: 4 },

    // S & H
    { id: 54, name: "Mr. P. Asaigeethan", dept: "S & H", role: "Head of Department", qual: "M.Sc., M.Phil.", exp: "20 Years", spec: "Mathematics", email: "hodsh@gcee.ac.in", image: "/images/faculty/sh-hod.jpeg" },
    { id: 55, name: "Dr. M. Rajeswari", dept: "S & H", role: "Associate Professor", qual: "M.Sc., M.Phil., Ph.D.", exp: "16 Years", spec: "Physics", email: "mrajeswari@gct.ac.in" },
];

const depts = ["All", "Administrative", "Civil", "Mechanical", "ECE", "EEE", "CSE & DS", "IT", "Automobile", "S & H"];

const FacultyPage = () => {
    const [filter, setFilter] = useState("All");

    const filteredFaculty = filter === "All"
        ? professors
        : professors.filter(p => p.dept === filter);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <PageHeader
                title="Our Distinguished Faculty"
                subtitle="Meet the highly qualified and experienced educators driving technical excellence at GCE Erode."
                breadcrumb="Faculty"
                bgImage="https://www.gcee.ac.in/assets/img/sliders/layer/CollegeBirdView.jpeg"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-3xl shadow-sm border border-gray-100 flex-shrink-0">
                            {depts.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setFilter(d)}
                                    className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === d
                                        ? "bg-primary text-secondary shadow-lg shadow-primary/30"
                                        : "text-gray-400 hover:text-primary hover:bg-gray-50 bg-transparent"
                                        }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-grow md:w-64">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input type="text" placeholder="Search faculty member..." className="w-full px-12 py-4 bg-white border border-gray-100 rounded-2xl focus:border-primary/20 transition-all outline-none text-sm shadow-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-24">
                        {depts.filter(d => d !== "All" && (filter === "All" || filter === d)).map((deptName) => {
                            const deptFaculty = professors.filter(p => p.dept === deptName);
                            if (deptFaculty.length === 0) return null;

                            return (
                                <div key={deptName} className="space-y-12">
                                    <div className="flex items-center gap-4">
                                        <div className="h-0.5 flex-grow bg-gray-100"></div>
                                        <h2 className="text-2xl font-bold font-heading text-primary bg-gray-50 px-6 py-2 rounded-full border border-gray-100 uppercase tracking-widest text-sm">
                                            {deptName}
                                        </h2>
                                        <div className="h-0.5 flex-grow bg-gray-100"></div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {deptFaculty.map((p) => (
                                            <motion.div
                                                key={p.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="bg-white p-8 lg:p-10 rounded-[50px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group overflow-hidden relative"
                                            >
                                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                                    <GraduationCap className="w-24 h-24" />
                                                </div>

                                                <div className="flex flex-col items-center text-center space-y-6">
                                                    <div className="w-24 h-24 rounded-[30px] overflow-hidden shadow-lg border-2 border-secondary/20 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                                                        {p.image ? (
                                                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary">
                                                                <UserCircle className="w-12 h-12" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="space-y-1">
                                                        <h4 className="text-xl font-bold font-heading text-primary leading-tight">{p.name}</h4>
                                                        <p className="text-xs font-black text-secondary uppercase tracking-widest">{p.role}</p>
                                                        <p className="text-sm font-bold text-gray-400 italic font-body">{p.qual} • {p.exp || 'N/A'}</p>
                                                    </div>

                                                    <div className="w-full py-4 px-6 bg-gray-50 rounded-3xl border border-gray-100 group-hover:bg-white group-hover:border-primary/10 transition-all space-y-2">
                                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Expertise & Research</div>
                                                        <div className="text-xs font-bold text-primary italic leading-tight">{p.spec}</div>
                                                        {(p.journals || p.conf) && (
                                                            <div className="flex items-center justify-center gap-4 pt-2 border-t border-gray-200/50">
                                                                {p.journals && <div className="text-[10px] font-black text-secondary uppercase">📜 {p.journals} Journals</div>}
                                                                {p.conf && <div className="text-[10px] font-black text-secondary uppercase">🎤 {p.conf} Conf</div>}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="w-full pt-6 border-t border-gray-100 flex flex-col items-center gap-3">
                                                        {p.email && (
                                                            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-400 cursor-pointer hover:text-primary transition-colors lowercase tracking-tighter">
                                                                <Mail className="w-3.5 h-3.5 text-secondary" />
                                                                <span>{p.email}</span>
                                                            </div>
                                                        )}
                                                        {p.phone && (
                                                            <div className="flex items-center space-x-2 text-[10px] font-black text-gray-400 cursor-pointer hover:text-primary transition-colors">
                                                                <Phone className="w-3.5 h-3.5 text-secondary" />
                                                                <span>{p.phone}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredFaculty.length === 0 && (
                        <div className="h-64 flex flex-col items-center justify-center text-gray-400 italic p-8 text-center bg-white rounded-[50px] border-2 border-dashed border-gray-100">
                            <span className="text-4xl mb-4">🔍</span>
                            No faculty members found in this department.
                        </div>
                    )}

                    {/* <div className="pt-24 text-center space-y-8">
                        <div className="inline-block p-8 bg-primary rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                                <img src="/next.svg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0 w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center shadow-lg uppercase font-black">HOD</div>
                                <div className="space-y-1 text-center md:text-left">
                                    <h4 className="text-xl font-bold font-heading italic tracking-tight">Access Branch-wise Faculty Directory</h4>
                                    <p className="text-xs font-bold font-body opacity-60">Complete list of assistant and associate professors across all technical departments.</p>
                                </div>
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl whitespace-nowrap hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">Detailed Directory PDF</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FacultyPage;
