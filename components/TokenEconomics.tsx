"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Lock, Users, TrendingUp, Coins } from 'lucide-react'

const TokenEconomics = () => {
  const tokenDistribution = [
    { category: "Presale", percentage: 35, amount: "350M LNCHM", color: "bg-gradient-to-r from-blue-500 to-blue-600", icon: Users },
    { category: "Raydium Liquidity", percentage: 25, amount: "250M LNCHM", color: "bg-gradient-to-r from-green-500 to-green-600", icon: TrendingUp },
    { category: "Marketing & Platform Development", percentage: 20, amount: "200M LNCHM", color: "bg-gradient-to-r from-purple-500 to-purple-600", icon: TrendingUp },
    { category: "CEX/DEX Listings", percentage: 15, amount: "150M LNCHM", color: "bg-gradient-to-r from-orange-500 to-orange-600", icon: Coins },
    { category: "Team & Engineering", percentage: 5, amount: "50M LNCHM", color: "bg-gradient-to-r from-pink-500 to-pink-600", icon: Lock }
  ]

  const keyMetrics = [
    { label: "Total Supply", value: "1,000,000,000 LNCHM", desc: "Fixed supply, no inflation" },
    { label: "Hard Cap", value: "~$50,000", desc: "Maximum raise amount" },
    { label: "Soft Cap", value: "~$25,000", desc: "Minimum viable raise" },
    { label: "Starting Price", value: "Determined by presale", desc: "Based on final presale amount" },
    { label: "Contract", value: "Renounced", desc: "No admin control after launch" },
    { label: "Liquidity", value: "Locked Forever", desc: "Permanent liquidity guarantee" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const pieVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  }

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
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Token Economics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Carefully designed tokenomics to ensure sustainable growth and community value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Token Distribution */}
          <motion.div
            variants={pieVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative">
              <svg width="280" height="280" viewBox="0 0 200 200" className="drop-shadow-lg">
                {tokenDistribution.map((item, index) => {
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

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <span className="gradient-text">Key Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold text-gray-900 dark:text-gray-100">
                          {metric.label}
                        </div>
                        <div className="text-lg font-bold gradient-text">
                          {metric.value}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TokenEconomics 