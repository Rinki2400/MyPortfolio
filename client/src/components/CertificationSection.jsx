import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/components/CertificationSection.css";

const certifications = [
  {
    id: "01",
    title: "Full Stack Web Development Program",
    desc: "Successfully completed the Full Stack Web Development Program from Intellipaat...",
    image: "/fullstack.png",
    footer: "Full Stack Web Development",
  },
  {
    id: "02",
    title: "Full Stack Web Development – Intellipaat",
    desc: "This Certificate is presented to Rinki Sharma...",
    image: "/WebDevelopment.png",
    footer: "Full Stack Web Development ",
  },
  {
    id: "03",
    title: "Master AI for Web App Development",
    desc: "This Certificate is presented to Rinki Sharma...",
    image: "/MasterAi.png",
    footer: "Master AI for Web App Development",
  },
  {
    id: "04",
    title: "MS SQL Server Course – Intellipaat",
    desc: "Successfully completed the MS SQL Server Course...",
    image: "/Ms_Sql.png",
    footer: "MS SQL Server ",
  },
  {
    id: "05",
    title: "SQL Course – Intellipaat",
    desc: "Successfully completed the SQL Course...",
    image: "/Sql.png",
    footer: "SQL Course ",
  },
];

const CertificationSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % certifications.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const cert = certifications[index];

  // Animation Variants
  const imageVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="cert-section">
        <motion.div
          className="certificate-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Certifications that reflect my growth.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            I continuously enhance my skills through industry-recognized
            training and hands-on learning. These certifications showcase my
            dedication, technical knowledge, and ability to keep improving as a
            full-stack developer.
          </motion.p>
        </motion.div>
        {/* LEFT TEXT PART */}
        <div className="cert-container">
          <motion.div
            className="cert-left"
            key={cert.id}
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <span className="cert-number">{cert.id}</span>
            <h2 className="cert-title">{cert.title}</h2>
            <p className="cert-description">{cert.desc}</p>
          </motion.div>

          {/* RIGHT IMAGE PART */}
          <div className="cert-right">
            <div className="cert-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={cert.image}
                  src={cert.image}
                  alt="certificate"
                  className="cert-image"
                  variants={imageVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM MENU */}
      <div className="cert-bottom-menu">
        {certifications.map((c, i) => (
          <div
            key={i}
            className={`bottom-item ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            {c.footer}
          </div>
        ))}
      </div>
    </>
  );
};

export default CertificationSection;
