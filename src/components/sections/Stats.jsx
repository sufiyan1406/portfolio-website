import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, FolderGit2, Star, Coffee } from 'lucide-react';

const stats = [
    {
        icon: <FolderGit2 className="w-8 h-8 text-[#00f0ff]" />,
        value: 12,
        suffix: '+',
        label: 'Projects Built'
    },
    {
        icon: <Code2 className="w-8 h-8 text-[#8a2be2]" />,
        value: 20,
        suffix: '+',
        label: 'Technologies Learned'
    },
    {
        icon: <Star className="w-8 h-8 text-[#00f0ff]" />,
        value: 35,
        suffix: '',
        label: 'Repositories'
    },
    {
        icon: <Coffee className="w-8 h-8 text-[#8a2be2]" />,
        value: 500,
        suffix: '+',
        label: 'Coding Hours'
    }
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold font-display text-white">
            {count}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="py-20 relative bg-gradient-to-b from-[#0a0f1c] to-[#0a0f1c]/80 border-y border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#00f0ff]/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                                {stat.icon}
                            </div>
                            <div className="mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-400 font-medium tracking-wide text-sm uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
