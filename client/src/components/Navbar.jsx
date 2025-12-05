import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/components/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="logo">Rinki Sharma</div>

      {/* Desktop Menu */}
      <ul className="nav-links">
        {["Home", "About", "Projects","Certifications","Contact"].map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`}>
              {item}
              <motion.div className="underline"></motion.div>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar rotate1" : "bar"}></span>
        <span className={open ? "bar hide" : "bar"}></span>
        <span className={open ? "bar rotate2" : "bar"}></span>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={{ height: 0 }}
        animate={open ? { height: "400px" } : { height: "0px" }}
        transition={{ duration: 0.4 }}
      >
        {["Home", "About", "Projects","Certifications","Contact"].map((item, i) => (
          <a key={i} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
