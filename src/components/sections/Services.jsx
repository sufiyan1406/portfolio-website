import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Database, Globe, Zap } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-8 h-8 text-white" />,
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern technologies like React, Node.js, and databases. From concept to deployment, I handle both frontend and backend development.",
        features: ["Responsive Web Apps", "API Development", "Database Design", "Performance Optimization"],
        inDevelopment: false
    },
    {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: "Cybersecurity Solutions",
        description: "Security-focused development and vulnerability assessment. Currently expanding my expertise in web security, secure coding practices, and penetration testing.",
        features: ["Secure Code Review", "Vulnerability Assessment", "Security Auditing", "Best Practices Implementation"],
        inDevelopment: true
    },
    {
        icon: <Smartphone className="w-8 h-8 text-white" />,
        title: "Mobile-First Design",
        description: "Creating responsive, mobile-optimized applications that provide excellent user experience across all devices and screen sizes.",
        features: ["Responsive Design", "Cross-Platform Compatibility", "Touch-Friendly UI", "Performance Focused"],
        inDevelopment: false
    },
    {
        icon: <Database className="w-8 h-8 text-white" />,
        title: "Database Solutions",
        description: "Efficient database design and optimization for web applications. Experience with SQL databases and understanding of data modeling principles.",
        features: ["Database Design", "Query Optimization", "Data Modeling", "Performance Tuning"],
        inDevelopment: false
    },
    {
        icon: <Globe className="w-8 h-8 text-white" />,
        title: "Web Technologies",
        description: "Modern web development using the latest frameworks and tools. Focus on creating fast, scalable, and maintainable web applications.",
        features: ["React Development", "Modern JavaScript", "CSS Frameworks", "Version Control"],
        inDevelopment: false
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Problem Solving",
        description: "Analytical approach to complex problems with creative solutions. Experience gained through hackathons and collaborative projects.",
        features: ["Algorithm Design", "Code Optimization", "Debugging", "System Architecture"],
        inDevelopment: false
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-[#0a0f1c]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services &</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
                        Current capabilities and growing expertise as I develop my skills in software development and cybersecurity
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#00f0ff]/30 transition-all duration-300 relative group overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#8a2be2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex flex-col items-center text-center relative z-10 flex-grow">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors flex items-center justify-center gap-2">
                                    {service.title}
                                    {service.inDevelopment && (
                                        <span className="text-[10px] uppercase font-bold px-2 py-1 rounded-full bg-[#8a2be2]/20 text-[#8a2be2] border border-[#8a2be2]/30">
                                            Developing
                                        </span>
                                    )}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {service.description}
                                </p>

                                <div className="w-full text-left mt-auto">
                                    <h4 className="font-medium mb-3 text-sm text-[#00f0ff]">Key Areas</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#8a2be2] mr-3"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
