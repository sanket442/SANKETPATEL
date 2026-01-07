import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Book,
    ClipboardCheck,
    DollarSign,
    Calculator,
    PieChart,
    BarChart2,
    Database,
    Code,
    Award,
    TrendingUp
} from 'lucide-react';
import Modal from './Modal';

const skills = [
    {
        title: "GAAP Knowledge",
        icon: <Book size={32} />,
        description: "Expertise in Generally Accepted Accounting Principles.",
        details: [
            "Ensured 100% compliance with GAAP standards for quarterly audits.",
            "Streamlined financial statement preparation reducing errors by 10%."
        ]
    },
    {
        title: "Traditional / Standard Costing",
        icon: <ClipboardCheck size={32} />,
        description: "Proficient in costing techniques and variance analysis.",
        details: [
            "Built standard costing from scratch in a gold jewellery manufacturing company.",
            "Handled costing for 10,000+ unique products, each with different designs and manufacturing processes.",
            "Performed monthly variance analysis by comparing standard cost vs actual cost.",
            "Analyzed losses in material quantity, manufacturing time, machine usage, and manpower cost.",
            "Supported management with data-driven insights for cost control and decision-making.",
            "Applied similar standard costing and variance analysis methods in a clothing manufacturing company."
        ]
    },
    {
        title: "Six Sigma & Kaizen",
        icon: <TrendingUp size={32} />,
        description: "Process Improvement",
        details: [
            "Applied Six Sigma & Kaizen to eliminate bottlenecks and non-value-added activities.",
            "Redesigned ERP workflow at Chain & Chains, reducing documentation delays.",
            "Streamlined operations for faster, error-free execution."
        ]
    },
    {
        title: "Budgeting",
        icon: <Calculator size={32} />,
        description: "Experienced in creating budgets and forecasting.",
        details: [
            "Prepared sales budgets, production budgets, and department-wise costing budgets.",
            "Conducted monthly comparison of budgeted vs actual costs to track variances.",
            "Identified cost deviations early and shared insights for better cost control and planning.",
            "Supported management with structured budgeting and performance monitoring."
        ]
    },
    {
        title: "Data Analysis",
        icon: <PieChart size={32} />,
        description: "Break-even points and profitability metrics.",
        details: [
            "Performed deep management-level analysis using Excel, Power BI, Python, and Streamlit for clear and actionable insights.",
            "Automated repetitive reports and dashboards to reduce manual workflow and dependency on Excel files.",
            "Built interactive dashboards for tracking cost, productivity, and operational performance.",
            "Supported management decisions with data-backed insights and trend analysis."
        ]
    },
    {
        title: "Power BI",
        icon: <BarChart2 size={32} />,
        description: "Expert in dashboard design, DAX, and drill-downs.",
        certificateLink: "https://www.udemy.com/certificate/UC-5c33fb38-e702-4c40-86d3-a854e48b9f61/",
        visualType: 'graph',
        details: [
            "Developed 'Daily Live Report KPI' dashboard for real-time tracking.",
            "Created interactive visualizations for sales performance vs targets.",
            "Automated data refresh reducing manual reporting time by 15 hours/month."
        ]
    },
    {
        title: "SQL",
        icon: <Database size={32} />,
        description: "Proficient in data extraction, joins, subqueries.",
        certificateLink: "https://www.udemy.com/certificate/UC-764e0a9d-f4c2-410b-86fd-9d48eed4a7b8/",
        visualType: 'code',
        details: [
            "Leveraged SQL to consolidate data from multiple sources and generate cost reports, supporting physical cost control, variance analysis, and management decision-making."
        ]
    },
        {
        title: "Python",
        icon: <Code size={32} />,
        description: "Skilled in Pandas, NumPy for data analysis.",
        details: [
            "Automated repetitive Excel tasks using Pandas scripts.",
            "Performed statistical analysis on cost drivers using NumPy.",
            "Created interactive and automated data visualizations using Matplotlib, Seaborn, and Streamlit to simplify deep data analysis, improve insights clarity, and reduce manual reporting workload."
        ]
    },
    {
        title: "SAP FICO & CO Module",
        icon: <Award size={32} />,
        description: "Currently pursuing comprehensive training and certification.",
        details: ["Gaining in-depth knowledge of Financial Accounting (FI) and Controlling (CO) modules to enhance financial reporting and cost management capabilities."],
        certificateLink: "ongoing"
    }
];

const Skills = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setTimeout(() => setSelectedSkill(null), 300); // Clear after animation
    };

    return (
        <section id="skills" className="py-20 bg-secondary relative">
            <Modal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                title={selectedSkill?.title}
                link={selectedSkill?.certificateLink}
                details={selectedSkill?.details}
                visualType={selectedSkill?.visualType}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Functional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Functional Skills</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {skills.filter(s => !s.certificateLink).map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleSkillClick(skill)}
                            className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 group cursor-pointer hover:transform hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors"></div>

                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {skill.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {skill.description}
                            </p>

                            <div className="flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Details <span className="ml-1">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Professional Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Professional Certifications</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                    {skills.filter(s => s.certificateLink).map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleSkillClick(skill)}
                            className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 group cursor-pointer hover:transform hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-accent/10 transition-colors"></div>

                            <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                    {skill.title}
                                </h3>
                                <div className="p-2 bg-accent/10 rounded-full">
                                    <Award size={20} className="text-accent" />
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {skill.description}
                            </p>

                            <div className="flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                {skill.certificateLink === 'ongoing' ? (
                                    <span className="text-yellow-500">Currently In Progress</span>
                                ) : (
                                    <>View Certificate <span className="ml-1">→</span></>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
