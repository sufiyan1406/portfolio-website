import { motion } from 'framer-motion';
import { Bot, Zap, Code2, Database } from 'lucide-react';

const About = () => {
    const interests = [
        {
            icon: <Bot className="w-6 h-6 text-[#00f0ff]" />,
            title: "AI Systems",
            desc: "Exploring and integrating intelligent models."
        },
        {
            icon: <Zap className="w-6 h-6 text-[#8a2be2]" />,
            title: "Automation Tools",
            desc: "Building scripts and apps to streamline workflows."
        },
        {
            icon: <Code2 className="w-6 h-6 text-[#00f0ff]" />,
            title: "Software Engineering",
            desc: "Creating robust and scalable applications."
        },
        {
            icon: <Database className="w-6 h-6 text-[#8a2be2]" />,
            title: "Local LLMs",
            desc: "Implementing privacy-focused language models locally."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#0a0f1c]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">About</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Future-Focused Developer
                        </h3>
                        <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                            <p>
                                I am a dedicated Computer Science student deeply focused on exploring the boundaries of artificial intelligence, automation tools, and practical software engineering.
                            </p>
                            <p>
                                My passion lies in taking complex theoretical concepts and turning them into tangible, user-centric software solutions through hands-on experimentation and rigorous project development.
                            </p>
                            <p>
                                Whether it's building offline speech recognition systems or dynamic web applications, I strive to write code that not only solves problems but does so efficiently and elegantly.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <div className="glass-card p-4 rounded-xl border border-[#00f0ff]/20">
                                <h4 className="text-[#00f0ff] font-bold text-xl mb-1">3+</h4>
                                <p className="text-sm text-gray-400">Major Projects</p>
                            </div>
                            <div className="glass-card p-4 rounded-xl border border-[#8a2be2]/20">
                                <h4 className="text-[#8a2be2] font-bold text-xl mb-1">100+</h4>
                                <p className="text-sm text-gray-400">Hours Coding</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interest Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 rounded-2xl group border border-white/5 hover:border-[#00f0ff]/30 transition-all duration-300"
                            >
                                <div className="bg-[#0a0f1c] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
