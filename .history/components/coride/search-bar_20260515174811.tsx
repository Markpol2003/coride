import React from 'react'
import { motion } from 'framer-motion'
import { Search, Mic } from 'lucide-react'

export default function SearchBar() {
  const [focused, setFocused] = React.useState(false)

  return (
    <div className="relative">
      {focused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl opacity-100"
        ></motion.div>
      )}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: focused ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`relative bg-white border-2 rounded-full px-4 py-4 flex items-center gap-3 transition-all ${
          focused 
            ? 'border-blue-600 shadow-lg shadow-blue-500/30' 
            : 'border-slate-200 shadow-md'
        }`}
      >
        <motion.div
          animate={{ scale: focused ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <Search className={`w-5 h-5 ${focused ? 'text-blue-600' : 'text-slate-400'}`} />
        </motion.div>
        <input
          type="text"
          placeholder="Where are you going today?"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-blue-900 placeholder:text-slate-400 outline-none text-base font-medium"
        />
        {focused && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Mic className="w-5 h-5 text-blue-600" />
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}
