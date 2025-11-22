"use client";
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.card}
                >
                    <p className={styles.text}>
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className={styles.contactList}>
                        <ContactItem icon={<FaEnvelope />} text="s.rajeshraj@outlook.com" href="mailto:s.rajeshraj@outlook.com" />
                        <ContactItem icon={<FaPhone />} text="8870078094" href="tel:8870078094" />
                        <ContactItem icon={<FaMapMarkerAlt />} text="Bengaluru" />
                    </div>

                    <div className={styles.socials}>
                        <SocialLink href="https://github.com/rajesh-ss" icon={<FaGithub />} />
                        <SocialLink href="https://www.linkedin.com/in/rajesh-s-539876155/" icon={<FaLinkedin />} />
                    </div>
                </motion.div>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Rajesh Seethapathy. Built with Next.js & CSS Modules.</p>
                </footer>
            </div>
        </section>
    );
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
    const content = (
        <div className={styles.contactItem}>
            <span className={styles.icon}>{icon}</span>
            <span>{text}</span>
        </div>
    );

    return href ? <a href={href}>{content}</a> : content;
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
        >
            {icon}
        </a>
    );
}
