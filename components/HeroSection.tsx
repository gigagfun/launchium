"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">
                Launch a token
              </span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">
                with a tweet
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark-text-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionary AI-powered platform that transforms ideas into tradeable tokens instantly
            </motion.p>

            {/* Feature bullets */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { text: "No code required", icon: Check },
                { text: "0-60 second launch", icon: Check },
                { text: "Fully audited", icon: Check }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark-text-contrast font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Primary CTA with pulsating effect */}
              <motion.div
                className="relative"
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-30 animate-pulse"></div>
                <Button 
                  onClick={() => window.open('/launch', '_blank')}
                  variant="gradient" 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto relative shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                >
                  Create Token Now
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <Button 
                onClick={() => window.open('/launchiumbook', '_blank')}
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                LaunchiumBook
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] max-w-full">
              {/* Central logo - bigger and no border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                >
                  <Image 
                    src="/logo.jpg" 
                    alt="Launchium Logo" 
                    width={192} 
                    height={192} 
                    className="rounded-full w-full h-full object-cover"
                    priority
                    quality={85}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </motion.div>
              </div>

              {/* Orbiting logos with varied sizes and speeds - responsive */}
              {[
                { size: 'w-12 h-12 sm:w-16 sm:h-16', distance: 120, smDistance: 180, speed: 18, delay: 0 },
                { size: 'w-8 h-8 sm:w-12 sm:h-12', distance: 140, smDistance: 220, speed: 25, delay: 1 },
                { size: 'w-14 h-14 sm:w-20 sm:h-20', distance: 100, smDistance: 160, speed: 22, delay: 2 },
                { size: 'w-6 h-6 sm:w-10 sm:h-10', distance: 160, smDistance: 250, speed: 30, delay: 3 },
                { size: 'w-10 h-10 sm:w-14 sm:h-14', distance: 130, smDistance: 200, speed: 20, delay: 4 },
                { size: 'w-12 h-12 sm:w-18 sm:h-18', distance: 110, smDistance: 170, speed: 28, delay: 5 }
              ].map((orbit, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${orbit.size} rounded-full shadow-xl flex items-center justify-center overflow-hidden`}
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: `-${parseInt(orbit.size.split(' ')[1].replace('h-', '')) * 2}px`,
                    marginLeft: `-${parseInt(orbit.size.split(' ')[1].replace('h-', '')) * 2}px`,
                    transformOrigin: `${orbit.distance}px ${parseInt(orbit.size.split(' ')[1].replace('h-', '')) * 2}px`
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    rotate: { 
                      duration: orbit.speed, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: orbit.delay * 0.5
                    },
                    scale: { 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: orbit.delay * 0.3
                    }
                  }}
                >
                  <Image 
                    src="/logo.jpg" 
                    alt="Orbiting Logo" 
                    width={parseInt(orbit.size.split(' ')[1].replace('h-', '')) * 4} 
                    height={parseInt(orbit.size.split(' ')[1].replace('h-', '')) * 4} 
                    className="rounded-full w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Floating particles with varied sizes */}
              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={`particle-${index}`}
                  className={`absolute rounded-full bg-gradient-to-r from-primary to-accent ${
                    index % 3 === 0 ? 'w-3 h-3' : index % 3 === 1 ? 'w-2 h-2' : 'w-4 h-4'
                  }`}
                  style={{
                    top: `${10 + (index % 5) * 18}%`,
                    left: `${5 + (index % 4) * 25}%`,
                  }}
                  animate={{
                    y: [-15, 20, -15],
                    x: [-10, 10, -10],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5]
                  }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 