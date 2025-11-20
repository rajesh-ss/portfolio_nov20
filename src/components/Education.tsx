"use client";
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './Education.module.css';

const education = [
    {
        degree: "MCA",
        institution: "Christ (Deemed to be university)",
        period: "08/2021 - 05/2023",
        location: "Bengaluru, India"
    },
    {
        degree: "Bsc (CME)",
        institution: "Christ (Deemed to be university)",
        period: "06/2017 - 06/2020",
        location: "Bengaluru, India"
    }
];

export default function Education() {
    return (
        <section id="education" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Education
                </motion.h2>

                <div className={styles.grid}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconBox}>
                                <FaGraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <p className={styles.institution}>{edu.institution}</p>
                                <div className={styles.meta}>
                                    <p>{edu.period}</p>
                                    <p>{edu.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
