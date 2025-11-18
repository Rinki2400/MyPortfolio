import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/components/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left - Name */}
      <motion.div
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Rinki Sharma
      </motion.div>

      {/* Desktop Menu */}
      <motion.ul
        className="nav-links"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <a href={`#${item.toLowerCase()}`}>
              {item}
              <motion.div
                className="underline"
                whileHover={{ width: "100%" }}
              ></motion.div>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Hamburger for Mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar rotate1" : "bar"}></span>
        <span className={open ? "bar hide" : "bar"}></span>
        <span className={open ? "bar rotate2" : "bar"}></span>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={open ? "mobile-menu open" : "mobile-menu"}
        initial={{ height: 0 }}
        animate={open ? { height: 240 } : { height: 0 }}
        transition={{ duration: 0.4 }}
      >
        {["Home", "About", "Projects", "Contact"].map((item, i) => (
          <motion.a
            key={i}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0 }}
            animate={open ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
