"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Circle, Clock } from 'lucide-react'

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      timeline: "Q3 2025",
      status: "active",
      description: "Core platform development and initial token launch",
      milestones: [
        "Smart contract development and audit",
        "AI engine integration and testing",
        "Beta platform launch with limited features",
        "Community building and early adopters",
        "Initial DEX listing and liquidity provision"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Platform Enhancement",
      timeline: "Q4 2025 - Q1 2026",
      status: "upcoming",
      description: "Advanced features and ecosystem expansion",
      milestones: [
        "Advanced AI models for token optimization",
        "Cross-chain bridge implementation",
        "Mobile application development",
        "Partnership integrations and APIs",
        "Enhanced security and compliance features"
      ]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Maturity",
      timeline: "Q2 2026 & Beyond",
      status: "upcoming",
      description: "Full ecosystem deployment and global scaling",
      milestones: [
        "Enterprise-grade features and white-label solutions",
        "Advanced DeFi integrations and yield farming",
        "Governance token implementation and DAO structure",
        "Global regulatory compliance and partnerships",
        "AI-powered market making and liquidity optimization"
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-500" />
      case 'active':
        return <Clock className="w-6 h-6 text-blue-500" />
      case 'upcoming':
        return <Circle className="w-6 h-6 text-gray-400" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600'
      case 'active':
        return 'from-blue-500 to-blue-600'
      case 'upcoming':
        return 'from-gray-400 to-gray-500'
      default:
        return 'from-gray-400 to-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'active':
        return 'In Progress'
      case 'upcoming':
        return 'Planned'
      default:
        return 'Planned'
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our strategic roadmap to revolutionize the token launch ecosystem
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
                     <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-gray-400 to-gray-400"></div>

          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} border-4 border-white dark:border-gray-900 z-10`}></div>
                
                {/* Content Card */}
                <div className="ml-20">
                  <Card className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getStatusColor(phase.status)} text-white`}>
                              {phase.phase}
                            </span>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(phase.status)}
                              <span className={`text-sm font-medium ${
                                phase.status === 'completed' ? 'text-green-600 dark:text-green-300' :
                                phase.status === 'active' ? 'text-blue-600 dark:text-blue-300' :
                                'text-gray-500 dark:text-gray-300'
                              }`}>
                                {getStatusText(phase.status)}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                            {phase.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold gradient-text">
                            {phase.timeline}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-200 mb-6">
                        {phase.description}
                      </p>

                      {/* Milestones */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Milestones:
                        </h4>
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <motion.div
                            key={milestoneIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: milestoneIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                            <span className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed">
                              {milestone}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold gradient-text mb-4">
                Current Progress
              </h3>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div>
                   <div className="text-2xl font-bold text-blue-600 dark:text-blue-300 mb-1">
                     Phase 1
                   </div>
                   <div className="text-sm text-gray-600 dark:text-gray-200">
                     Currently In Development
                   </div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-1">
                     Phase 2 & 3
                   </div>
                   <div className="text-sm text-gray-600 dark:text-gray-200">
                     Planned for 2026
                   </div>
                 </div>
                 <div>
                   <div className="text-2xl font-bold gradient-text mb-1">
                     25%
                   </div>
                   <div className="text-sm text-gray-600 dark:text-gray-200">
                     Overall Progress
                   </div>
                 </div>
               </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap 