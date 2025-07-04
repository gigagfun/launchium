"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Coins, BarChart3, Shield } from 'lucide-react'

const TechStack = () => {
  const technologies = [
    {
      icon: Brain,
      title: "AI Engine",
      description: "GPT-4 powered smart contract generation with security optimization",
      features: ["Natural language processing", "Code generation", "Security analysis", "Performance optimization"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Coins,
      title: "Solana Integration",
      description: "High-speed, low-cost blockchain infrastructure for instant deployments",
      features: ["Sub-second transactions", "Minimal gas fees", "High throughput", "Developer friendly"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Meteora DEX",
      description: "Advanced liquidity management and automated market making",
      features: ["Dynamic liquidity", "MEV protection", "Yield optimization", "Cross-chain support"],
      color: "from-blue-500 to-blue-600"
    }
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built on the most advanced blockchain infrastructure with AI-powered automation
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-3 gap-8 relative">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${tech.color} rounded-full border-4 border-white dark:border-gray-800 z-10`}></div>
                  
                  <Card className="mt-8 group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <tech.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {tech.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                        {tech.description}
                      </p>
                      
                      <div className="space-y-2">
                        {tech.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 + 0.4 }}
                            className="flex items-center text-xs text-gray-500 dark:text-gray-200"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scroll */}
        <div className="lg:hidden">
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tech.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {tech.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      {tech.description}
                    </p>
                    
                    <div className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-200">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack 