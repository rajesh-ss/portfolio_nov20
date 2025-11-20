"use client";
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
    {
        title: "Innovation Engineer",
        company: "SimplyFI Softech India Pvt. Ltd.",
        period: "04/2023 - Present",
        location: "Bengaluru, India",
        description: [
            "Developed a blockchain-based gold traceability system for Auro Provenance using React, Node.js, and MongoDB, achieving 99% transparency across the supply chain.",
            "Built a secure certificate storage application on the blockchain for a government project, leveraging Python, Node.js, and smart contract integration to ensure data integrity and tamper-proof verification."
        ]
    },
    {
        title: "Innovation Trainee",
        company: "SimplyFI Softech India Pvt. Ltd.",
        period: "01/2023 - 04/2023",
        location: "Bengaluru, India",
        description: [
            "Built a supply chain finance application for ATON, a leading FinTech company, streamlining financial operations and reducing manual processing time by 40%.",
            "Delivered 2 client projects in FinTech and Supply Chain domains using React, Python, and REST APIs, maintaining a 100% on-time delivery rate."
        ]
    },
    {
        title: "Programmer Trainee",
        company: "Cognizant",
        period: "08/2020 - 06/2021",
        location: "Chennai, India",
        description: [
            "Maintained and enhanced legacy codebases built with React and Bootstrap in the banking domain, improving stability and scalability through refactoring and bug fixes.",
            "Boosted application performance by 25% through targeted code optimizations and adoption of modern frontend best practices."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Professional Experience
                </motion.h2>

                <div className={styles.list}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={styles.card}
                        >
                            <div className={styles.dot} />

                            <div className={styles.header}>
                                <div>
                                    <h3 className={styles.title}>{exp.title}</h3>
                                    <p className={styles.company}>{exp.company}</p>
                                </div>
                                <div className={styles.meta}>
                                    <span>{exp.period}</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <ul className={styles.description}>
                                {exp.description.map((item, i) => (
                                    <li key={i} className={styles.descItem}>
                                        <span className={styles.bullet} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
