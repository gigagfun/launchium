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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built on cutting-edge technology for maximum performance and security
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack 