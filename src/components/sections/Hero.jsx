import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FileText, Github, FolderOpen, Mail } from 'lucide-react';
import ParticlesBackground from '../ui/ParticlesBackground';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Particles will be handled by a separate component */}
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8a2be2]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Profile Photo Placeholder / Animation */}
                    <div className="mx-auto w-48 h-48 md:w-58 md:h-56 rounded-full border-[3px] border-[#00f0ff] p-1.5 mb-8 animate-float relative group shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
                        <img
                            src="https://image2url.com/r2/default/images/1773374842695-34ec3e1a-7f53-40c2-99b0-45a9c7404124.blob"
                            alt="Mohammadsufiyan Shaikh"
                            className="w-full h-full rounded-full object-cover object-top relative z-10"
                        />
                    </div>

                    <h2 className="text-[#00f0ff] font-medium tracking-widest uppercase text-sm mb-4">
                        Hello World, I am
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold text-white font-display mb-6 tracking-tight">
                        Mohammadsufiyan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Shaikh</span>
                    </h1>

                    <div className="text-xl md:text-3xl text-gray-300 font-light h-[40px] mb-8">
                        <TypeAnimation
                            sequence={[
                                'Computer Science Student',
                                2000,
                                'AI & Automation Enthusiast',
                                2000,
                                'Software Builder',
                                2000,
                                'Problem Solver',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-display font-medium text-[#c0c0c0]"
                        />
                    </div>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                        Passionate about turning ideas into intelligent software and automation systems.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            View Projects
                        </a>

                        <a href="https://github.com/sufiyan1406" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 group border-gray-600 text-gray-300 hover:text-white hover:border-white hover:bg-white/10">
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            GitHub
                        </a>

                        <a href="/resume.pdf" target="_blank" className="btn-outline flex items-center gap-2 group border-[#8a2be2] text-[#8a2be2] hover:bg-[#8a2be2]/10 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] hover:text-white">
                            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Resume
                        </a>

                        <a href="#contact" className="btn-outline flex items-center gap-2 group">
                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#00f0ff] to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
