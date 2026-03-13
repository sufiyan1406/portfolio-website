import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#0a0f1c] border-t border-[#00f0ff]/20 pt-16 pb-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo / Name */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Mohammadsufiyan <span className="text-[#00f0ff]">Shaikh</span>
                        </h3>
                        <p className="text-gray-400 max-w-md">
                            Passionate about turning ideas into intelligent software and automation systems.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/sufiyan1406"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#00f0ff] hover:-translate-y-1 transition-all"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sufiyan-shaikh-59670334b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#00f0ff] hover:-translate-y-1 transition-all"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:sufiyanshaikh1406@gmail.com"
                            className="text-gray-400 hover:text-[#00f0ff] hover:-translate-y-1 transition-all"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Mohammadsufiyan Shaikh. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00f0ff] transition-colors group"
                    >
                        Back to Top
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
