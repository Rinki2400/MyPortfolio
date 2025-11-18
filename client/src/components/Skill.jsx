import React from "react";
import { motion } from "framer-motion";
import "../style/components/Skill.css";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skill = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <FaNodeJs />, name: "NodeJS" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "SQL" },
  ];

  return (
    <motion.div
      className="carousel"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="carousel-track">
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            className="carousel-item"
            key={index}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="skill-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {skill.icon}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 + 0.1 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skill;
