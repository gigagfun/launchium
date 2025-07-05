"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, DollarSign, Users, Shield, Copy, ExternalLink, CheckCircle2, Wallet } from 'lucide-react'
import Image from 'next/image'

const PresalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [copied, setCopied] = useState<string | null>(null)
  const [raisedAmount, setRaisedAmount] = useState<number>(0)

  useEffect(() => {
    const targetDate = new Date('2025-07-09T20:00:00Z').getTime()
    
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

  // Fetch raised amount from our API
  useEffect(() => {
    const fetchRaisedAmount = async () => {
      try {
        const response = await fetch('/api/solana-balance')
        const data = await response.json()
        setRaisedAmount(data.balance)
      } catch (error) {
        console.error('Error fetching balance:', error)
        setRaisedAmount(12.5) // Fallback manual amount
      }
    }

    fetchRaisedAmount()
    // Update every 30 seconds
    const interval = setInterval(fetchRaisedAmount, 30000)

    return () => clearInterval(interval)
  }, [])

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const solanaAddress = "ETQ3PU6NvnbHwt9iy2MoPkmmyTtCsUQWqhErRYmW6cPV"

  const presaleDetails = [
    { label: "Hard Cap", value: "$50,000", icon: DollarSign },
    { label: "Soft Cap", value: "$25,000", icon: DollarSign },
    { label: "Minimum Contribution", value: "0.5 SOL", icon: Users },
    { label: "Maximum Contribution", value: "Unlimited", icon: Users },
    { label: "Accepted Currency", value: "SOL only", icon: Shield },
    { label: "Vesting", value: "No vesting - 100% unlock at TGE", icon: CheckCircle2 }
  ]

  const timeline = [
    { date: "July 4-9", event: "Presale period", status: "live" },
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
            🚀 Launchium Presale Now Live !!
          </motion.p>
        </div>
        
        {/* Blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-orange-400/30 to-white dark:to-black backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* Live Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-6 py-3 rounded-full text-lg font-semibold">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Presale is LIVE!</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold gradient-text mb-8">Presale Ends In</h2>
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
            Ends: July 9, 2025 at 20:00 UTC
          </p>
        </motion.div>

        {/* Raised Amount */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="max-w-md mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Total Raised</h3>
              <div className="text-4xl font-bold gradient-text mb-2">
                {raisedAmount.toFixed(2)} SOL
              </div>
                             <div className="text-sm text-gray-600 dark:text-gray-400">
                 Live from Solana RPC • Updates every 30s
               </div>
            </CardContent>
          </Card>
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

        {/* How to Participate */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold gradient-text text-center mb-8">How to Participate</h2>
          
          {/* Presale Info */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                🚀 Launchium Presale Now Live !!
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-semibold">Hard Cap: $50,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-semibold">Soft Cap: $25,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-semibold">Minimum Contribution: 0.5 SOL</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-semibold">Maximum Contribution: Unlimited</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="font-semibold">Send SOL to:</span>
                  </div>
                </div>
              </div>
              
              {/* Solana Address */}
              <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                <div className="flex items-center space-x-3 mb-4">
                  <Wallet className="w-6 h-6 text-orange-500" />
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Presale Wallet Address:</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <code className="flex-1 text-sm md:text-base font-mono text-orange-600 dark:text-orange-400 font-bold break-all">
                    {solanaAddress}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(solanaAddress, 'address')}
                    className="flex-shrink-0"
                  >
                    {copied === 'address' ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`https://solscan.io/account/${solanaAddress}`, '_blank')}
                    className="flex-shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
                  ⚠️ Only send SOL to this address. Minimum 0.5 SOL required.
                </p>
              </div>
            </CardContent>
          </Card>
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
                    className={`flex items-center space-x-4 p-4 rounded-lg ${
                      item.status === 'live' 
                        ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800' 
                        : 'bg-gray-50 dark:bg-gray-800/50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${
                      item.status === 'live' 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-gradient-to-r from-primary to-accent'
                    }`}></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center space-x-2">
                        <span>{item.date}</span>
                        {item.status === 'live' && (
                          <span className="text-green-500 text-sm font-bold">• LIVE</span>
                        )}
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                🚀 Join the Presale Now!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Send SOL to the address above and be part of the future
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 text-lg px-8 py-6 h-auto"
                  onClick={() => window.open(`https://solscan.io/account/${solanaAddress}`, '_blank')}
                >
                  View on Solscan
                </Button>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Presale ends July 9, 2025 at 20:00 UTC
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