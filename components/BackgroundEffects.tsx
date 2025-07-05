"use client"

import React from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orange Matrix Blur Background */}
      <div className="absolute inset-0">
        {/* Matrix Grid */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={`matrix-line-${i}`}
              className="absolute bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"
              style={{
                left: `${(i * 5) % 100}%`,
                top: '0%',
                width: '1px',
                height: '100%',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={`matrix-line-h-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
              style={{
                top: `${(i * 6.67) % 100}%`,
                left: '0%',
                height: '1px',
                width: '100%',
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>

        {/* Floating Matrix Particles */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`matrix-particle-${index}`}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [0.8, 1.2, 0.9, 0.8],
              opacity: [0.3, 0.6, 0.4, 0.3]
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2
            }}
          />
        ))}
      </div>

      {/* Floating Particles - Distributed across entire page */}
      {[...Array(25)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className={`absolute rounded-full bg-gradient-to-r from-primary to-accent ${
            index % 4 === 0 ? 'w-3 h-3' : 
            index % 4 === 1 ? 'w-2 h-2' : 
            index % 4 === 2 ? 'w-4 h-4' : 'w-1 h-1'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
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
      ))}

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
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`glow-orb-${index}`}
          className="absolute rounded-full bg-gradient-to-r from-orange-400/20 to-orange-600/20 blur-2xl"
          style={{
            width: `${60 + index * 20}px`,
            height: `${60 + index * 20}px`,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
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
      ))}

      {/* Shooting Stars */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`shooting-star-${index}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"
          style={{
            top: `${Math.random() * 50}%`,
            left: '-10px',
          }}
          animate={{
            x: [0, 1200],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: index * 5 + Math.random() * 3,
            repeatDelay: 8
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundEffects 