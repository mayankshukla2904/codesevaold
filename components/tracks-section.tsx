"use client"

import { motion } from 'framer-motion'
import { Code, Globe, Cpu, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AIMLAnimation, CybersecurityAnimation } from './track-animations'

const tracks = [
  { name: 'Web3 & Blockchain', icon: Globe, color: 'from-blue-400 to-blue-600', animation: null },
  { name: 'AI & Machine Learning', icon: Cpu, color: 'from-green-400 to-green-600', animation: AIMLAnimation },
  { name: 'Cybersecurity', icon: Shield, color: 'from-red-400 to-red-600', animation: CybersecurityAnimation },
  { name: 'Open Innovation', icon: Code, color: 'from-purple-400 to-purple-600', animation: null },
]

export default function TracksSection() {
  return (
    <section id="tracks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
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
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${track.color} text-white overflow-hidden h-full`}>
                <CardHeader className="p-6">
                  {track.animation ? (
                    <track.animation />
                  ) : (
                    <track.icon className="w-12 h-12 mb-4" />
                  )}
                  <CardTitle className="text-xl font-semibold">{track.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-white/80">
                    Innovate and build solutions in this cutting-edge domain.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

