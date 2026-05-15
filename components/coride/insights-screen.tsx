'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, AlertCircle, Zap } from 'lucide-react'
import { insights } from '@/lib/coride-mock-data'

export default function InsightsScreen() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-4">
        <h2 className="text-2xl font-black text-blue-900 mb-2">Insights</h2>
        <p className="text-xs text-slate-600">AI-powered transit analytics</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 pb-20 space-y-3"
      >
        {/* Key Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3 mb-4"
        >
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-4">
            <p className="text-xs font-bold text-cyan-900 uppercase mb-2">Daily Commuters</p>
            <p className="text-2xl font-black text-cyan-900">800K+</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-4">
            <p className="text-xs font-bold text-emerald-900 uppercase mb-2">Accuracy</p>
            <p className="text-2xl font-black text-emerald-900">92%</p>
          </div>
        </motion.div>

        {/* Insights Cards */}
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            variants={itemVariants}
            className={`rounded-2xl p-4 border backdrop-blur-sm ${
              insight.color === 'red'
                ? 'bg-red-50/70 border-red-200'
                : insight.color === 'green'
                ? 'bg-green-50/70 border-green-200'
                : 'bg-blue-50/70 border-blue-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                insight.color === 'red'
                  ? 'bg-red-100'
                  : insight.color === 'green'
                  ? 'bg-green-100'
                  : 'bg-blue-100'
              }`}>
                {index === 0 ? (
                  <AlertCircle className={`w-5 h-5 ${
                    insight.color === 'red' ? 'text-red-600' : 'text-blue-600'
                  }`} />
                ) : index === 1 ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <Zap className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-black mb-1 ${
                  insight.color === 'red'
                    ? 'text-red-900'
                    : insight.color === 'green'
                    ? 'text-green-900'
                    : 'text-blue-900'
                }`}>
                  {insight.title}
                </p>
                {insight.time && (
                  <p className="text-xs text-slate-600">{insight.time}</p>
                )}
                {insight.route && (
                  <p className="text-xs text-slate-700 font-semibold mb-1">{insight.route}</p>
                )}
                {insight.reduction && (
                  <p className="text-xs text-green-700 font-bold">{insight.reduction}</p>
                )}
                {insight.prediction && (
                  <p className="text-xs text-slate-600">{insight.prediction}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Driver Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 rounded-2xl p-4 mt-6"
        >
          <h3 className="text-sm font-black text-blue-900 mb-3">For Drivers</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-blue-900">Estimated Earnings Increase</p>
              <p className="text-lg font-black text-blue-600">+22%</p>
            </div>
            <p className="text-xs text-blue-800">Hotspot: Bankerohan (High Density)</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
