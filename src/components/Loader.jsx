import React from 'react'
import { motion } from 'framer-motion';
import '../styles/componentsStyle/Loader.css'

export default function Loader() {
  return (
<div className="loader-container">
      {/* Background light animation */}
      <motion.div
        className="loader-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Fellowship Name */}
      <motion.h1
        className="loader-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        RCF Unilesa
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="loader-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        “Let your light so shine before men” – <span>Matthew 5:16</span>
      </motion.p>

      {/* Spinner / Cross animation */}
      <motion.div
        className="cross-spinner"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        ✝️
      </motion.div>
    </div>
  );
}
