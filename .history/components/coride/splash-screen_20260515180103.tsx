'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center z-50">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6 z-10"
      >
        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <img 
            src="/placeholder-logo.png"
            alt="CoRide"
            className="w-16 h-16 object-contain"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-white text-center tracking-tight"
        >
          Stop Guessing.<br />Start Going.
        </motion.h1>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/80 text-sm font-medium text-center"
        >
          AI-powered transit intelligence
        </motion.p>
      </motion.div>
    </div>
  )
}
