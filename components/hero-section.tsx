"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TypeAnimation } from 'react-type-animation'
import { Cpu, Heart, Code } from 'lucide-react'
import ParticlesBackground from './particles-background'
import MiniRobots from './mini-robots'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/10">
      <ParticlesBackground />
      <MiniRobots />
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Heart className="text-red-500 animate-pulse" />
          <span className="text-primary font-medium">A Charity Hackathon</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 dark:from-cyan-300 dark:to-cyan-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CodeSeva
        </motion.h1>

        <motion.div
          className="text-2xl md:text-4xl mb-8 text-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Code for Social Impact',
              2000,
              'Innovate for Change',
              2000,
              'Build for Better Tomorrow',
              2000
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-600 dark:hover:bg-cyan-700 text-lg px-8 py-6 rounded-full"
          >
            Register Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400/10"
          >
            View Problem Statements
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <motion.div
            className="flex items-center gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Cpu className="text-cyan-500" />
            <span className="font-medium">36-Hour Hackathon</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <Code className="text-cyan-500" />
            <span className="font-medium">Delhi, India</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <Heart className="text-red-500" />
            <span className="font-medium">For a Cause</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

