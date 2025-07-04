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

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-white" />
                  </div>
                  <span className="gradient-text">Token Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Pie Chart Visualization */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-64 h-64">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
                      {/* Background circle */}
                      <circle
                        cx="21"
                        cy="21"
                        r="15.915"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      
                      {/* Pie segments */}
                      {(() => {
                        let cumulativePercentage = 0;
                        return tokenDistribution.map((item, index) => {
                          const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                          const strokeDashoffset = `${100 - cumulativePercentage}`;
                          cumulativePercentage += item.percentage;
                          
                          const colors = {
                            'from-blue-500': '#3b82f6',
                            'from-green-500': '#10b981',
                            'from-purple-500': '#8b5cf6',
                            'from-orange-500': '#f97316',
                            'from-pink-500': '#ec4899',
                            'from-indigo-500': '#6366f1',
                            'from-gray-500': '#6b7280'
                          };
                          
                          const colorKey = item.color.split(' ')[1] as keyof typeof colors;
                          const strokeColor = colors[colorKey] || '#3b82f6';
                          
                          return (
                            <circle
                              key={index}
                              cx="21"
                              cy="21"
                              r="15.915"
                              fill="transparent"
                              stroke={strokeColor}
                              strokeWidth="3"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              className="transition-all duration-300 hover:stroke-4"
                            />
                          );
                        });
                      })()}
                    </svg>
                    
                    {/* Center label */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">1B</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Supply</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend and Distribution List */}
                <div className="space-y-4">
                  {tokenDistribution.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {item.category}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {item.amount}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">
                          {item.percentage}%
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
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