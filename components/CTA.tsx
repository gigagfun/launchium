"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, DollarSign, Users, Target } from 'lucide-react'

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2024-07-04T00:00:00').getTime()

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const presaleStats = [
    {
      icon: Calendar,
      label: "Presale Period",
      value: "July 4 - 9, 2024",
      desc: "6 days only"
    },
    {
      icon: DollarSign,
      label: "Hard Cap",
      value: "$250K",
      desc: "Maximum raise"
    },
    {
      icon: Target,
      label: "Price",
      value: "$0.005",
      desc: "Early bird pricing"
    },
    {
      icon: Users,
      label: "Min Purchase",
      value: "$100",
      desc: "Accessible to all"
    }
  ]

  const features = [
    "25% tokens at TGE, 75% over 3 months",
    "Early bird pricing at $0.005",
    "35% of total supply available",
    "Exclusive access to platform beta",
    "Priority customer support"
  ]

  return (
    <section id="presale" className="relative py-20 overflow-hidden">
      {/* Background Gradient with soft transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/80 backdrop-blur-sm"></div>
      
      {/* Soft overlay for better blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      
      {/* Background Pattern with reduced opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='7' r='1'/%3E%3Ccircle cx='7' cy='37' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Presale July 4 - 9
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join the revolution and secure your LNCHM tokens at the best price
          </p>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="text-sm text-white/80">Days</div>
            </div>
            <div className="text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm text-white/80">Hours</div>
            </div>
            <div className="text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm text-white/80">Minutes</div>
            </div>
            <div className="text-white/60">:</div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm text-white/80">Seconds</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Presale Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {presaleStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-white/80 mb-1">{stat.label}</div>
              <div className="text-xl font-heading font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-white/60">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features and CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
              Presale Benefits
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto group"
              >
                Buy LNCHM Tokens
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Presale Progress</span>
                <span className="text-white font-semibold">Not Started</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                <motion.div 
                  className="bg-white h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "0%" }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                ></motion.div>
              </div>
              <div className="flex justify-between text-sm text-white/80">
                <span>$0 raised</span>
                <span>$250K goal</span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
              <p className="text-white/80 text-sm text-center">
                🔒 All transactions are secured by multi-signature wallets and smart contracts audited by leading security firms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA 