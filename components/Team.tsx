"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP Engineering at Coinbase, 15+ years blockchain experience",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/alexchen",
        twitter: "https://twitter.com/alexchen",
        github: "https://github.com/alexchen"
      },
      expertise: ["Blockchain Architecture", "Strategic Leadership", "Product Development"]
    },
    {
      name: "Sarah Kumar",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google AI researcher, PhD in Machine Learning from Stanford",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/sarahkumar",
        twitter: "https://twitter.com/sarahkumar",
        github: "https://github.com/sarahkumar"
      },
      expertise: ["AI/ML Engineering", "Smart Contracts", "System Architecture"]
    },
    {
      name: "Marcus Johnson",
      role: "Head of Security",
      bio: "Former lead security auditor at Trail of Bits, discovered 200+ vulnerabilities",
      image: "/api/placeholder/300/300", 
      social: {
        linkedin: "https://linkedin.com/in/marcusjohnson",
        twitter: "https://twitter.com/marcusjohnson",
        github: "https://github.com/marcusjohnson"
      },
      expertise: ["Security Auditing", "Smart Contract Security", "Penetration Testing"]
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      bio: "Former Product Lead at Uniswap, expert in DeFi user experience",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/elenarodriguez",
        twitter: "https://twitter.com/elenarodriguez"
      },
      expertise: ["Product Strategy", "UX Design", "DeFi Protocols"]
    },
    {
      name: "David Park",
      role: "Lead Developer",
      bio: "Solana core contributor, built high-performance DeFi protocols",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/davidpark",
        github: "https://github.com/davidpark"
      },
      expertise: ["Solana Development", "DeFi Protocols", "Performance Optimization"]
    },
    {
      name: "Lisa Wang",
      role: "Head of Business Development",
      bio: "Former partnerships lead at Binance, 10+ years in crypto business development",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/lisawang",
        twitter: "https://twitter.com/lisawang"
      },
      expertise: ["Strategic Partnerships", "Business Development", "Market Expansion"]
    }
  ]

  const advisors = [
    {
      name: "Dr. Michael Thompson",
      role: "Technical Advisor",
      bio: "Professor of Computer Science at MIT, blockchain research pioneer",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Jennifer Adams",
      role: "Strategic Advisor",
      bio: "Former Partner at Andreessen Horowitz, crypto investment veteran",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Robert Kim",
      role: "Regulatory Advisor",
      bio: "Former SEC official, expert in crypto regulations and compliance",
      image: "/api/placeholder/300/300"
    }
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            World-Class Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Led by industry veterans with proven track records at top-tier tech and crypto companies
          </p>
        </motion.div>

        {/* Core Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-heading font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
          >
            Core Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative overflow-hidden">
                      <div 
                        className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 
                                   group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 
                                   flex items-center justify-center"
                      >
                        <div className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <span className="text-white font-heading font-bold text-2xl">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin}
                              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <Linkedin className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {member.social.twitter && (
                            <a 
                              href={member.social.twitter}
                              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <Twitter className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {member.social.github && (
                            <a 
                              href={member.social.github}
                              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {member.name}
                      </h4>
                      <p className="text-primary font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-heading font-bold text-center text-gray-900 dark:text-gray-100 mb-12"
          >
            Strategic Advisors
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Profile Image */}
                    <div className="relative overflow-hidden">
                      <div 
                        className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 
                                   group-hover:from-secondary/20 group-hover:to-primary/20 transition-all duration-500 
                                   flex items-center justify-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-heading font-bold text-lg">
                            {advisor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="p-6">
                      <h4 className="text-lg font-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {advisor.name}
                      </h4>
                      <p className="text-secondary font-semibold mb-3">
                        {advisor.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {advisor.bio}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                We are always looking for exceptional talent to join our team. 
                If you are passionate about blockchain technology and want to shape the future of token launches, we would love to hear from you.
              </p>
              <a 
                href="mailto:careers@launchium.io"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View Open Positions
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Team 