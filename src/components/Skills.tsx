"use client";
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = {
    "Frontend": ["React", "NextJS", "Angular", "TailwindCSS", "HTML/CSS", "Redux", "JavaScript", "TypeScript"],
    "Backend": ["NodeJS", "Python", "Flask", "ExpressJS", "FastAPI", "RESTAPI"],
    "Databases": ["MongoDB", "PostgreSQL", "MYSQL", "GRAPHQL"],
    "Tools & Others": ["GIT", "Docker", "Nginx", "AWS", "Pandas", "Keras", "Tensorflow", "Grafana", "Scikit-learn"]
};

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>

                <div className={styles.grid}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <h3 className={styles.categoryTitle}>{category}</h3>
                            <div className={styles.skillList}>
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className={styles.skillTag}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
