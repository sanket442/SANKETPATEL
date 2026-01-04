
import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, link, details, visualType }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5 bg-zinc-800/50">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                {/* Visual Representation (Mock Graph / Stats) */}
                {visualType === 'graph' && (
                  <div className="mb-8 p-6 bg-black/40 rounded-xl border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-6 bg-accent rounded-sm"></div> Performance Metrics
                    </h4>
                    <div className="space-y-4">
                      {/* Mock Bars */}
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Efficiency Gain</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-accent rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Analysis Accuracy</span>
                          <span>98%</span>
                        </div>
                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-accent rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Details List */}
                <div className="mb-6">
                  {details && Array.isArray(details) ? (
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {details.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    // Fallback for certificate links or simple text
                    <p className="text-gray-300 mb-4">
                      {details || "Please view the credential for more details."}
                    </p>
                  )}

                  {link && link !== 'ongoing' && (
                    <div className="mt-8 text-center">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
                      >
                        View Credential <ExternalLink size={18} />
                      </a>
                    </div>
                  )}

                  {link === 'ongoing' && (
                    <div className="mt-8 text-center">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500/10 text-yellow-500 font-bold rounded-lg border border-yellow-500/20">
                        Currently In Progress
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

