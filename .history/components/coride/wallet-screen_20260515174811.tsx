'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { QrCode, Send, Plus, TrendingUp } from 'lucide-react'
import { transactions } from '@/lib/coride-mock-data'

export default function WalletScreen() {
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
        <h2 className="text-2xl font-black text-blue-900 mb-2">Wallet</h2>
        <p className="text-xs text-slate-600">Tokenized transit payments</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 pb-20 space-y-4"
      >
        {/* Premium Card */}
        <motion.div
          variants={itemVariants}
          className="relative h-40 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-5 shadow-xl text-white overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-xs font-semibold opacity-75 mb-4">Virtual Transit Card</p>
              <p className="text-3xl font-black tracking-tight">₱520.00</p>
            </div>
            <p className="text-xs font-semibold opacity-75">Future-ready tokenized payments</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3"
        >
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors">
            <QrCode className="w-4 h-4" />
            Scan QR
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 text-blue-900 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
            <Send className="w-4 h-4" />
            Pay Fare
          </button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="flex gap-2"
        >
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold text-xs hover:bg-slate-200 transition-colors">
            <Plus className="w-4 h-4" />
            Top Up
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold text-xs hover:bg-slate-200 transition-colors">
            <TrendingUp className="w-4 h-4" />
            Rewards
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-px bg-slate-200"></motion.div>

        {/* Transaction History */}
        <motion.div variants={itemVariants}>
          <p className="text-sm font-black text-blue-900 mb-3">Recent Transactions</p>
          <div className="space-y-2">
            {transactions.map((txn, index) => (
              <motion.div
                key={txn.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800">{txn.type}</p>
                  <p className="text-xs text-slate-600">{txn.date}</p>
                </div>
                <p className="text-sm font-black text-blue-900">₱{txn.amount.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
