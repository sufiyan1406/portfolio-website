import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, Target, Calendar, Award } from 'lucide-react';

const achievements = [
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: "Hack-a-Throne Participation",
        organization: "National Level Hackathon",
        period: "2025",
        type: "Hackathon",
        description: "Participated in this prestigious hackathon where I collaborated with a team to develop innovative solutions under time constraints. Gained valuable experience in rapid prototyping and agile development.",
        skills: ["Team Collaboration", "Rapid Prototyping", "Problem Solving", "Presentation Skills"],
        keyOutcomes: [
            "Successfully built and presented a working prototype",
            "Collaborated effectively in a high-pressure environment",
            "Learned new technologies on the fly",
            "Networked with industry professionals"
        ],
        glowColor: "from-[#00f0ff] to-[#0080ff]"
    },
    {
        icon: <Award className="w-8 h-8 text-white" />,
        title: "Smart India Hackathon Selection",
        organization: "Government of India Initiative",
        period: "2025",
        type: "National Competition",
        description: "Selected for participation in Smart India Hackathon, one of India's biggest hackathon initiatives. This selection represents recognition of our team's potential and innovative thinking.",
        skills: ["Innovation", "Technical Excellence", "Project Planning", "Research"],
        keyOutcomes: [
            "Selected from thousands of participants nationwide",
            "Demonstrated strong problem-solving abilities",
            "Showcased technical competency",
            "Prepared comprehensive project proposals"
        ],
        glowColor: "from-[#8a2be2] to-[#c71585]"
    }
];

const learningHighlights = [
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Teamwork Excellence",
        description: "Learned to collaborate effectively in diverse teams, managing different perspectives and skill sets to achieve common goals.",
        color: "from-[#00f0ff] to-blue-500"
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-white" />,
        title: "Innovation Mindset",
        description: "Developed creative problem-solving approaches and learned to think outside the box when facing technical challenges.",
        color: "from-purple-500 to-[#8a2be2]"
    },
    {
        icon: <Target className="w-6 h-6 text-white" />,
        title: "Goal-Oriented",
        description: "Gained experience in working under tight deadlines while maintaining code quality and achieving project objectives.",
        color: "from-[#8a2be2] to-pink-500"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-[#0a0f1c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Experience &</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                        Building expertise through hands-on experience in competitive programming environments and collaborative projects
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Achievements */}
                <div className="space-y-8 mb-16">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${achievement.glowColor} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity`}></div>

                            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                {/* Icon & Header Info */}
                                <div className="flex-shrink-0 flex items-start gap-4">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.glowColor} shadow-lg`}>
                                        {achievement.icon}
                                    </div>
                                    <div className="md:hidden">
                                        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">
                                            {achievement.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="hidden md:flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {achievement.title}
                                        </h3>
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/10">
                                            {achievement.type}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <Calendar className="w-4 h-4 text-[#00f0ff]" />
                                        <span>{achievement.period} • {achievement.organization}</span>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {achievement.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Skills Developed */}
                                        <div>
                                            <h4 className="text-sm font-bold text-[#00f0ff] uppercase tracking-wider mb-3">Skills Developed</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {achievement.skills.map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 text-xs rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Key Outcomes */}
                                        <div>
                                            <h4 className="text-sm font-bold text-[#8a2be2] uppercase tracking-wider mb-3">Key Outcomes</h4>
                                            <ul className="space-y-2">
                                                {achievement.keyOutcomes.map((outcome, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8a2be2] mt-1.5 flex-shrink-0"></div>
                                                        <span>{outcome}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Highlights */}
                <div>
                    <h3 className="text-2xl font-bold text-center text-white mb-8">Core Learning Outcomes</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {learningHighlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                className="glass-card p-6 rounded-2xl border border-white/5 text-center group hover:border-white/20 transition-all"
                            >
                                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {highlight.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                                <p className="text-sm text-gray-400">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
