"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProblemSolution = () => {
  const problems = [
    "89% of token launches fail within first month",
    "Complex smart contract development required",
    "High technical barriers prevent innovation",
    "Expensive audit processes delay launches",
    "Limited market reach for new projects"
  ]

  const solutions = [
    "AI-powered success prediction and optimization",
    "No-code token creation in under 47 seconds",
    "Simplified interface for non-technical users",
    "Built-in security audits and best practices",
    "Integrated marketing and community tools"
  ]

  return (
    <section id="problem-solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            The Revolution Starts Here
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Traditional token launches are broken. We are fixing them with AI-powered innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100">
                    The Problem
                  </h3>
                </div>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                      <p className="text-gray-700 dark:text-gray-300">{problem}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-gray-100">
                    Our Solution
                  </h3>
                </div>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        className="flex-shrink-0"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      </motion.div>
                      <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
              How It Works
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Launch your token in 3 simple steps - no coding required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Post on Social Media",
                description: "Simply tweet or post about your token idea. Our AI will analyze your content automatically.",
                icon: "💬",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "AI Creates Your Token",
                description: "Our advanced AI generates the smart contract, metadata, and deploys to Solana mainnet.",
                icon: "🤖",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Token Goes Live",
                description: "Your token is immediately tradeable with automatic liquidity and verified metadata.",
                icon: "🚀",
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting line for desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 z-0"></div>
                )}
                
                <Card className="relative z-10 text-center p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-0">
                    {/* Step number */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-heading font-bold text-xl">{step.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4">{step.icon}</div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-30 animate-pulse"></div>
              <Button 
                onClick={() => window.open('/launch', '_blank')}
                variant="gradient" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto relative shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Token Journey
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolution 