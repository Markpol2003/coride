'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Bus } from 'lucide-react'

interface LandingScreenProps {
  onGetStarted: () => void
  onViewRoutes: () => void
}

export default function LandingScreen({ onGetStarted, onViewRoutes }: LandingScreenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col items-center justify-between px-4 py-4 bg-white"
    >
      {/* Logo */}
      <motion.div
        variants={itemVariants}
        className="pt-16"
      >
        <motion.div
          className="w-32 h-32"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src="/placeholder-logo.png"
            alt="CoRide"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Tagline */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-black text-blue-900 text-center leading-tight"
      >
        Stop Guessing.
        <br />
        Start Going.
      </motion.h1>

      {/* Transit Icons Decorations */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-center gap-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="p-4 bg-blue-50 rounded-full"
        >
          <Bus className="w-8 h-8 text-blue-600" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
          className="p-4 bg-cyan-50 rounded-full"
        >
          <MapPin className="w-8 h-8 text-cyan-600" />
        </motion.div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="w-full space-y-4"
      >
        {/* Primary Button */}
        <motion.button
          onClick={onGetStarted}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Secondary Button */}
        <motion.button
          onClick={onViewRoutes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-4 py-4 bg-transparent text-blue-600 font-bold rounded-xl border-2 border-blue-200 hover:bg-blue-50 transition-all"
        >
          View Live Routes
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
