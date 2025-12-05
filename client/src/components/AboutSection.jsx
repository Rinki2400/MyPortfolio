import React from "react";
import { motion } from "framer-motion";
import "../style/components/AboutSection.css";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

const AboutSection = () => {

  // Parent stagger animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, when: "beforeChildren" }
    },
  };

  // Service slide-in left
  const leftSlide = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // About content slide-in right
  const rightSlide = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Fade-up smooth
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Stats pop in
  const statPop = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 10 },
    },
  };

  return (
    <section className="about-section">

      {/* LEFT SERVICE CARD BLOCK */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="services"
      >
        <motion.div variants={leftSlide} className="service-item">
          <div className="dot" />
          <FaLaptopCode className="service-icon" />
          <p>Website Development</p>
        </motion.div>

        <motion.div variants={leftSlide} className="service-item">
          <div className="dot" />
          <FaMobileAlt className="service-icon" />
          <p>App Development</p>
        </motion.div>

        <motion.div variants={leftSlide} className="service-item">
          <div className="dot" />
          <FaServer className="service-icon" />
          <p>Website Hosting</p>
        </motion.div>
      </motion.div>

      {/* RIGHT ABOUT CONTENT */}
      <motion.div
        variants={rightSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="about-content"
      >
        {/* 🔥 Heading Reveal Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
          viewport={{ once: true }}
        >
          About me
        </motion.h2>

        <motion.p className="about-text" variants={fadeUp}>
          I am a passionate MERN Stack Developer with experience in building
          dynamic and clean UI-based web applications. I enjoy learning new
          technology and developing real-world projects.
          <br />
          <br />
          I aim to grow as a full-stack developer and contribute my skills to
          build impactful and meaningful digital products.
        </motion.p>

        {/* 🔥 Stats with pop animation */}
        <div className="stats">
          <motion.div className="stat-box" variants={statPop} whileHover={{ scale: 1.09 }}>
            <h3>10+</h3>
            <span>Projects Completed</span>
          </motion.div>

          <motion.div className="stat-box" variants={statPop} whileHover={{ scale: 1.09 }}>
            <h3>90%</h3>
            <span>Learning & Adaptability</span>
          </motion.div>

          <motion.div className="stat-box" variants={statPop} whileHover={{ scale: 1.09 }}>
            <h3>Fresher</h3>
            <span>Ready to Work</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
