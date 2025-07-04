"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Product: ['Platform', 'API', 'Documentation', 'Pricing'],
    Company: ['About', 'Team', 'Careers', 'Blog'],
    Resources: ['Whitepaper', 'Roadmap', 'Security', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/launchium', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/launchium', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/launchium', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@launchium.io', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Launchium. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">Made with ❤️ for the crypto community</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 