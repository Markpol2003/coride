import React from 'react'
import { motion } from 'framer-motion'
import { Home, Map, BarChart2, Wallet } from 'lucide-react'

interface BottomNavProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

export default function BottomNav({ activeNav, setActiveNav }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'routes', label: 'Routes', icon: Map },
    { id: 'insights', label: 'Insights', icon: BarChart2 },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 py-4 bg-white border-t border-slate-100"
    >
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-2 shadow-lg shadow-blue-500/10 mx-auto">
        <div className="flex items-center justify-around">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeNav === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex flex-col items-center justify-center py-3 px-4 rounded-xl transition-all relative overflow-hidden ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navBackground"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/30 -z-10"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-bold">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
