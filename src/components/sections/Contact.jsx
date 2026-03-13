import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Replace "YOUR_FORMSPREE_ENDPOINT" with your actual Formspree endpoint
            // Example: https://formspree.io/f/xabcdefg
            const response = await fetch("https://formspree.io/f/xaqpjjby", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Failed to send message. Please set up your Formspree endpoint.");
            }
        } catch (error) {
            alert("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactCards = [
        {
            icon: <Mail className="w-6 h-6 text-[#00f0ff]" />,
            title: "Email",
            value: "sufiyanshaikh1406@gmail.com",
            link: "mailto:sufiyanshaikh1406@gmail.com"
        },
        {
            icon: <MapPin className="w-6 h-6 text-[#8a2be2]" />,
            title: "Location",
            value: "Dohad, Gujarat, India",
            link: null
        },
        {
            icon: <Linkedin className="w-6 h-6 text-[#00f0ff]" />,
            title: "LinkedIn",
            value: "linkedin.com/in/sufiyan-shaikh-59670334b",
            link: "https://www.linkedin.com/in/sufiyan-shaikh-59670334b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEtNi1YoQRVev%2F9j5c8zv9w%3D%3D"
        },
        {
            icon: <Github className="w-6 h-6 text-[#8a2be2]" />,
            title: "GitHub",
            value: "github.com/sufiyan1406",
            link: "https://github.com/sufiyan1406"
        }
    ];

    return (
        <section id="contact" className="py-24 relative bg-[#0a0f1c]/80">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8a2be2]/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Get In</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        Currently looking for new opportunities and open to collaborating on interesting software engineering and AI projects.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {contactCards.map((card, index) => (
                            <div key={index} className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-6 group hover:border-[#00f0ff]/30 transition-all duration-300">
                                <div className="w-14 h-14 rounded-xl bg-[#0a0f1c] flex items-center justify-center border border-white/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
                                    {card.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-400 mb-1">{card.title}</h4>
                                    {card.link ? (
                                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#00f0ff] font-medium transition-colors">
                                            {card.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">{card.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Resume Call to action */}
                        <div className="glass-card p-8 rounded-2xl border border-[#8a2be2]/30 bg-gradient-to-br from-[#111827] to-[#8a2be2]/10 mt-8 text-center">
                            <h3 className="text-xl font-bold text-white mb-2">My Resume</h3>
                            <p className="text-gray-400 text-sm mb-6">Review my full academic and professional background.</p>
                            <div className="flex gap-4 justify-center">
                                <a href="/resume.pdf" target="_blank" className="btn-primary py-2 px-4 text-sm w-full">View</a>
                                <a href="/resume.pdf" download className="btn-outline py-2 px-4 text-sm w-full">Download</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
                    >
                        {/* Form glow decoration */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00f0ff]/20 rounded-full blur-[60px]"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send me a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0a0f1c]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all resize-none custom-scrollbar"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </span>
                                ) : submitted ? (
                                    <span className="text-white">Message Sent Successfully!</span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
