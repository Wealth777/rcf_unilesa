import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhoneAlt, FaHome, FaChurch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Joinus.css";

export default function JoinUs() {
  return (
    <section className="joinus-section">
      <motion.div
        className="joinus-container container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="joinus-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Contact Us
        </motion.h3>

        <p className="joinus-desc">
          Fill in your details below, and we’ll reach out to you soon 🙏
        </p>

        <motion.form
          className="joinus-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="form-group">
            <FaUser className="form-icon" />
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <FaChurch className="form-icon" />
            <input type="text" placeholder="Your Department" required />
          </div>

          <div className="form-group">
            <FaPhoneAlt className="form-icon" />
            <input type="tel" placeholder="Your Phone Number" required />
          </div>

          <div className="form-group">
            <FaHome className="form-icon" />
            <input type="text" placeholder="Your Address" />
          </div>

          <div className="form-group textarea">
            <MdEmail className="form-icon" />
            <textarea
              rows="4"
              placeholder="Your Prayer Points or Message"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
