"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CinematicBackground from './CinematicBackground';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <CinematicBackground />
            {/* Background Elements - Kept for fallback or additional layering if needed, but CinematicBackground takes precedence */}
            <div className={styles.bgContainer}>
                {/* <div className={`${styles.blob} ${styles.blob1}`} />
                <div className={`${styles.blob} ${styles.blob2}`} /> */}
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.greeting}>
                        <TypewriterText text="Hello, I'm" delay={0.5} />
                    </h2>
                    <h1 className={styles.name}>
                        <span className={styles.gradientText}>
                            <TypewriterText text="Rajesh Seethapathy" delay={1.5} />
                        </span>
                    </h1>
                    <h3 className={styles.role}>
                        <TypewriterText text="Full Stack Engineer" delay={3.0} />
                    </h3>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5, duration: 1 }}
                    >
                        Crafting high-performance web applications with the MERN Stack and Blockchain technology.
                        I transform complex problems into elegant, scalable solutions.
                    </motion.p>

                    <motion.div
                        className={styles.socials}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.0, duration: 1 }}
                    >
                        <SocialLink href="https://github.com/rajesh-ss" icon={<FaGithub />} label="Github" />
                        <SocialLink href="https://www.linkedin.com/in/rajesh-s-539876155/" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="mailto:s.rajeshraj@outlook.com" icon={<FaEnvelope />} label="Email" />
                    </motion.div>

                    <motion.div
                        className={styles.ctaContainer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5.5, duration: 0.8 }}
                    >
                        <a href="#contact" className={styles.ctaBtn}>
                            Get in Touch
                        </a>
                        <a href="/resume.pdf" download className={styles.secondaryBtn}>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function TypewriterText({ text, delay }: { text: string; delay: number }) {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            style={{ display: "inline-block", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={label}
        >
            {icon}
        </a>
    );
}
