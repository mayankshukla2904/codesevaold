"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Gift, Trophy } from 'lucide-react'
import { useRef } from 'react'

const prizes = [
  {
    place: '1st Place',
    prize: '₹1,00,000',
    icon: Trophy,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    place: '2nd Place',
    prize: '₹75,000',
    icon: Award,
    color: 'from-gray-400 to-gray-600',
  },
  {
    place: '3rd Place',
    prize: '₹50,000',
    icon: Gift,
    color: 'from-orange-400 to-orange-600',
  },
]

export default function PrizesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

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
              className="bg-gradient-to-br from-background to-background/50 rounded-lg p-6 text-center shadow-lg border border-primary/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ y: y }}
            >
              <div className={`inline-block p-3 rounded-full bg-gradient-to-br ${prize.color} mb-4`}>
                <prize.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{prize.place}</h3>
              <p className="text-3xl font-extrabold text-primary">
                {prize.prize}
              </p>
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

