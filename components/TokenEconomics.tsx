"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Lock, Users, TrendingUp, Coins } from 'lucide-react'

const TokenEconomics = () => {
  const tokenData = [
    {
      category: "Presale",
      percentage: 35,
      amount: "350M LNCHM",
      description: "Early investors and community supporters",
      color: "#3B82F6"
    },
    {
      category: "Raydium Liquidity",
      percentage: 25,
      amount: "250M LNCHM", 
      description: "Initial DEX liquidity pool",
      color: "#10B981"
    },
    {
      category: "Marketing & Platform Development",
      percentage: 20,
      amount: "200M LNCHM",
      description: "Growth, partnerships, and platform enhancement",
      color: "#F59E0B"
    },
    {
      category: "CEX/DEX Listings",
      percentage: 15,
      amount: "150M LNCHM",
      description: "Exchange listings and market making",
      color: "#EF4444"
    },
    {
      category: "Team & Engineering",
      percentage: 5,
      amount: "50M LNCHM",
      description: "Team allocation with vesting schedule",
      color: "#8B5CF6"
    }
  ]

  // Calculate SVG pie chart paths
  const createPieSlice = (startAngle: number, endAngle: number, color: string) => {
    const centerX = 100
    const centerY = 100
    const radius = 80
    
    const x1 = centerX + radius * Math.cos(startAngle * Math.PI / 180)
    const y1 = centerY + radius * Math.sin(startAngle * Math.PI / 180)
    const x2 = centerX + radius * Math.cos(endAngle * Math.PI / 180)
    const y2 = centerY + radius * Math.sin(endAngle * Math.PI / 180)
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
  }

  let currentAngle = 0

  return (
    <section className="py-20 bg-white/10 dark:bg-black/10 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fair and transparent distribution of 1 billion LNCHM tokens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <svg width="280" height="280" viewBox="0 0 200 200" className="drop-shadow-lg">
                {tokenData.map((item, index) => {
                  const sliceAngle = (item.percentage / 100) * 360
                  const endAngle = currentAngle + sliceAngle
                  const path = createPieSlice(currentAngle, endAngle, item.color)
                  currentAngle = endAngle
                  
                  return (
                    <motion.path
                      key={index}
                      d={path}
                      fill={item.color}
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  )
                })}
                
                {/* Center circle */}
                <circle cx="100" cy="100" r="35" fill="white" className="dark:fill-gray-900 drop-shadow-md" />
                <text x="100" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900 dark:fill-white">
                  1B
                </text>
                <text x="100" y="110" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">
                  LNCHM
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Legend */}
          <div className="space-y-4">
            {tokenData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 hover:shadow-md transition-all duration-300 border-l-4 group" style={{ borderLeftColor: item.color }}>
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {item.category}
                      </h3>
                      <div className="text-right">
                        <span className="font-bold text-lg" style={{ color: item.color }}>
                          {item.percentage}%
                        </span>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {item.amount}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center gradient-text">Key Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    ~$50,000
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hard Cap</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    ~$25,000
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Soft Cap</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    Presale
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Starting Price</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-center">
                <div className="group">
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
                    ✓ Contract Renounced
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">No admin control</div>
                </div>
                <div className="group">
                  <div className="text-lg font-semibold text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
                    ✓ Liquidity Locked Forever
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Permanent security</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenEconomics 