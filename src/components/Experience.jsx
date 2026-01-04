import React, { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        year: '2023',
        role: "Finance & Costing Analyst",
        company: "Chain N Chains Pvt. Ltd.",
        location: "Mumbai",
        period: "Dec 2023 – Present",
        details: [
            "Implemented an ERP system and led a 15-member cross-functional team.",
            "Streamlined WIP reporting processes, achieving 20% reduction in cycle time and improving operational efficiency",
            "Developed comprehensive flash reports providing real-time financial insights for executive decision-making",
            "Reduced manufacturing costs by 15% through strategic inventory aging analysis and waste minimization initiatives",
            "Implemented standard costing model enabling accurate cost tracking and variance analysis across all departments",
            "Created automated dashboards in Power BI for real-time cost monitoring and KPI tracking"
        ]
    },
    {
        year: '2023',
        role: "Costing Executive",
        company: "Glamour Jewellers FZCO",
        location: "Dubai",
        period: "Apr 2023 – Oct 2023",
        details: [
            "Contributed to annual budgeting and quarterly forecasting processes for new collection launches",
            "Conducted detailed labor and overhead cost analysis to optimize pricing strategies and improve margins",
            "Streamlined costing workflows for custom orders and bulk production, reducing processing time by 25%",
            "Performed SKU-level costing analysis supporting price structuring and margin enhancement initiatives",
            "Collaborated with procurement team to negotiate better supplier terms, reducing material costs by 8%"
        ]
    },
    {
        year: '2021',
        role: "Costing Executive",
        company: "Jewelex India",
        location: "Surat",
        period: "Apr 2021 – Mar 2023",
        details: [
            "Supported implementation of standard cost system and prepared monthly variance reports for management review",
            "Participated in Lean Six Sigma initiatives resulting in 12% improvement in process efficiency",
            "Assisted in annual budgeting process and ensured compliance with financial reporting standards",
            "Developed cost allocation models for accurate departmental expense tracking"
        ]
    },
    {
        year: '2018',
        role: "Junior Costing Executive",
        company: "Uday Fashion",
        location: "Surat",
        period: "Apr 2018 – Mar 2021",
        details: [
            "Collaborated with production and procurement teams to analyze cost drivers and identify waste reduction opportunities",
            "Managed inventory cost control processes and prepared monthly reconciliation reports",
            "Contributed to month-end close activities and financial statement preparation",
            "Assisted in developing cost standards for new product line"
        ]
    }
];

const Experience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"]
    });

    // Transform scroll progress to height (0% to 100%)
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" ref={sectionRef} className="py-20 bg-primary relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Professional Growth</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Central Line Container */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 -translate-x-1/2 rounded-full h-full">
                        {/* The Blue Progress Line */}
                        <motion.div
                            style={{ height: lineHeight }}
                            className="absolute top-0 left-0 w-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                        />
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Timeline Node (Year) */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-4 border-zinc-800 flex items-center justify-center z-10 shadow-xl group-hover:border-blue-500 transition-colors duration-500">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`w-full md:w-[45%] ml-12 md:ml-0 pl-4 md:pl-0 ${index % 2 === 0 ? 'md:text-left md:pr-12' : 'md:text-left md:pl-12'}`}
                                >
                                    <div className="flex flex-col md:block">
                                        <div className={`inline-block mb-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm md:self-start`}>
                                            {exp.year}
                                        </div>

                                        <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 group relative overflow-hidden">
                                            {/* Glow Effect */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>

                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                            <h4 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h4>

                                            <div className="flex items-center text-sm text-gray-500 mb-6 md:justify-start">
                                                <Calendar size={14} className="mr-2 text-blue-400" />
                                                {exp.period}
                                                <span className="mx-2">•</span>
                                                {exp.location}
                                            </div>

                                            <ul className="space-y-3 text-gray-300 md:text-left">
                                                {exp.details.map((item, i) => (
                                                    <li key={i} className="flex flex-row items-start">
                                                        <span className="text-blue-500 mt-1.5 mr-2">•</span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Empty Spacer for the other side */}
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
