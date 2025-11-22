"use client";
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiJavascript, SiTypescript, SiFlask, SiExpress, SiFastapi, SiMongodb, SiPostgresql, SiMysql, SiGraphql, SiNginx, SiPandas, SiKeras, SiTensorflow, SiGrafana, SiScikitlearn } from 'react-icons/si';

const skills = {
    "Frontend": [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "NextJS", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }
    ],
    "Backend": [
        { name: "NodeJS", icon: <FaNodeJs />, color: "#339933" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
        { name: "ExpressJS", icon: <SiExpress />, color: "#ffffff" },
        { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
        { name: "REST API", icon: <FaDatabase />, color: "#00C4CC" }
    ],
    "Databases": [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" }
    ],
    "Tools & Others": [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Nginx", icon: <SiNginx />, color: "#009639" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Pandas", icon: <SiPandas />, color: "#150458" },
        { name: "Keras", icon: <SiKeras />, color: "#D00000" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
        { name: "Grafana", icon: <SiGrafana />, color: "#F46800" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" }
    ]
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
                                    <motion.div
                                        key={skill.name}
                                        className={styles.skillItem}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className={styles.skillIcon} style={{ color: skill.color }}>
                                            {skill.icon}
                                        </span>
                                        <span className={styles.skillName}>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
