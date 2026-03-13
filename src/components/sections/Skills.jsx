import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "C", level: 85 },
            { name: "C++", level: 80 },
            { name: "Java", level: 70 },
            { name: "JavaScript", level: 75 }
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML/CSS", level: 90 },
            { name: "React.js", level: 65 },
            { name: "Node.js", level: 60 }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "Git/GitHub", level: 80 },
            { name: "VS Code", level: 90 },
            { name: "MySQL", level: 70 }
        ]
    },
    {
        title: "Core Competencies",
        skills: [
            { name: "Problem Solving", level: 90 },
            { name: "Teamwork", level: 95 },
            { name: "Adaptability", level: 85 },
            { name: "Communication", level: 90 }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-[#0a0f1c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Technical</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#8a2be2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-[#00f0ff] to-transparent mr-3"></span>
                                {category.title}
                            </h3>

                            <div className="space-y-6 relative z-10">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2 text-sm font-medium">
                                            <span className="text-gray-300 group-hover:text-[#00f0ff] transition-colors">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden border border-white/5">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (i * 0.1) }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
