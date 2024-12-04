"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Gift, Trophy } from 'lucide-react'
import { useRef } from 'react'
import confetti from 'canvas-confetti'

const prizes = [
  {
    place: '1st Place',
    prize: '₹1,00,000',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600',
    delay: 0
  },
  {
    place: '2nd Place',
    prize: '₹75,000',
    icon: Award,
    color: 'from-cyan-400 to-cyan-600',
    delay: 0.2
  },
  {
    place: '3rd Place',
    prize: '₹50,000',
    icon: Gift,
    color: 'from-cyan-300 to-cyan-500',
    delay: 0.4
  },
]

export default function PrizesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handlePrizeClick = (index: number) => {
    const colors = index === 0 
      ? ['#FFD700', '#FFA500'] 
      : index === 1 
        ? ['#06B6D4', '#0891B2'] 
        : ['#22D3EE', '#06B6D4']

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    })
  }

  return (
    <section id="prizes" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Exciting Prizes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prize.delay }}
              viewport={{ once: true }}
              style={{ y }}
              onClick={() => handlePrizeClick(index)}
            >
              <motion.div
                className="bg-gradient-to-br from-background to-background/50 rounded-lg p-6 text-center shadow-lg border border-primary/20 h-full"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`inline-block p-3 rounded-full bg-gradient-to-br ${prize.color} mb-4 transform-gpu transition-transform hover:rotate-12`}>
                  <prize.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{prize.place}</h3>
                <motion.p 
                  className="text-3xl font-extrabold text-cyan-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {prize.prize}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center mt-12 text-foreground/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Additional prizes for category winners and special mentions!
        </motion.p>
      </div>
    </section>
  )
}

