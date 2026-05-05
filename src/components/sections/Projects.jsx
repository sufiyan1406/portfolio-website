import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'To-Do List App',
        shortDesc: 'A clean and intuitive task management application.',
        description: 'A clean and intuitive task management application with local storage, drag-and-drop functionality, and category organization. Built with vanilla JavaScript and modern CSS.',
        technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
        github: 'https://github.com/mohammadsufiyan/todo-app',
        demo: 'https://mohammadsufiyan-todo.netlify.app',
        image: 'https://via.placeholder.com/600x400/0f172a/00f0ff?text=To-Do+App',
        problem: 'Needed a simple, fast, and reliable way to track daily tasks without relying on cloud synchronization.',
        solution: 'Developed a local-first task manager with intuitive drag-and-drop mechanics and categorical organization.',
        architecture: 'Vanilla JavaScript utilizing Web Storage API for data persistence, paired with custom CSS for responsive design.',
        challenges: 'Implementing smooth drag-and-drop interactions across different browsers and maintaining state accurately.',
        future: 'Adding data export/import functionality and a built-in Pomodoro timer for focus sessions.'
    },
    {
        id: 2,
        title: 'Portfolio Website',
        shortDesc: 'Modern, responsive personal portfolio website.',
        description: 'Modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, dark mode support, and optimized performance.',
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: 'https://github.com/sufiyan1406/sufiyanportfolio/tree/main',
        demo: 'https://warm-manatee-b54453.netlify.app/',
        image: 'https://image2url.com/r2/default/images/1773375425872-b81fea95-3eff-42c2-b9db-76aa5c1fa5f3.png',
        problem: 'Needed a professional online presence to showcase skills, projects, and achievements to potential employers.',
        solution: 'Built a dynamic, highly interactive personal portfolio utilizing modern web technologies with an emphasis on performance and accessibility.',
        architecture: 'Frontend built with React and Tailwind CSS, utilizing Framer Motion for sophisticated animations and interaction design.',
        challenges: 'Ensuring 60fps animations across all devices while maintaining high Lighthouse scores for SEO and performance.',
        future: 'Integrating a headless CMS for easier content management and adding a dedicated blog section.'
    },
    {
        id: 3,
        title: 'Weather Web App',
        shortDesc: 'Real-time weather data visualization application.',
        description: 'A responsive weather web app that fetches real-time weather data using WeatherAPI and displays temperature, conditions, and air quality with dynamic UI.',
        technologies: ["HTML", "CSS", "JavaScript"],
        github: 'https://github.com/sufiyan1406/sufiyanportfolio/tree/main',
        demo: 'https://dreamy-pegasus-74a774.netlify.app/',
        image: 'https://image2url.com/r2/default/images/1773375578547-ed9f3d3e-d664-46af-b661-883ee46ef69b.png',
        problem: 'Accessing accurate, location-based weather data and air quality indices in a single, easy-to-read dashboard.',
        solution: 'Created an intuitive dashboard that seamlessly integrates multiple weather data points using reliable external APIs.',
        architecture: 'Vanilla JS frontend communicating with WeatherAPI via asynchronous REST fetches, styled with modern CSS.',
        challenges: 'Handling API rate limits gracefully and parsing complex environmental data into a user-friendly format.',
        future: 'Adding 7-day extended forecasts and interactive radar maps.'
    },
    {
        id: 4,
        title: 'InTack: Smart Attendance',
        shortDesc: 'Automated attendance tracking system using QR codes.',
        description: 'Collaborative project for industry interns featuring automated attendance tracking using QR codes, real-time dashboard, and comprehensive reporting system.',
        technologies: ["Java", "MySQL", "Android", "QR Code API"],
        github: 'https://github.com/mohammadsufiyan/intack-attendance',
        demo: 'https://intern-scan-track.lovable.app/',
        image: 'https://image2url.com/r2/default/images/1773375803747-047e3b1b-2eda-463b-8b80-e29a0c925336.png',
        problem: 'Manual attendance tracking for large groups of interns is time-consuming and prone to human error.',
        solution: 'Implemented a secure, QR-based scanning system that instantly records attendance and updates an admin dashboard.',
        architecture: 'Android client built with Java interfacing with a MySQL database via RESTful web services, utilizing third-party QR API.',
        challenges: 'Ensuring offline capability with synchronization when network connectivity is restored, and preventing QR code sharing.',
        future: 'Integrating facial recognition for secondary verification and automated warning emails for low attendance.'
    },
    {
        id: 5,
        title: 'IEMS',
        shortDesc: 'Integrated Education Management System with AI analytics.',
        description: 'An AI-enhanced digital platform designed to centralize and automate the academic, administrative, and communication workflows of educational institutions. Features AI-based student risk analysis, automated timetables, and unified dashboard.',
        technologies: ["Java", "Python", "MySQL", "PostgreSQL", "REST API"],
        github: 'https://github.com/sufiyan1406/iems',
        demo: 'https://iems-livid.vercel.app/dashboard',
        image: 'https://image2url.com/r2/default/images/1773381773119-a7c001e0-27f2-4e3f-876f-f5650d2039a0.png',
        problem: 'Traditional education management systems rely on manual tracking and delayed reports, lacking proactive identifying of at-risk students.',
        solution: 'Designed a unified ecosystem with real-time dashboards and AI-driven analytics that detect academic decline patterns early.',
        architecture: 'Java & Python backend services handling REST APIs, connected to MySQL/PostgreSQL databases, and a modern web dashboard frontend.',
        challenges: 'Integrating disparate institutional workflows (fees, attendance, timetables) into a centralized, scalable architecture with intelligent pattern detection.',
        future: 'Adding parent portal mobile applications and expanding AI models for personalized learning recommendations.'
    },
    {
        id: 6,
        title: 'AI Life Admin Assistant (ALIA)',
        shortDesc: 'AI-powered life management system that converts unstructured inputs into actionable tasks.',
        description: 'A smart personal productivity system that automatically extracts tasks from unstructured data such as images, PDFs, audio, and text. It transforms scattered information into structured tasks with priorities and deadlines, reducing manual effort and improving task management efficiency.',
        technologies: ["Next.js", "FastAPI", "Supabase", "Python", "Tailwind CSS", "OpenAI/Whisper/OCR"],
        github: 'https://github.com/sufiyan1406/ALIA---Ai-Life-Admin-Assistant/blob/main/README.md',
        demo: 'https://your-demo-link.com',
        image: 'https://cdn.corenexis.com/files/c/8627665720.png',
        problem: 'People receive important information across multiple formats (notes, screenshots, voice messages, PDFs) but fail to convert them into actionable tasks, leading to missed deadlines and poor organization.',
        solution: 'Built an AI-driven pipeline that automatically processes different input types, extracts relevant task information, and stores it in a structured task management system with prioritization and deadlines.',
        architecture: 'Next.js frontend with Neo-Brutalist UI, FastAPI backend handling task APIs and AI processing pipeline, Supabase for authentication and database with RLS, and integrated OCR + speech-to-text + LLM-based extraction system.',
        challenges: 'Handling multiple input formats reliably, ensuring accurate AI extraction into structured JSON, maintaining secure user-specific data flow, and integrating real-time frontend updates with backend processing.',
        future: 'Adding automation features like smart reminders, proactive task suggestions, cross-device sync, and advanced AI planning capabilities for full life management assistance.'
        }

];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock body scroll when modal is open
    if (typeof window !== 'undefined') {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Featured</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#00f0ff]/50 transition-all duration-300 flex flex-col h-full"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-[#0a0f1c]/40 group-hover:bg-transparent transition-all z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.shortDesc}</p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-400">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center text-sm font-medium text-[#8a2be2] group-hover:text-[#00f0ff] transition-colors mt-auto">
                                    View Details
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-[#0a0f1c]/90 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] rounded-2xl z-10 custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-[#00f0ff]/20 text-gray-300 hover:text-white rounded-full transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-6 sm:p-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="text-sm px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover rounded-xl border border-white/10"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center gap-4">
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                        <div className="flex gap-4 mt-4">
                                            {selectedProject.github && (
                                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 flex items-center justify-center gap-2">
                                                    <Github className="w-5 h-5" /> Code
                                                </a>
                                            )}
                                            {selectedProject.demo && (
                                                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 flex items-center justify-center gap-2">
                                                    <ExternalLink className="w-5 h-5" /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 bg-[#0a0f1c]/50 p-6 sm:p-8 rounded-xl border border-white/5">
                                    <div>
                                        <h4 className="text-[#00f0ff] font-bold text-xl mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span> Problem
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed pl-4 border-l border-white/10">{selectedProject.problem}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[#8a2be2] font-bold text-xl mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#8a2be2]"></span> Solution
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed pl-4 border-l border-white/10">{selectedProject.solution}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-white"></span> Architecture
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed pl-4 border-l border-white/10">{selectedProject.architecture}</p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-rose-400 font-bold text-lg mb-2">Challenges</h4>
                                            <p className="text-gray-400 leading-relaxed">{selectedProject.challenges}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-emerald-400 font-bold text-lg mb-2">Future Improvements</h4>
                                            <p className="text-gray-400 leading-relaxed">{selectedProject.future}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
