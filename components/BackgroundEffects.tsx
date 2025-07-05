"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orange Matrix Blur Background */}
      <div className="absolute inset-0">
        {/* Matrix Grid Pattern - Kareli Defter Gibi */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrixPulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Daha Küçük Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            animation: 'matrixPulse 3s ease-in-out infinite 1s'
          }}
        />
        
        {/* Ana Grid Çizgileri - Kalın */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            animation: 'matrixPulse 5s ease-in-out infinite 0.5s'
          }}
        />

        {/* Matrix Code Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={`matrix-rain-${i}`}
              className="absolute text-orange-500/60 font-mono text-sm animate-[matrixFlow_2s_linear_infinite]"
              style={{
                left: `${(i * 6.67) % 100}%`,
                top: '0%',
                animationDelay: `${i * 0.4}s`
              }}
            >
              {['01', '10', '11', '00', '01'][i % 5]}
            </div>
          ))}
        </div>

        {/* Matrix Digital Rain */}
        {[...Array(30)].map((_, index) => {
          const digits = ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0']
          return (
            <motion.div
              key={`matrix-digit-${index}`}
              className="absolute text-orange-400/40 font-mono font-bold text-lg"
              style={{
                left: `${(index * 3.33) % 100}%`,
                top: '-20px',
              }}
              animate={{
                y: [0, 800, 800],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 8 + (index % 4),
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3
              }}
            >
              {digits[index]}
            </motion.div>
          )
        })}

        {/* Floating Matrix Particles */}
        {[...Array(12)].map((_, index) => {
          const positions = [
            { top: 10, left: 15 }, { top: 25, left: 70 }, { top: 40, left: 30 }, { top: 60, left: 85 },
            { top: 75, left: 20 }, { top: 90, left: 60 }, { top: 15, left: 80 }, { top: 35, left: 10 },
            { top: 55, left: 45 }, { top: 80, left: 75 }, { top: 5, left: 50 }, { top: 95, left: 35 }
          ]
          return (
            <motion.div
              key={`matrix-particle-${index}`}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-2xl"
              style={{
                top: `${positions[index].top}%`,
                left: `${positions[index].left}%`,
              }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [0.8, 1.4, 0.9, 0.8],
              opacity: [0.2, 0.6, 0.3, 0.2]
            }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5
            }}
          />
          )
        })}
      </div>

      {/* Floating Particles - Distributed across entire page */}
      {[...Array(25)].map((_, index) => {
        const particlePositions = [
          { top: 5, left: 10 }, { top: 15, left: 80 }, { top: 25, left: 30 }, { top: 35, left: 90 }, { top: 45, left: 20 },
          { top: 55, left: 70 }, { top: 65, left: 40 }, { top: 75, left: 85 }, { top: 85, left: 15 }, { top: 95, left: 60 },
          { top: 8, left: 50 }, { top: 18, left: 25 }, { top: 28, left: 75 }, { top: 38, left: 5 }, { top: 48, left: 95 },
          { top: 58, left: 35 }, { top: 68, left: 65 }, { top: 78, left: 10 }, { top: 88, left: 80 }, { top: 98, left: 45 },
          { top: 12, left: 55 }, { top: 22, left: 15 }, { top: 32, left: 85 }, { top: 42, left: 25 }, { top: 52, left: 75 }
        ]
        return (
          <motion.div
            key={`particle-${index}`}
            className={`absolute rounded-full bg-gradient-to-r from-primary to-accent ${
              index % 4 === 0 ? 'w-3 h-3' : 
              index % 4 === 1 ? 'w-2 h-2' : 
              index % 4 === 2 ? 'w-4 h-4' : 'w-1 h-1'
            }`}
            style={{
              top: `${particlePositions[index].top}%`,
              left: `${particlePositions[index].left}%`,
            }}
          animate={{
            y: [-20, 30, -20],
            x: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 6 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
        )
      })}

      {/* Orbiting Particles - Multiple orbital systems */}
      {[...Array(3)].map((systemIndex) => (
        <div
          key={`orbital-system-${systemIndex}`}
          className="absolute"
          style={{
            top: `${20 + systemIndex * 30}%`,
            left: `${10 + systemIndex * 40}%`,
            width: '200px',
            height: '200px'
          }}
        >
          {[...Array(4)].map((_, orbitIndex) => (
            <motion.div
              key={`orbit-${systemIndex}-${orbitIndex}`}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-4px',
                marginLeft: '-4px',
                transformOrigin: `${40 + orbitIndex * 20}px 4px`
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                rotate: { 
                  duration: 8 + orbitIndex * 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: orbitIndex * 0.5
                },
                scale: { 
                  duration: 3 + orbitIndex * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: orbitIndex * 0.3
                }
              }}
            />
          ))}
        </div>
      ))}

      {/* Glowing Orbs */}
      {[...Array(6)].map((_, index) => {
        const orbPositions = [
          { top: 15, left: 20 }, { top: 35, left: 70 }, { top: 55, left: 30 },
          { top: 75, left: 80 }, { top: 25, left: 50 }, { top: 65, left: 15 }
        ]
        return (
          <motion.div
            key={`glow-orb-${index}`}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-2xl"
            style={{
              width: `${60 + index * 20}px`,
              height: `${60 + index * 20}px`,
              top: `${orbPositions[index].top}%`,
              left: `${orbPositions[index].left}%`,
            }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.5
          }}
        />
        )
      })}

      {/* Shooting Stars */}
      {[...Array(4)].map((_, index) => {
        const starPositions = [
          { top: 10, yMove: 50 }, { top: 25, yMove: -30 }, 
          { top: 40, yMove: 80 }, { top: 15, yMove: -60 }
        ]
        return (
          <motion.div
            key={`shooting-star-${index}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"
            style={{
              top: `${starPositions[index].top}%`,
              left: '-10px',
            }}
            animate={{
              x: [0, 1200],
              y: [0, starPositions[index].yMove],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 5 + (index * 2),
              repeatDelay: 8
            }}
          />
        )
      })}
    </div>
  )
}

export default BackgroundEffects 