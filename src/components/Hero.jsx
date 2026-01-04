import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Costing Analyst",
                "Data Enthusiast",
                "Financial Expert",
                "Problem Solver"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute top-1/2 -right-1/2 w-full h-full bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light text-white mb-4">Welcome To My Portfolio</h2>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white tracking-tight">
                        Sanket <span className="text-white">Patel</span>
                    </h1>
                    <div className="text-2xl md:text-4xl font-light text-gray-300 h-[60px]">
                        An <span ref={el} className="text-white font-semibold"></span>
                    </div>

                    <div className="mt-12">
                        <Link to="about" smooth={true} duration={500}>
                            <button className="px-8 py-3 bg-transparent border border-accent text-white hover:bg-accent hover:text-black transition-all duration-300 rounded-full font-medium text-lg group flex items-center gap-2 mx-auto">
                                Explore My Work
                                <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
