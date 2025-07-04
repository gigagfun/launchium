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
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "Multi-layered security with real-time monitoring and threat detection",
      features: ["Smart contract audits", "Real-time monitoring", "Threat detection", "Emergency protocols"],
      color: "from-red-500 to-red-600"
    }
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-900/10 dark:via-gray-900/5 backdrop-blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Built on the most advanced blockchain infrastructure with AI-powered automation
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Glass container */}
          <div className="relative rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 shadow-2xl">
            {/* Liquid glass effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-transparent to-white/10 dark:from-gray-800/10 dark:to-gray-800/10 backdrop-blur-sm"></div>
            
            <div className="relative z-10 overflow-hidden">
              <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 -mx-4 scrollbar-hide">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-80 snap-center"
                  >
                    <Card className="h-full group hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/20 bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg overflow-hidden">
                      {/* Glass morphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-gray-800/20 dark:via-gray-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <CardContent className="p-8 relative z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                          className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <tech.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-primary transition-colors">
                          {tech.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-200 mb-6 text-sm leading-relaxed">
                          {tech.description}
                        </p>
                        
                        <div className="space-y-3">
                          {tech.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 + 0.4 }}
                              viewport={{ once: true }}
                              className="flex items-center text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-3 flex-shrink-0`}></div>
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Liquid glass bottom accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {technologies.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30 dark:bg-gray-600/30 backdrop-blur-sm"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default TechStack 