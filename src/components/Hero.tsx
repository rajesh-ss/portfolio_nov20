"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.bgContainer}>
                <div className={`${styles.blob} ${styles.blob1}`} />
                <div className={`${styles.blob} ${styles.blob2}`} />
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.greeting}>
                        Hello, I'm
                    </h2>
                    <h1 className={styles.name}>
                        <span className={styles.gradientText}>
                            Rajesh Seethapathy
                        </span>
                    </h1>
                    <h3 className={styles.role}>
                        Full Stack Engineer
                    </h3>

                    <p className={styles.description}>
                        Building scalable web applications with the MERN Stack and Blockchain technology.
                        Passionate about creating seamless user experiences and robust backend systems.
                    </p>

                    <div className={styles.socials}>
                        <SocialLink href="https://github.com" icon={<FaGithub />} label="Github" />
                        <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="mailto:s.rajeshraj@outlook.com" icon={<FaEnvelope />} label="Email" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <a href="#contact" className={styles.ctaBtn}>
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
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
