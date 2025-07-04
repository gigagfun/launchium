"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-xl border-b border-white/20" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo.jpg" 
                alt="Launchium Logo" 
                width={32} 
                height={32} 
                className="rounded-full"
              />
              <span className="text-2xl font-heading font-bold gradient-text">
                Launchium
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="https://launchium.gitbook.io/launchium" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                Docs
              </a>
              <a 
                href="/launchiumbook" 
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                LaunchiumBook
              </a>
              <a 
                href="/faq" 
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                FAQ
              </a>
              <a 
                href="https://x.com/launchium" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                X
              </a>
            </div>
          </div>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                onClick={() => window.open('/presale', '_blank')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Presale
              </Button>
              
              {/* Enhanced Create Token Button */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-sm opacity-20 animate-pulse"></div>
                <Button 
                  onClick={() => window.open('/launch', '_blank')}
                  variant="gradient" 
                  className="relative shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Create Token
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-6 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-lg border border-white/20 shadow-xl mx-4 w-auto"
          >
            <div className="px-4 pt-4 pb-2 space-y-4">
              <a 
                href="https://launchium.gitbook.io/launchium" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Docs
              </a>
              <a 
                href="/launchiumbook" 
                className="block text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                LaunchiumBook
              </a>
              <a 
                href="/faq" 
                className="block text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="https://x.com/launchium" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                X
              </a>
              <a 
                href="/presale" 
                className="block text-primary hover:text-primary/80 transition-colors duration-200 font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Presale
              </a>
              <a 
                href="/launch" 
                className="block text-primary hover:text-primary/80 transition-colors duration-200 font-bold text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Launch Token
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 