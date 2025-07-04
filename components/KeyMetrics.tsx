"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react'

const KeyMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Market Size",
      value: "$3.5T",
      description: "Global token market opportunity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Revenue Model",
      value: "3.5%",
      description: "Transaction fee from successful launches",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Target Users",
      value: "50M+",
      description: "Creators, entrepreneurs, and developers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Launch Speed",
      value: "0-60s",
      description: "Average time to deploy a token",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="metrics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The numbers speak for themselves. The token economy is exploding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-lg font-heading font-semibold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    {metric.title}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2"
                  >
                    {metric.value}
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {metric.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: "Success Rate", value: "94%", desc: "vs 11% industry average" },
            { label: "Cost Reduction", value: "87%", desc: "compared to traditional launches" },
            { label: "Time Saved", value: "99.2%", desc: "from months to seconds" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default KeyMetrics 