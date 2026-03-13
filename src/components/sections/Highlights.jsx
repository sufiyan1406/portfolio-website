import { motion } from 'framer-motion';
import { Award, Trophy, Hammer } from 'lucide-react';

const Highlights = () => {
    const certifications = [
        "Introduction to Artificial Intelligence",
        "Python Programming Certification",
        "Web Development Fundamentals",
        "Machine Learning Basics"
    ];

    const achievements = [
        "Solved multiple data structures and algorithms problems",
        "Built several academic and personal software projects",
        "Actively exploring AI and automation technologies",
        "Experience collaborating on software development projects"
    ];

    return (
        <section className="py-24 relative bg-[#0a0f1c]/50 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Currently Building */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 glass-card p-8 rounded-3xl border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00f0ff]/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-gradient-to-br from-[#00f0ff] to-[#0080ff] rounded-xl shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                <Hammer className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-[#00f0ff] font-bold tracking-wider text-sm uppercase">Currently Building</h3>
                                <h4 className="text-2xl font-bold text-white mt-1 group-hover:text-[#00f0ff] transition-colors">Voice2Desktop v2</h4>
                            </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed relative z-10 max-w-4xl">
                            An advanced offline AI assistant for desktop automation using Vosk speech recognition and local language models (GPT4All). Focusing on reducing latency and expanding the actionable command vocabulary without relying on cloud APIs.
                        </p>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#8a2be2]/30 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-[#8a2be2]/20 rounded-xl text-[#8a2be2]">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>

                        <ul className="space-y-4">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300 group">
                                    <div className="w-2 h-2 rounded-full bg-[#8a2be2] group-hover:scale-150 transition-transform"></div>
                                    <span className="group-hover:text-white transition-colors">{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#00f0ff]/30 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-[#00f0ff]/20 rounded-xl text-[#00f0ff]">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Achievements</h3>
                        </div>

                        <ul className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-300 group">
                                    <div className="w-2 h-2 rounded-full bg-[#00f0ff] mt-2 group-hover:scale-150 transition-transform flex-shrink-0"></div>
                                    <span className="group-hover:text-white transition-colors leading-relaxed">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Highlights;
