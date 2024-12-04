"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ConfettiAnimation } from './confetti-animation'

const stats = [
  { label: 'Participants', value: 500, prefix: '+' },
  { label: 'Projects', value: 100, prefix: '+' },
  { label: 'Hours', value: 48, prefix: '' },
  { label: 'Prizes', value: 5, prefix: '₹', suffix: 'L+' },
]

export default function RegistrationCounter() {
  const [count, setCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const router = useRouter()

  useEffect(() => {
    const referral = new URLSearchParams(window.location.search).get('ref')
    if (referral) {
      console.log('Referred by:', referral)
    }
  }, [])

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const increment = 234 / (duration / 16) // 60 FPS

      let currentCount = 0
      const timer = setInterval(() => {
        currentCount += increment
        if (currentCount >= 234) {
          setCount(234)
          setShowConfetti(true)
          clearInterval(timer)
        } else {
          setCount(Math.floor(currentCount))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView])


  return (
    <>
      <ConfettiAnimation trigger={showConfetti} />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-background/60 dark:bg-background/40 backdrop-blur-md shadow-lg rounded-2xl mx-4 md:mx-auto max-w-5xl -mt-20 relative z-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-cyan-500 mb-2">
                {stat.prefix}{Math.floor((count / 234) * stat.value)}{stat.suffix}
              </div>
              <div className="text-xl text-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400" />
      </motion.div>
    </>
  )
}

