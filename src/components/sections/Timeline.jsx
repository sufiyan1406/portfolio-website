import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, Award } from 'lucide-react';

const timelineEvents = [
    {
        year: '2024',
        title: 'Started B.Tech Computer Science',
        institution: 'The Maharaja Sayajirao University of Baroda',
        description: 'Began formal education in computer science, focusing on programming fundamentals and algorithmic thinking.',
        icon: <GraduationCap className="w-5 h-5 text-white" />,
        color: 'from-blue-500 to-[#00f0ff]'
    },
    {
        year: '2025',
        title: 'Began building AI tools',
        institution: 'Independent Projects',
        description: 'Started exploring automation tools and practical AI applications through hands-on project development.',
        icon: <Code className="w-5 h-5 text-white" />,
        color: 'from-[#00f0ff] to-purple-500'
    },
    {
        year: '2025',
        title: 'Developed Voice2Desktop',
        institution: 'Personal Project',
        description: 'Built an offline AI assistant using Vosk and GPT4All for desktop automation without internet dependency.',
        icon: <Rocket className="w-5 h-5 text-white" />,
        color: 'from-purple-500 to-[#8a2be2]'
    },
    {
        year: '2028',
        title: 'Expected Graduation',
        institution: 'The Maharaja Sayajirao University of Baroda',
        description: 'Anticipated completion of B.Tech degree, ready to contribute to the software engineering industry.',
        icon: <Award className="w-5 h-5 text-white" />,
        color: 'from-[#8a2be2] to-pink-500'
    }
];

const Timeline = () => {
    return (
        <section id="timeline" className="py-24 relative bg-[#0a0f1c]/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Education</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Timeline</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                    {/* Main vertical line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#8a2be2] to-transparent opacity-30"></div>

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}
                                >

                                    {/* Timeline Node Content Side */}
                                    <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'} w-full pl-12 md:pl-0 relative z-10`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 transition-all shadow-lg"
                                        >
                                            <span className="inline-block py-1 px-3 rounded-full bg-[#0a0f1c] text-[#00f0ff] text-sm font-bold border border-[#00f0ff]/20 mb-3">
                                                {event.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-[#8a2be2] text-sm font-medium mb-3">{event.institution}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Icon Node */}
                                    <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 mt-6 md:mt-0 w-[10px] h-[10px] z-20 flex justify-center items-center">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)] border-4 border-[#0a0f1c]`}>
                                            {event.icon}
                                        </div>
                                    </div>

                                    {/* Empty Side for layout */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
