"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  { label: 'Participants', value: 500, prefix: '+' },
  { label: 'Projects', value: 100, prefix: '+' },
  { label: 'Hours', value: 48, prefix: '' },
  { label: 'Prizes', value: 5, prefix: '₹', suffix: 'L+' },
]

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-xl text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedStat({ value, prefix = '', suffix = '' }: AnimatedStatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().substring(0,3))
    if (start === end) return;

    const totalMilSecDur = 2000;
    const incrementTime = (totalMilSecDur / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime);

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-4xl font-bold text-primary-foreground mb-2">
      {prefix}{count}{suffix}
    </div>
  )
}

