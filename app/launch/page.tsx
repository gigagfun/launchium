"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Rocket, Clock } from 'lucide-react'
import Image from 'next/image'

const LaunchPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background glass effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Logo in corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-10"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/10">
          <Image 
            src="/logo.jpg" 
            alt="Launchium Logo" 
            width={64} 
            height={64} 
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 shadow-2xl">
            <CardContent className="p-12">
              {/* Main Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-xl"
              >
                <Rocket className="w-12 h-12 text-white" />
              </motion.div>

              {/* Coming Soon Text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold gradient-text mb-6"
              >
                Coming Soon
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-600 dark:text-gray-400 mb-8"
              >
                Our revolutionary token launch platform is under development. 
                Be the first to experience the future of DeFi!
              </motion.p>

              {/* Status indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center space-x-2 mb-8"
              >
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-gray-600 dark:text-gray-400">
                  Platform launching Q3 2025
                </span>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button 
                  onClick={() => window.open('/presale', '_blank')}
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8 py-6 h-auto shadow-xl backdrop-blur-sm"
                >
                  Join Presale
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Secure your LNCHM tokens now at presale prices
                </p>
              </motion.div>

              {/* Features preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  What's Coming:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>AI-powered token creation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>0-60 second deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Automated security audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <span>Instant liquidity provision</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default LaunchPage 