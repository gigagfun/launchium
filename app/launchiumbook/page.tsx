"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Book, Clock, Users, Target, CheckCircle, Copy, Twitter, TrendingUp, Shield, Settings, Zap, AlertCircle, Rocket, BarChart3, Globe, Edit } from 'lucide-react'
import Image from 'next/image'

const LaunchiumBookPage = () => {
  const [copiedText, setCopiedText] = useState('')

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(''), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
              <Image 
                src="/logo.jpg" 
                alt="Launchium Logo" 
                width={80} 
                height={80} 
                className="rounded-full w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            LaunchiumBook
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Your Complete Guide to Token Launch Success
          </motion.p>
        </div>
        
        {/* Blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-orange-400/30 to-white dark:to-black backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Token Launch Guide Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Card className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Token Launch Guide
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Master the art of launching successful tokens with our comprehensive step-by-step guide
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Step-by-Step Twitter Launch */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Step 1: Prepare Your Launch */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Prepare Your Launch
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Token Name Guidelines */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Target className="w-5 h-5 text-blue-500" />
                        <span>Token Name Guidelines</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Be creative and memorable",
                        "Avoid copyrighted names",
                        "Check for existing tokens",
                        "Consider your target audience"
                      ].map((guideline, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{guideline}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Best Practices */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <span>Best Practices</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Launch during peak hours",
                        "Prepare marketing materials",
                        "Alert your community beforehand",
                        "Have a clear tokenomics plan"
                      ].map((practice, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{practice}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Step 2: Format Your Tweet */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Format Your Tweet
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Card className="bg-gray-900 text-green-400 border border-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Twitter className="w-5 h-5" />
                        <span className="font-semibold">Tweet Format</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard('@launchium Token-Name + $TICKER')}
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white text-sm transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span>{copiedText === '@launchium Token-Name + $TICKER' ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <code className="text-lg font-mono">
                      @launchium Token-Name + $TICKER
                    </code>
                    <div className="mt-4 text-sm text-green-300">
                      Example: @launchium MoonCoin + $MOON
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* Step 3: AI Validation Process */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    AI Validation Process
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    Our dual AI system (Anthropic Claude + GPT-4) checks for:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { icon: CheckCircle, label: "Proper formatting", color: "text-blue-500" },
                    { icon: Users, label: "Account eligibility", color: "text-green-500" },
                    { icon: Target, label: "Unique ticker symbol", color: "text-purple-500" },
                    { icon: Shield, label: "Non-spam content", color: "text-orange-500" },
                    { icon: AlertCircle, label: "Community safety", color: "text-red-500" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Card className="bg-white/80 dark:bg-gray-800/80 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {item.label}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Step 4: Post-Launch Actions */}
          <motion.div variants={itemVariants}>
            <Card className="border-2 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Post-Launch Actions
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Immediate Actions */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Zap className="w-5 h-5 text-yellow-500" />
                        <span>Immediate Actions</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Save your token contract address",
                        "Share the confirmation tweet",
                        "Update your profile with token info"
                      ].map((action, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{action}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Marketing Setup */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <span>Marketing Setup</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Create a Telegram/Discord group",
                        "Design token branding",
                        "Prepare content calendar",
                        "Engage with early supporters"
                      ].map((action, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{action}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Liquidity Management */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <BarChart3 className="w-5 h-5 text-green-500" />
                        <span>Liquidity Management</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {[
                        "Monitor trading volume",
                        "Track holder growth", 
                        "Watch for 55K market cap milestone",
                        "Prepare for AMM migration"
                      ].map((action, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{action}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Advanced Features */}
                  <Card className="bg-white/80 dark:bg-gray-800/80">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Settings className="w-5 h-5 text-purple-500" />
                        <span>Advanced Features</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Token Metadata Editing
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                        After launch, creators can:
                      </p>
                      {[
                        "Upload custom logo",
                        "Add website URL",
                        "Link social media channels", 
                        "Update token description"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.9 }}
                          className="flex items-start space-x-2"
                        >
                          <Edit className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                      <div className="mt-3 p-2 bg-purple-100 dark:bg-purple-900/30 rounded text-xs text-purple-700 dark:text-purple-300">
                        Access via: Dashboard → My Tokens → Edit Metadata
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Launch Your Token?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Follow this guide and start your token launch journey today. Join thousands of successful creators on Launchium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/launch"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                >
                  Launch Token Now
                </a>
                <a 
                  href="/presale"
                  className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
                >
                  Join Presale
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default LaunchiumBookPage 