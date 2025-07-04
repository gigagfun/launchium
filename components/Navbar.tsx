"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
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
        ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-white/20" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3">
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

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="https://launchium.gitbook.io/launchium-user-guide/launchium-docs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                Docs
              </a>
              <a 
                href="#presale" 
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors duration-200 font-medium"
              >
                Presale
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
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <Button 
              variant="gradient" 
              size="lg"
              className="hidden sm:inline-flex"
            >
              Launch Token
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 