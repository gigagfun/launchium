"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Bug, Lock, CheckCircle2 } from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Immutable contracts with no admin privileges or backdoors",
      features: [
        "No mint authority - Fixed supply forever",
        "No freeze authority - Unstoppable transfers", 
        "Permanent liquidity lock - 100% secured",
        "Overflow protection - Mathematical safety"
      ],
      color: "from-blue-500 to-blue-600",
      status: "Implemented"
    },
    {
      icon: Lock,
      title: "Platform Security",
      description: "Enterprise-grade infrastructure protection",
      features: [
        "Cloudflare Enterprise DDoS protection",
        "Hardware Security Modules (HSMs)",
        "Advanced rate limiting systems",
        "IP whitelisting for critical operations"
      ],
      color: "from-green-500 to-green-600",
      status: "Active"
    },
    {
      icon: Bug,
      title: "Audit & Bug Bounty",
      description: "Professional audits and community-driven security",
      features: [
        "CertiK - Comprehensive security audit",
        "Hacken - Smart contract review",
        "Quantstamp - Economic model validation",
        "Bug bounty program (up to $500K rewards)"
      ],
      color: "from-purple-500 to-purple-600",
      status: "Q3 2025"
    }
  ]

  const securityStats = [
    { label: "Contract Status", value: "Immutable", desc: "No upgrade functions or admin control" },
    { label: "Liquidity Lock", value: "100%", desc: "Locked forever with burn verification" },
    { label: "Team Allocation", value: "0%", desc: "No team tokens or hidden wallets" },
    { label: "Audit Partners", value: "3", desc: "CertiK, Hacken, Quantstamp" }
  ]

  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Security & Audits
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive security measures with professional audits and immutable smart contracts
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <CardTitle className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </CardTitle>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    feature.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                    feature.status === 'Active' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                    'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      feature.status === 'Completed' ? 'bg-green-500' :
                      feature.status === 'Active' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}></div>
                    {feature.status}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200 mb-6 text-center">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.features.map((item, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 + 0.4 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-200">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold gradient-text text-center mb-8">
                Security Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {securityStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                      {stat.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </section>
  )
}

export default Security 