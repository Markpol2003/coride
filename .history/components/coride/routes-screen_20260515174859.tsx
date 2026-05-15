'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Map, CarFront, Bus, TrendingUp } from 'lucide-react'
import { mockRoutes } from '@/lib/coride-mock-data'

export default function RoutesScreen() {
  const [selectedFilter, setSelectedFilter] = React.useState('all')

  const filters = [
    { id: 'all', label: 'All', icon: Map },
    { id: 'jeep', label: 'Jeep', icon: CarFront },
    { id: 'bus', label: 'Bus', icon: Bus },
  ]

  const filteredRoutes = selectedFilter === 'all' 
    ? mockRoutes 
    : mockRoutes.filter(r => r.type === (selectedFilter === 'jeep' ? 'jeepney' : 'bus'))

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-4">
        <h2 className="text-2xl font-black text-blue-900 mb-2">Routes</h2>
        <p className="text-xs text-slate-600">Interactive transit map</p>
      </div>

      {/* Filter Chips */}
      <div className="px-4 pb-4 flex gap-2">
        {filters.map((filter) => {
          const Icon = filter.icon
          const isActive = selectedFilter === filter.id
          return (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs font-bold">{filter.label}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Routes List */}
      <div className="px-4 pb-20 space-y-3">
        {filteredRoutes.map((route, index) => (
          <motion.div
            key={route.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  {route.vehicle}
                </p>
                <p className="text-sm font-bold text-slate-800">{route.route}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-blue-900">{route.eta}</p>
                <p className="text-xs text-slate-600">mins</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="px-2 py-1 bg-blue-50 rounded text-blue-900 font-semibold">
                {route.traffic}
              </span>
              <span className="px-2 py-1 bg-slate-100 rounded">
                {route.reliability || route.passengerDemand}%
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
