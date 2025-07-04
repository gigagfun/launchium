"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const TechStack = () => {
  const technologies = [
    {
      name: "Solana",
      description: "Lightning-fast blockchain for instant token deployment",
      icon: "⚡",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "AI/ML",
      description: "Advanced algorithms for intelligent token creation",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Smart Contracts",
      description: "Secure, audited contracts for every token launch",
      icon: "🛡️",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "API Integration",
      description: "Seamless social media platform connectivity",
      icon: "🔗",
      color: "from-orange-500 to-red-500"
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
                        <span className="text-2xl">{tech.icon}</span>
                      </motion.div>
                      
                      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {tech.name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Scroll */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-6 px-4 -mx-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 snap-center"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                    </motion.div>
                    
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {tech.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                      {tech.description}
                    </p>
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