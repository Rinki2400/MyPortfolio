import React from "react";
import "../style/components/Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* HELLO LINE */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Hello<span className="dot">.</span>
        </motion.h3>
        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          I'm <span className="name">Rinki Sharma</span>
        </motion.h1>

        {/* ROLE WITH TYPING ANIMATION */}
        <motion.h2
          className="role"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Developer",
              "Web Developer",
              "ReactJS Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </motion.h2>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.a
            href="#projects"
            className="btn primary"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Got a project?
          </motion.a>

          <motion.a
            href="#"
            className="btn primary"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            My resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="circle-bg"></div>

        <motion.img
          src="/profile.png"
          alt="profile"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
