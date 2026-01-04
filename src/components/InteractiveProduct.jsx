import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Hammer, DollarSign, TrendingUp, AlertTriangle, Zap } from 'lucide-react';

const ProductExplorer = () => {
    const [activeLayer, setActiveLayer] = useState(null);

    const layers = [
        {
            id: 'material',
            title: 'Raw Material',
            icon: <Layers size={24} />,
            color: 'text-blue-400',
            bg: 'bg-blue-400',
            borderColor: 'border-blue-400',
            position: { top: '30%', left: '50%' },
            description: "The foundation of product cost. Volatility in raw material prices directly impacts margins.",
            details: [
                "Sourcing & Procurement: finding quality at competitive rates.",
                "Yield & Wastage: Maximizing material utilization to prevent efficiency loss.",
                "Inventory Carrying Cost: Holding high-value inventory locks working capital."
            ]
        },
        {
            id: 'labor',
            title: 'Manufacturing & Labor',
            icon: <Hammer size={24} />,
            color: 'text-orange-400',
            bg: 'bg-orange-400',
            borderColor: 'border-orange-400',
            position: { top: '50%', left: '50%' },
            description: "Transforming raw material into finished goods. Efficiency here dictates the conversion cost.",
            details: [
                "Machine Hour Rates: Depreciation and power consumption allocation.",
                "Skilled Manpower: High precision requires specialized expertise (higher wages).",
                "Cycle Time Analysis: Reducing time-per-unit increases throughput."
            ]
        },
        {
            id: 'overheads',
            title: 'Overheads & Admin',
            icon: <DollarSign size={24} />,
            color: 'text-green-400',
            bg: 'bg-green-400',
            borderColor: 'border-green-400',
            position: { top: '70%', left: '50%' },
            description: "Indirect costs that often bleed profits if not allocated correctly.",
            details: [
                "Allocation Logic: Distributing rent, utilities, and admin salaries.",
                "Absorption Costing: Ensuring every product absorbs its share of fixed costs.",
                "Marketing & Distribution: The final push costs impacting net margin."
            ]
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Interactive Product Costing
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore the anatomy of a product's cost. Click on the layers to understand why precision costing is the backbone of profitability in a changing world.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-[600px]">
                    {/* Interactive Visual */}
                    <div className="relative w-full max-w-md h-[500px] flex items-center justify-center perspective-1000">
                        {/* Placeholder generic 3D-ish Product Representation using CSS/SVG */}
                        <div className="relative w-64 h-80 flex flex-col items-center justify-center gap-4">

                            {/* Material Layer - Top */}
                            <motion.div
                                className={`w-40 h-24 rounded-2xl border-2 flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-300 ${activeLayer === 'material' ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-110' : 'bg-zinc-800/50 border-zinc-700 hover:border-blue-400/50'
                                    }`}
                                onClick={() => setActiveLayer('material')}
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 0 }}
                                animate={{ y: activeLayer === 'material' ? -40 : 0, opacity: activeLayer && activeLayer !== 'material' ? 0.3 : 1 }}
                            >
                                <Layers className={activeLayer === 'material' ? 'text-blue-400' : 'text-gray-500'} size={32} />
                                <span className="ml-2 font-bold text-white">Material</span>
                            </motion.div>

                            {/* Manufacturing Layer - Middle */}
                            <motion.div
                                className={`w-48 h-28 rounded-2xl border-2 flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-300 ${activeLayer === 'labor' ? 'bg-orange-500/20 border-orange-400 shadow-[0_0_30px_rgba(251,146,60,0.3)] scale-110' : 'bg-zinc-800/50 border-zinc-700 hover:border-orange-400/50'
                                    }`}
                                onClick={() => setActiveLayer('labor')}
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 0 }}
                                animate={{ y: 0, opacity: activeLayer && activeLayer !== 'labor' ? 0.3 : 1 }}
                            >
                                <Hammer className={activeLayer === 'labor' ? 'text-orange-400' : 'text-gray-500'} size={32} />
                                <span className="ml-2 font-bold text-white">Manufacturing</span>
                            </motion.div>

                            {/* Overheads Layer - Bottom */}
                            <motion.div
                                className={`w-56 h-32 rounded-2xl border-2 flex items-center justify-center cursor-pointer backdrop-blur-md transition-all duration-300 ${activeLayer === 'overheads' ? 'bg-green-500/20 border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.3)] scale-110' : 'bg-zinc-800/50 border-zinc-700 hover:border-green-400/50'
                                    }`}
                                onClick={() => setActiveLayer('overheads')}
                                whileHover={{ scale: 1.05 }}
                                initial={{ y: 0 }}
                                animate={{ y: activeLayer === 'overheads' ? 40 : 0, opacity: activeLayer && activeLayer !== 'overheads' ? 0.3 : 1 }}
                            >
                                <DollarSign className={activeLayer === 'overheads' ? 'text-green-400' : 'text-gray-500'} size={32} />
                                <span className="ml-2 font-bold text-white">Overheads</span>
                            </motion.div>

                            {/* Connecting Line effect (optional) */}
                            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center">
                                <div className="w-1 h-full bg-gradient-to-b from-transparent via-zinc-700 to-transparent opacity-20"></div>
                            </div>
                        </div>
                    </div>

                    {/* Info Panel - SpaceX style details */}
                    <div className="w-full max-w-lg min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeLayer ? (
                                <motion.div
                                    key={activeLayer}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl"
                                >
                                    {layers.map(layer => layer.id === activeLayer && (
                                        <div key={layer.id}>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-3 rounded-full ${layer.bg} bg-opacity-20`}>
                                                    <span className={layer.color}>{layer.icon}</span>
                                                </div>
                                                <h3 className={`text-3xl font-heading font-bold ${layer.color}`}>{layer.title}</h3>
                                            </div>

                                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                                {layer.description}
                                            </p>

                                            <div className="space-y-4">
                                                <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">Cost Components</h4>
                                                {layer.details.map((detail, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5"
                                                    >
                                                        <Zap size={18} className={`${layer.color} mt-1 flex-shrink-0`} />
                                                        <span className="text-gray-300">{detail}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center h-full text-center p-8 border border-dashed border-zinc-800 rounded-3xl"
                                >
                                    <TrendingUp size={64} className="text-zinc-700 mb-6" />
                                    <h3 className="text-2xl font-bold text-gray-400 mb-2">Select a Layer</h3>
                                    <p className="text-gray-500">
                                        Click on Raw Material, Manufacturing, or Overheads to see the cost breakdown.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductExplorer;
