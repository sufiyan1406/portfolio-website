import { motion } from 'framer-motion';
import { GitCommit, Github, BookOpen } from 'lucide-react';
import * as GitHubCalendarModule from 'react-github-calendar';
const GitHubCalendar = GitHubCalendarModule.default || GitHubCalendarModule;

const GithubActivity = () => {
    // Custom neon theme for the calendar
    const explicitTheme = {
        light: ['#0a0f1c', '#00f0ff33', '#00f0ff66', '#00f0ff99', '#00f0ff'],
        dark: ['#1f2937', '#00f0ff33', '#00f0ff66', '#00f0ff99', '#00f0ff']
    };

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
                        <div className="glass-card p-6 rounded-2xl border border-white/5 h-full flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">@sufiyan1406</h3>
                                    <p className="text-gray-400 text-sm">Active Developer</p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm my-4 leading-relaxed">
                                I consistently contribute to open source and personal projects. My GitHub timeline is a reflection of my continuous learning and passion for building software.
                            </p>

                            <div className="pt-4 border-t border-white/5 mt-auto">
                                <a href="https://github.com/sufiyan1406" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#8a2be2] transition-colors text-sm font-medium group bg-[#0a0f1c] px-4 py-2 rounded-full border border-white/10 hover:border-[#8a2be2]/50">
                                    <Github className="w-4 h-4" />
                                    View GitHub Profile <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Live Graph from react-github-calendar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass-card p-6 md:p-8 rounded-2xl border border-white/5 overflow-hidden flex flex-col items-center justify-center relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#8a2be2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <h3 className="text-lg font-bold text-white mb-6 w-full text-left">Real-Time Contribution Graph</h3>

                        <div className="w-full overflow-x-auto custom-scrollbar pb-4 flex justify-center items-center">
                            <div className="min-w-fit pointer-events-auto">
                                <GitHubCalendar
                                    username="sufiyan1406"
                                    colorScheme="dark"
                                    theme={explicitTheme}
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={4}
                                    hideColorLegend={false}
                                    hideTotalCount={false}
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
