import { motion } from "framer-motion";
import "../style/components/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      {/* LEFT TEXT AREA ANIMATION */}
      <motion.div 
        className="contact-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Get in Touch</h1>
        <h3>I'd like to hear from you!</h3>
        <p>If you have any inquiries or just want to say hi, please use the contact form!</p>
      </motion.div>


      {/* RIGHT FORM + STAGGER ANIMATION */}
      <motion.form 
        className="contact-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Two input fields fade one by one */}
        <motion.div 
          className="two-input"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label>First Name</label>
            <motion.input 
              type="text" 
              placeholder="Enter first name"
              whileFocus={{ scale: 1.03, boxShadow: "0px 0px 8px #f74646" }}
            />
          </div>

          <div>
            <label>Last Name</label>
            <motion.input 
              type="text" 
              placeholder="Enter last name"
              whileFocus={{ scale: 1.03, boxShadow: "0px 0px 8px #f74646" }}
            />
          </div>
        </motion.div>


        <motion.label initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25 }}>
          Email *
        </motion.label>
        <motion.input 
          type="email" 
          placeholder="Enter your email" 
          required
          whileFocus={{ scale: 1.03, boxShadow: "0px 0px 8px #f74646" }}
        />

        <motion.label initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Message
        </motion.label>
        <motion.textarea 
          rows="6" 
          placeholder="Write your message..."
          whileFocus={{ scale: 1.02, boxShadow: "0px 0px 8px #f74646" }}
        />

        {/* Button hover + tap scaling */}
        <motion.button 
          type="submit" 
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Send Message
        </motion.button>

      </motion.form>
    </section>
  );
};

export default Contact;
