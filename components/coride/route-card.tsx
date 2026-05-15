import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface RouteCardProps {
  id: number
  type: string
  route: string
  eta: string
  vehicle: LucideIcon
  status: string
  statusPulse: boolean
  seats: string
  seatColor: 'green' | 'orange'
}

export default function RouteCard({
  id,
  type,
  route,
  eta,
  vehicle: VehicleIcon,
  status,
  statusPulse,
  seats,
  seatColor,
}: RouteCardProps) {
  // Generate seat indicators based on number or text
  const getSeatIndicators = () => {
    if (seats === 'Plenty of Space') {
      return Array(5).fill('●').join(' ')
    }
    const numSeats = parseInt(seats, 10)
    if (isNaN(numSeats) || numSeats < 0 || numSeats > 5) {
      return Array(5).fill('●').join(' ')
    }
    const available = Array(numSeats).fill('●').join(' ')
    const unavailable = Array(Math.max(0, 5 - numSeats)).fill('○').join(' ')
    return unavailable ? `${available} ${unavailable}` : available
  }

  const seatColor_ = seatColor === 'green' ? 'text-green-600' : 'text-amber-500'
  const statusColor = statusPulse ? 'bg-green-500' : 'bg-blue-500'

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-5 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/20 hover:border-slate-300 transition-all">
        
        {/* Top Row: Vehicle Icon, Route Info, Status Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3 flex-1">
            {/* Vehicle Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0"
            >
              <VehicleIcon className="w-6 h-6 text-blue-600" />
            </motion.div>
            
            {/* Route Text */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                {type === 'jeepney' ? 'Minibus/Jeepney' : 'Modern Bus'}
              </p>
              <p className="text-sm font-bold text-slate-800 line-clamp-2">{route}</p>
            </div>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg flex-shrink-0"
          >
            <motion.div
              animate={statusPulse ? { scale: [1, 1.2, 1] } : {}}
              transition={statusPulse ? { repeat: Infinity, duration: 2 } : {}}
              className={`w-2 h-2 rounded-full ${statusColor}`}
            ></motion.div>
            <span className="text-xs font-bold text-blue-900 whitespace-nowrap">{status}</span>
          </motion.div>
        </div>

        {/* MASSIVE ETA - The Star of the Show */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-4"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Arrival</p>
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring' }}
            className="text-7xl font-black text-blue-900 leading-none tracking-tighter"
          >
            {eta}
          </motion.p>
          <p className="text-sm font-semibold text-slate-600 mt-1">Minutes Away</p>
        </motion.div>

        {/* Bottom Row: Seats Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="space-y-2"
        >
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Est. Seat Availability</p>
          <div className="flex items-center justify-between">
            <p className={`text-sm font-bold ${seatColor_}`}>
              {seats === 'Plenty of Space' ? '5/5 Seats Available' : `${seats} Seats Left`}
            </p>
            <p className={`text-base tracking-widest font-bold ${seatColor_}`}>
              {getSeatIndicators()}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
