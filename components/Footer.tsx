"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Mail, Send } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: ['Platform', 'API', 'Documentation', 'Pricing'],
    Resources: ['Roadmap', 'Security', 'FAQ'],
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/launchium', label: 'Twitter' },
    { icon: Send, href: 'https://t.me/launchium', label: 'Telegram' },
    { icon: Mail, href: 'mailto:support@launchium.app', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
                Launchium
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                Revolutionizing token launches with AI-powered automation. 
                Launch your token in 0-60 seconds.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  Security
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Developers</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://launchium.gitbook.io/launchium/getting-started" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://launchium.gitbook.io/launchium/api-documentation" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  API
                </a>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">
                  Pricing <span className="text-sm text-gray-500">(Coming Soon)</span>
                </span>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/launchium" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/launchium" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Launchium. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">Made with Launchium Team for the crypto community</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 