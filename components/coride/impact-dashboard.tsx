import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, ShieldCheck } from 'lucide-react'

export default function ImpactDashboard() {
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
      className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-lg shadow-blue-500/10"
    >
      <h3 className="text-sm font-bold text-slate-600 mb-4">Your CoRide Impact</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Time Saved */}
        <motion.div
          variants={itemVariants}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <TrendingDown className="w-5 h-5 text-green-600" />
            </motion.div>
            <span className="text-xs font-bold text-slate-600 uppercase">Time Saved</span>
          </div>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-black text-blue-900"
          >
            12 Mins
          </motion.p>
          <p className="text-xs text-slate-600">Reduced from 20m to 8m</p>
        </motion.div>

        {/* Peak Visibility */}
        <motion.div
          variants={itemVariants}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </motion.div>
            <span className="text-xs font-bold text-slate-600 uppercase">Visibility</span>
          </div>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-black text-blue-900"
          >
            100%
          </motion.p>
          <p className="text-xs text-slate-600">Toril Route</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
