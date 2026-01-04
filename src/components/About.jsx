import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/sanket2.jpg"
                                alt="Sanket Patel"
                                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl shadow-2xl border-2 border-white/10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-2/3"
                    >
                        <div className="glass-card p-8 rounded-2xl bg-zinc-900/40 border border-white/5">
                            <h3 className="text-2xl font-semibold text-white mb-4">Costing Analyst & Data Enthusiast</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I’m Sanket, an Experienced Costing Analyst with 5+ years in product costing, budgeting, and cost optimization.
                                Proficient in costing methods, GAAP, and data-driven analysis using SQL, Python, and data visualization tools.
                                Specialized in driving strategic decisions through deep cost analysis and financial modeling.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/Sanket patel.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-accent/50"
                                >
                                    <Download className="mr-2" size={20} />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
