"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSolution from '@/components/ProblemSolution'
import KeyMetrics from '@/components/KeyMetrics'
import TechStack from '@/components/TechStack'
import TokenEconomics from '@/components/TokenEconomics'
import Security from '@/components/Security'
import Roadmap from '@/components/Roadmap'
import Footer from '@/components/Footer'
import BackgroundEffects from '@/components/BackgroundEffects'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false)

  const handlePresaleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 600) // Reset after animation
    // Navigate to presale page
    window.location.href = '/presale'
  }

  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
            <BackgroundEffects />
      
      {/* Blur Overlay for Grid - Minimal */}
      <div className="fixed inset-0 pointer-events-none z-20 backdrop-blur-[0.0625px] bg-white/0.006 dark:bg-black/0.006"></div>
      
      
      {/* Glass morphism background */}
      <div className="bg-white/0.3 dark:bg-black/0.3 backdrop-blur-xl relative z-30">
        <Navbar />
        <HeroSection />
        
        {/* Presale CTA Section */}
        <div className="py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              
              {/* Ripple effect overlay */}
              {isClicked && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-[ripple_0.6s_ease-out]"></div>
                </div>
              )}
              
              <motion.button
                onClick={handlePresaleClick}
                className={`relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-primary to-accent rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  isClicked ? 'animate-[lightBurst_0.6s_ease-out]' : ''
                }`}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
              >
                <span className="relative z-10">Join Presale</span>
                
                {/* Additional glow effect on click */}
                {isClicked && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/20 rounded-2xl animate-pulse"></div>
                )}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/70 to-white/90 dark:from-transparent dark:via-black/70 dark:to-black/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32">
          <ProblemSolution />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/1.5 to-white/2.25 dark:from-transparent dark:via-black/1.5 dark:to-black/2.25 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32">
          <KeyMetrics />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/1.5 to-white/2.25 dark:from-transparent dark:via-black/1.5 dark:to-black/2.25 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32">
          <TechStack />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/1.5 to-white/2.25 dark:from-transparent dark:via-black/1.5 dark:to-black/2.25 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32">
          <TokenEconomics />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/1.5 to-white/2.25 dark:from-transparent dark:via-black/1.5 dark:to-black/2.25 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32" id="security">
          <Security />
        </div>
        {/* Enhanced blur transition */}
        <div className="h-32 bg-gradient-to-b from-transparent via-white/1.5 to-white/2.25 dark:from-transparent dark:via-black/1.5 dark:to-black/2.25 backdrop-blur-sm"></div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl -mt-32 relative z-30">
        <div className="pt-32" id="roadmap">
          <Roadmap />
        </div>
      </div>
      
      <div className="bg-white/0.25 dark:bg-black/0.25 backdrop-blur-2xl relative z-30">
        <Footer />
      </div>
    </main>
  )
} 