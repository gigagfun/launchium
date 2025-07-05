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
  const [solPrice, setSolPrice] = useState<number>(0)
  const [raisedAmountUSD, setRaisedAmountUSD] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lastUpdate, setLastUpdate] = useState<string>('')

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

  // Fetch raised amount and SOL price
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Add cache-busting timestamp
        const timestamp = Date.now()
        
        // Fetch SOL balance with cache-busting
        const balanceResponse = await fetch(`/api/solana-balance-v2?t=${timestamp}`, {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        })
        
        if (!balanceResponse.ok) {
          throw new Error(`Balance API failed: ${balanceResponse.status}`)
        }
        
        const balanceData = await balanceResponse.json()
        console.log('Fetched balance data:', balanceData)
        
        // Validate balance data
        if (typeof balanceData.balance !== 'number' || balanceData.balance < 0) {
          throw new Error('Invalid balance data received')
        }
        
        setRaisedAmount(balanceData.balance)

        // Fetch SOL price from CoinGecko with cache-busting and timeout
        let currentSolPrice = solPrice || 148; // Fallback price if no previous price
        
        try {
          const priceController = new AbortController()
          const priceTimeout = setTimeout(() => priceController.abort(), 5000) // 5 second timeout
          
          const priceResponse = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&t=${timestamp}`, {
            headers: {
              'Cache-Control': 'no-cache'
            },
            signal: priceController.signal
          })
          
          clearTimeout(priceTimeout)
          
          if (priceResponse.ok) {
            const priceData = await priceResponse.json()
            console.log('Fetched price data:', priceData)
            
            // Validate price data
            if (priceData.solana && typeof priceData.solana.usd === 'number') {
              currentSolPrice = priceData.solana.usd
              setSolPrice(currentSolPrice)
            } else {
              console.warn('Invalid price data, using fallback')
            }
          } else {
            console.warn('Price API failed, using fallback price')
          }
        } catch (priceError) {
          console.warn('Price fetch failed, using fallback price:', priceError)
          // Use existing price or fallback
        }
        
        // Calculate USD value
        const usdValue = balanceData.balance * currentSolPrice
        console.log(`Balance: ${balanceData.balance} SOL, Price: $${currentSolPrice}, USD Value: $${usdValue}`)
        setRaisedAmountUSD(usdValue)
        setIsLoading(false)
        setLastUpdate(new Date().toLocaleTimeString())
        
      } catch (error) {
        console.error('Error fetching data:', error)
        
        // Don't reset to 0 if we already have valid data
        // Only reset if we have no data at all
        if (raisedAmount === 0 && raisedAmountUSD === 0) {
          console.log('No previous data, keeping zeros')
        } else {
          console.log('Keeping previous data due to fetch error')
        }
      }
    }

    fetchData()
    // Update every 15 seconds for more frequent updates
    const interval = setInterval(fetchData, 15000)

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

        {/* Raised Amount with Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Presale Progress</h3>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="relative">
                  {/* Main Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 mb-4 relative overflow-hidden shadow-inner">
                    <motion.div 
                      className="bg-gradient-to-r from-primary via-orange-500 to-accent h-8 rounded-full relative overflow-hidden"
                      initial={{ width: "2%" }}
                      animate={{ 
                        width: `${Math.max(Math.min((raisedAmountUSD / 50000) * 100, 100), 2)}%` 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                      
                      {/* Progress indicator dot */}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
                    </motion.div>
                    
                    {/* Soft Cap Marker at 50% */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-1 bg-yellow-500 shadow-lg"></div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-300 dark:border-yellow-700">
                      Soft Cap
                    </div>
                  </div>
                  
                  {/* Labels */}
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">$0</span>
                    <span className="font-bold text-yellow-600 dark:text-yellow-400">$25,000</span>
                    <span className="font-medium">$50,000</span>
                  </div>
                </div>
                
                {/* Progress Percentage */}
                <div className="text-center mb-4">
                  <motion.span 
                    className="text-lg font-bold text-gray-800 dark:text-gray-200"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {((raisedAmountUSD / 50000) * 100).toFixed(1)}% Complete
                  </motion.span>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    ${(50000 - raisedAmountUSD).toLocaleString('en-US', { maximumFractionDigits: 0 })} remaining to hard cap
                  </div>
                </div>
              </div>

              {/* Current Amount */}
              <div className="text-center">
                <motion.div 
                  className="text-5xl font-bold gradient-text mb-3"
                  key={raisedAmountUSD}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ${raisedAmountUSD.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {raisedAmount.toFixed(2)} SOL raised
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Loading real-time data...</span>
                    </div>
                  ) : (
                    <>
                      Updates every 15 seconds • SOL Price: ${solPrice.toFixed(2)}
                      {lastUpdate && <span className="ml-2">• Last: {lastUpdate}</span>}
                    </>
                  )}
                </div>
              </div>

              {/* Soft Cap Achievement */}
              {raisedAmountUSD >= 25000 && (
                <div className="mt-6 inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>🎉 Soft Cap Reached!</span>
                </div>
              )}
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