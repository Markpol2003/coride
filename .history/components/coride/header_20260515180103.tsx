import React from 'react'
import { motion } from 'framer-motion'
import { Bell, User } from 'lucide-react'

export default function CoRideHeader() {
  const [hasNotification, setHasNotification] = React.useState(true)

  return (
    <div className="bg-white pt-6 pb-4 border-b border-slate-100">
      <div className="px-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* CoRide Logo Image */}
          <motion.div
            className="w-10 h-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring' }}
          >
            <img 
              src="/placeholder-logo.png"
              alt="CoRide"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">CoRide</h1>
        </motion.div>
        
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5 text-slate-700" />
            {hasNotification && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              ></motion.div>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
