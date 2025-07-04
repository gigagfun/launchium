"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, DollarSign, Users, Shield, Copy, ExternalLink, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const PresalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const targetDate = new Date('2025-07-04T20:00:00Z').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const presaleDetails = [
    { label: "Hard Cap", value: "$50,000", icon: DollarSign },
    { label: "Soft Cap", value: "$25,000", icon: DollarSign },
    { label: "Minimum Purchase", value: "0.5 SOL", icon: Users },
    { label: "Maximum Purchase", value: "No limit", icon: Users },
    { label: "Accepted Currency", value: "SOL only", icon: Shield },
    { label: "Vesting", value: "No vesting - 100% unlock at TGE", icon: CheckCircle2 }
  ]

  const timeline = [
    { date: "July 4-9", event: "Presale period", status: "upcoming" },
    { date: "July 9-10", event: "Token calculation and distribution", status: "upcoming" },
    { date: "July 10, 20:00 UTC", event: "Raydium listing", status: "upcoming" }
  ]

  const participationMethods = [
    {
      title: "Via Website",
      description: "Visit launchium.app/presale → Connect wallet → Enter SOL amount → Confirm transaction",
      link: "launchium.app/presale"
    },
    {
      title: "Via Telegram",
      description: "Join @launchium → Use /presale command → Follow bot instructions",
      link: "@launchium"
    },
    {
      title: "Via Twitter",
      description: "Follow @launchium → Check pinned presale tweet → Click presale link",
      link: "@launchium"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header with blur transition */}
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
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            LNCHM Token Presale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Join the future of token launches
          </motion.p>
        </div>
        
        {/* Blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-orange-400/30 to-white dark:to-black backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8">Presale Starts In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <Card key={unit} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase">
                    {unit}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            July 4, 2025 20:00 UTC - July 9, 2025 20:00 UTC
          </p>
        </motion.div>

        {/* Presale Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">Presale Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presaleDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <detail.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {detail.label}
                    </h3>
                    <p className="text-lg font-bold gradient-text">
                      {detail.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">Timeline</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.date}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {item.event}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* How to Participate */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {participationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="gradient-text">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {method.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm flex-1">
                        {method.link}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(method.link, method.title)}
                      >
                        {copied === method.title ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Ready to Join the Presale?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Be part of the next generation token launch platform
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8 py-6 h-auto">
                  Join Presale
                </Button>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Presale starts July 4, 2025 at 20:00 UTC
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  )
}

export default PresalePage 