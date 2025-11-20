"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './Navbar.module.css';

const ResumeModal = dynamic(() => import('./ResumeModal'), { ssr: false });

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
            >
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        Rajesh.dev
                    </Link>

                    <div className={styles.links}>
                        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={styles.link}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={styles.resumeBtn}
                    >
                        Resume
                    </button>
                </div>
            </motion.nav>
            <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
