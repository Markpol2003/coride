'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AppContainerProps {
  children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-4">
      {/* Floating gradient blobs in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 8, delay: 1 }}
        />
      </div>

      {/* App Container */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 100,
        }}
        className="mx-auto w-[375px] h-[812px] overflow-hidden relative shadow-2xl rounded-[2.5rem] border-4 border-slate-800 bg-white flex flex-col"
      >
        <div className="flex flex-col h-full overflow-hidden">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
