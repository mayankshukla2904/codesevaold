"use client"

import { motion } from 'framer-motion'
import { Code, Globe, Cpu, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tracks = [
  {
    name: 'Web3 & Blockchain',
    icon: Globe,
    color: 'from-cyan-400 to-cyan-600',
    description: 'Explore decentralized technologies and build the future of the web.',
    gradient: 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5'
  },
  {
    name: 'AI & Machine Learning',
    icon: Cpu,
    color: 'from-cyan-300 to-cyan-500',
    description: 'Develop intelligent systems that can learn and adapt.',
    gradient: 'bg-gradient-to-br from-cyan-400/10 to-cyan-400/5'
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-cyan-200 to-cyan-400',
    description: 'Protect digital assets and create secure systems for a safer internet.',
    gradient: 'bg-gradient-to-br from-cyan-300/10 to-cyan-300/5'
  },
  {
    name: 'Open Innovation',
    icon: Code,
    color: 'from-cyan-100 to-cyan-300',
    description: 'Bring your unique ideas to life and solve real-world problems.',
    gradient: 'bg-gradient-to-br from-cyan-200/10 to-cyan-200/5'
  },
]

export default function HackathonTracks() {
  return (
    <div id="tracks" className="py-20 bg-background dark:bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hackathon Tracks
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${track.gradient} backdrop-blur-sm border-cyan-500/20`}>
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <track.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-foreground">{track.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    {track.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

