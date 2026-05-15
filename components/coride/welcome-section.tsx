'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function WelcomeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-4 py-4 bg-gradient-to-br from-blue-50 to-transparent"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-black text-blue-900 mb-1"
      >
        Good Morning, Mark
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-sm text-slate-600 font-medium flex items-center gap-2"
      >
        <span>Your ride intelligence is live</span>
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🔴
        </motion.span>
      </motion.p>
    </motion.div>
  )
}
