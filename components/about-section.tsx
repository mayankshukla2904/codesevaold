"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About CodeSeva</h2>
          <p className="text-xl text-foreground/80">Empowering Innovation for a Better Tomorrow</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-background p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/80">
                CodeSeva aims to bring together talented developers, designers, and innovators to create solutions that address pressing social issues. We believe in the power of technology to drive positive change in our communities.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ y }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Join the Tech Revolution</h3>
            <p className="text-foreground/80 mb-6">
              CodeSeva is more than just a hackathon; it&apos;s a movement to drive positive change through technology. 
              Organized by Geek Room, this charitable hackathon brings together the brightest minds to solve real-world problems 
              and create innovative solutions that can make a difference in our communities and beyond.
            </p>
            <p>It&apos;s a great day!</p>
            <ul className="space-y-4">
              {[
                "48 hours of non-stop innovation",
                "Mentorship from industry experts",
                "Exciting prizes and networking opportunities",
                "A chance to turn your ideas into reality",
                "All proceeds go to charitable causes"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-foreground/80 space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="h-2 w-2 bg-cyan-400 rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

