'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { searchSuggestions } from '@/lib/coride-mock-data'

export default function SearchSuggestions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-4 pb-4 flex flex-wrap gap-2"
    >
      {searchSuggestions.map((suggestion) => (
        <motion.button
          key={suggestion}
          variants={chipVariants}
          whileHover={{ scale: 1.05, backgroundColor: 'rgb(59 130 246)' }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1.5 bg-slate-100 text-blue-900 text-xs font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors"
        >
          {suggestion}
        </motion.button>
      ))}
    </motion.div>
  )
}
