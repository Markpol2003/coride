'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CarFront, Bus } from 'lucide-react'
import WelcomeSection from './welcome-section'
import ImpactDashboard from './impact-dashboard'
import SearchBar from './search-bar'
import SearchSuggestions from './search-suggestions'
import RouteCard from './route-card'
import { mockRoutes } from '@/lib/coride-mock-data'

export default function HomeScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      {/* Welcome Section */}
      <WelcomeSection />

      {/* Impact Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="px-4 py-4"
      >
        <ImpactDashboard />
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="px-4 py-4"
      >
        <SearchBar />
      </motion.div>

      {/* Search Suggestions */}
      <SearchSuggestions />

      {/* Live Routes Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-4 pb-20"
      >
        <h2 className="text-lg font-black text-blue-900 mb-1">Live Routes Near You</h2>
        <p className="text-xs text-slate-600 mb-4">AI-analyzed commuter flow</p>
        <div className="space-y-3">
          {mockRoutes.slice(0, 2).map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + index * 0.1 }}
            >
              <RouteCard
                id={route.id}
                type={route.type}
                route={route.route}
                eta={String(route.eta)}
                vehicle={route.type === 'jeepney' ? CarFront : Bus}
                status={route.status}
                statusPulse={route.statusPulse}
                seats={route.seatsAvailable > 0 ? String(route.seatsAvailable) : 'Plenty of Space'}
                seatColor={route.seatsAvailable >= 4 ? 'orange' : 'green'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
