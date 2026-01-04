import React from 'react';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Location</h4>
                                <p className="text-gray-400">Aloka CHS, Sector - 21, Nerul East,<br />Navi Mumbai, 400706.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Email</h4>
                                <a href="mailto:sanket442@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    sanket442@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-accent">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                                <a
                                    href="https://www.linkedin.com/in/sanket-patel-663354aa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            action="https://formsubmit.co/sanket442@gmail.com"
                            method="POST"
                            className="glass-card p-8 rounded-2xl space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-primary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-600 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-primary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-600 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    className="w-full px-4 py-3 bg-primary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-600 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="How can I help you?"
                                    className="w-full px-4 py-3 bg-primary/50 border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white placeholder-gray-600 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-accent-light transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
