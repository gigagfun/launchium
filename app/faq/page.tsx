"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import Image from 'next/image'

const FAQPage = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const faqSections = [
    {
      id: "general",
      title: "General Questions",
      questions: [
        {
          q: "Do I need coding knowledge to use Launchium?",
          a: "No, Launchium is completely no-code. Just post on social media!"
        },
        {
          q: "Which blockchain does Launchium use?",
          a: "Solana - chosen for its speed, low costs, and scalability."
        },
        {
          q: "How much does it cost to launch a token?",
          a: "Only Solana network fees (~$0.01). No platform fees for launching."
        },
        {
          q: "Can I launch multiple tokens?",
          a: "Yes, up to 3 tokens per day per account. Limit resets at 24:00 UTC."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Questions",
      questions: [
        {
          q: "Can I modify my token after launch?",
          a: "No, tokens are immutable. You can only update metadata (logo, links)."
        },
        {
          q: "What happens to the liquidity?",
          a: "100% locked forever. No one can remove it."
        },
        {
          q: "How does the 55K market cap transition work?",
          a: "Automatic migration from Dynamic Curve to AMM. Trading continues seamlessly."
        },
        {
          q: "Can I run a presale for my token?",
          a: "This feature is coming in Q4 2025."
        }
      ]
    },
    {
      id: "business",
      title: "Business & Partnership Questions",
      questions: [
        {
          q: "Can businesses/brands use Launchium?",
          a: "Yes! Launchium is perfect for brands wanting to engage their community through tokens. Contact partnerships@launchium.app for enterprise features."
        },
        {
          q: "Is there an API for integration?",
          a: "Yes, full API access is available. See our API Documentation section."
        },
        {
          q: "Can I white-label Launchium?",
          a: "Enterprise white-label solutions are coming in Q1 2026. Join the waitlist at enterprise@launchium.app."
        },
        {
          q: "Are there volume discounts?",
          a: "High-volume creators may qualify for reduced fees. Contact support for details."
        }
      ]
    },
    {
      id: "security",
      title: "Security Questions",
      questions: [
        {
          q: "Has Launchium been audited?",
          a: "Yes, audits by CertiK, Hacken, and Quantstamp are scheduled for Q3 2025."
        },
        {
          q: "What happens if Launchium goes offline?",
          a: "Tokens continue trading normally. All tokens are decentralized on Solana blockchain."
        },
        {
          q: "Can Launchium freeze or control my token?",
          a: "No. Once created, tokens are completely decentralized with no admin controls."
        },
        {
          q: "Is my wallet safe?",
          a: "Yes. Launchium never has access to your private keys or wallet funds."
        }
      ]
    },
    {
      id: "comparison",
      title: "Platform Comparison Questions",
      questions: [
        {
          q: "Why is Launchium better than Pump.fun?",
          a: "Higher success rate (5-10% vs 0.01%), AI spam protection, multi-platform support, creator rewards, and LNCHM token benefits."
        },
        {
          q: "Does Launchium have a mobile app like Believe?",
          a: "Yes, coming Q3 2025 with advanced features surpassing current competitors."
        },
        {
          q: "What makes LNCHM token valuable?",
          a: "Weekly buy & burn mechanism, governance rights, platform fee sharing, and utility features create sustainable value."
        }
      ]
    }
  ]

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
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Everything you need to know about Launchium
          </motion.p>
        </div>
        
        {/* Blur transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-orange-400/30 to-white dark:to-black backdrop-blur-sm border-0"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        {faqSections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
          >
            <Card className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 shadow-xl">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="gradient-text text-xl">{section.title}</span>
                  </div>
                  {openSections[section.id] ? (
                    <ChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </CardTitle>
              </CardHeader>
              
              <AnimatePresence>
                {openSections[section.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        {section.questions.map((qa, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-4 border-gradient-to-b from-primary to-accent pl-6 py-2"
                          >
                            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                              Q: {qa.q}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              A: {qa.a}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Can't find the answer you're looking for? Reach out to our support team.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:support@launchium.app"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Support
                </a>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  support@launchium.app
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQPage 