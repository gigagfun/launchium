"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Circle, Star } from 'lucide-react'

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q3 2025",
      title: "Foundation Launch",
      status: "upcoming",
      items: [
        "LNCHM Token Presale",
        "Raydium DEX Listing", 
        "Smart Contract Security Audits",
        "Community Building & Marketing",
        "Beta Platform Launch"
      ]
    },
    {
      quarter: "Q4 2025", 
      title: "Platform Expansion",
      status: "planned",
      items: [
        "Mobile App Release (iOS/Android)",
        "TikTok Integration",
        "Creator Rewards Program v2",
        "Advanced Analytics Dashboard", 
        "Partnership Program Launch"
      ]
    },
    {
      quarter: "Q1 2026",
      title: "Multi-Platform Integration", 
      status: "planned",
      items: [
        "Reddit Integration",
        "Telegram Mini App",
        "Major CEX Listings",
        "Institutional Partnerships",
        "Advanced AI Features"
      ]
    },
    {
      quarter: "Q2 2026",
      title: "Global Expansion",
      status: "planned", 
      items: [
        "Meta/WhatsApp Integration",
        "Cross-chain Bridge Development",
        "Enterprise Solutions",
        "Global Marketing Campaign",
        "Regulatory Compliance Expansion"
      ]
    },
    {
      quarter: "2027+",
      title: "Industry Leadership",
      status: "vision",
      items: [
        "3B+ Users Worldwide",
        "Industry Standard Platform",
        "Full DAO Governance",
        "Ecosystem Partnerships",
        "Next-Gen AI Integration"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'upcoming':
        return <Star className="w-6 h-6 text-yellow-500" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-white/5 dark:bg-green-900/10 backdrop-blur-xl'
      case 'upcoming': 
        return 'border-yellow-500 bg-white/5 dark:bg-yellow-900/10 backdrop-blur-xl'
      case 'planned':
        return 'border-blue-500 bg-white/5 dark:bg-blue-900/10 backdrop-blur-xl'
      default:
        return 'border-purple-500 bg-white/5 dark:bg-purple-900/10 backdrop-blur-xl'
    }
  }

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our journey to revolutionize token launching and reach billions of users
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-5 w-6 h-6 rounded-full bg-white/10 dark:bg-gray-900/50 backdrop-blur-xl border-4 border-primary shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-16 sm:ml-20 w-full">
                  <Card className={`${getStatusColor(phase.status)} border-2 hover:shadow-xl transition-all duration-300 group`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {phase.title}
                          </CardTitle>
                          <div className="text-sm font-semibold text-primary mt-1">
                            {phase.quarter}
                          </div>
                        </div>
                        <div className="group-hover:scale-110 transition-transform">
                          {getStatusIcon(phase.status)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 opacity-60"></div>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <Card className="bg-white/5 dark:bg-black/5 backdrop-blur-xl border-2 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Join Our Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Be part of the revolution that will transform how tokens are launched and reach billions of users worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/presale"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Join Presale
                </a>
                <a 
                  href="https://x.com/launchium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Follow Updates
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap 