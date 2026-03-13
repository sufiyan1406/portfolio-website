import { motion } from 'framer-motion';
import { GitCommit, Github, BookOpen } from 'lucide-react';

const GithubActivity = () => {
    return (
        <section className="py-24 relative bg-[#0a0f1c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">GitHub</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Activity</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="glass-card p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff]">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">@sufiyan1406</h3>
                                    <p className="text-gray-400 text-sm">Active Developer</p>
                                </div>
                            </div>

                            <div className="space-y-4 mt-6">
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <BookOpen className="w-4 h-4 text-[#8a2be2]" /> Repositories
                                    </div>
                                    <span className="font-bold text-white">35</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <GitCommit className="w-4 h-4 text-[#00f0ff]" /> Total Commits
                                    </div>
                                    <span className="font-bold text-white">450+</span>
                                </div>
                                <div className="pt-2">
                                    <a href="https://github.com/sufiyan1406" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:text-[#8a2be2] transition-colors text-sm font-medium flex items-center gap-1 group">
                                        View GitHub Profile <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Graph Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center overflow-hidden"
                    >
                        <h3 className="text-lg font-bold text-white mb-6">Contribution Heatmap</h3>
                        <div className="w-full overflow-x-auto custom-scrollbar pb-4">
                            {/* This is a visual mockup of a github contribution graph */}
                            <div className="min-w-[700px] flex gap-1">
                                {Array.from({ length: 52 }).map((_, colIndex) => (
                                    <div key={colIndex} className="flex flex-col gap-1">
                                        {Array.from({ length: 7 }).map((_, rowIndex) => {
                                            // Randomize intensity for the mockup
                                            const intensity = Math.random();
                                            let bgColor = 'bg-gray-800/50';
                                            if (intensity > 0.8) bgColor = 'bg-[#00f0ff]';
                                            else if (intensity > 0.6) bgColor = 'bg-[#00f0ff]/70';
                                            else if (intensity > 0.4) bgColor = 'bg-[#00f0ff]/40';
                                            else if (intensity > 0.2) bgColor = 'bg-[#00f0ff]/20';

                                            return (
                                                <div
                                                    key={rowIndex}
                                                    className={`w-3 h-3 rounded-sm ${bgColor} hover:ring-1 hover:ring-white transition-all cursor-pointer`}
                                                    title={`${Math.floor(intensity * 10)} contributions`}
                                                ></div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-400">
                            <span>Less</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-sm bg-gray-800/50"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#00f0ff]/20"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#00f0ff]/40"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#00f0ff]/70"></div>
                                <div className="w-3 h-3 rounded-sm bg-[#00f0ff]"></div>
                            </div>
                            <span>More</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
