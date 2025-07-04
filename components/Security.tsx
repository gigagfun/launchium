"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Lock, Eye, Award, Bug, Zap } from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Smart Contract Security",
      description: "Immutable contracts with no admin privileges or backdoors",
      details: [
        "Renounced contract ownership",
        "No mint/burn functions",
        "Transparent code on-chain",
        "Community-verified security"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Platform Security", 
      description: "Enterprise-grade infrastructure protecting user data and funds",
      details: [
        "End-to-end encryption",
        "Cloudflare DDoS protection",
        "Hardware Security Modules (HSMs)",
        "ISO 27001 compliance"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Third-Party Audits",
      description: "Comprehensive security audits by leading blockchain security firms",
      details: [
        "CertiK smart contract audit",
        "Hacken platform security review", 
        "Quantstamp code verification",
        "Ongoing security monitoring"
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Bug Bounty Program",
      description: "Rewarding security researchers for finding vulnerabilities",
      details: [
        "$500,000 maximum reward",
        "Continuous program active",
        "Responsible disclosure policy",
        "Community-driven security"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bug,
      title: "Incident Response",
      description: "24/7 monitoring and rapid response to security incidents", 
      details: [
        "Real-time threat detection",
        "Automated incident response",
        "Emergency contact protocols",
        "Post-incident analysis"
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Zap,
      title: "Future-Proof Security",
      description: "Evolving security measures for emerging threats",
      details: [
        "Quantum-resistant cryptography",
        "AI-powered threat detection",
        "Regular security updates",
        "Community governance on security"
      ],
      color: "from-yellow-500 to-amber-500"
    }
  ]

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-900/10 dark:via-gray-900/5 backdrop-blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Security & Trust
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Built with security-first principles to protect your assets and ensure platform integrity
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
                {securityFeatures.map((feature, index) => (
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
                          className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-200 mb-6 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <div className="space-y-3">
                          {feature.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + detailIndex * 0.1 + 0.4 }}
                              viewport={{ once: true }}
                              className="flex items-center text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}></div>
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Liquid glass bottom accent */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {securityFeatures.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/30 dark:bg-gray-600/30 backdrop-blur-sm"
              />
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <Card className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
            {/* Glass morphism overlay */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/10 via-transparent to-white/10 dark:from-gray-800/10 dark:to-gray-800/10 backdrop-blur-sm"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Security Track Record
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proven security measures protecting millions in assets
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    3+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Security Audits</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    $500K
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Bug Bounty Pool</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Monitoring</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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

export default Security 