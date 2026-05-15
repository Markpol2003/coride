'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AppContainer from '@/components/coride/app-container'
import LandingScreen from '@/components/coride/landing-screen'
import CoRideHeader from '@/components/coride/header'
import BottomNav from '@/components/coride/bottom-nav'
import HomeScreen from '@/components/coride/home-screen'
import RoutesScreen from '@/components/coride/routes-screen'
import InsightsScreen from '@/components/coride/insights-screen'
import WalletScreen from '@/components/coride/wallet-screen'

export default function CoRidePage() {
  const [showLanding, setShowLanding] = React.useState(true)
  const [activeNav, setActiveNav] = React.useState('home')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const renderScreen = () => {
    switch (activeNav) {
      case 'home':
        return <HomeScreen key="home" />
      case 'routes':
        return <RoutesScreen key="routes" />
      case 'insights':
        return <InsightsScreen key="insights" />
      case 'wallet':
        return <WalletScreen key="wallet" />
      default:
        return <HomeScreen key="home" />
    }
  }

  if (!mounted) return null

  if (showLanding) {
    return (
      <AppContainer>
        <LandingScreen
          onGetStarted={() => setShowLanding(false)}
          onViewRoutes={() => {
            setShowLanding(false)
            setActiveNav('routes')
          }}
        />
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      {/* Header - Fixed at top */}
      <div className="flex-shrink-0 z-40">
        <CoRideHeader />
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Content - Screen transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNav}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation - Fixed at bottom */}
      <div className="flex-shrink-0 z-40">
        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </AppContainer>
  )
}
