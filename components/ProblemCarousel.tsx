"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'

const problems = [
  {
    title: "AI for Healthcare",
    description: "Develop an AI-powered solution to improve early disease detection and diagnosis in rural areas.",
    category: "Healthcare",
    difficulty: "Hard",
    image: "/ai-healthcare.jpg",
    icon: "🏥"
  },
  {
    title: "Smart Water Management",
    description: "Create an IoT-based system for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    difficulty: "Medium",
    image: "/smart-water.jpg",
    icon: "💧"
  },
  {
    title: "EdTech for Accessibility",
    description: "Design an educational platform that caters to students with different learning abilities and disabilities.",
    category: "Education",
    difficulty: "Medium",
    image: "/edtech-accessibility.jpg",
    icon: "📚"
  },
  {
    title: "Blockchain for Food Traceability",
    description: "Implement a blockchain solution to enhance transparency in the food supply chain.",
    category: "Agriculture",
    difficulty: "Hard",
    image: "/blockchain-food.jpg",
    icon: "🌾"
  }
]

export default function ProblemCarousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setActiveIndex(([current,]) => [
      (current + newDirection + problems.length) % problems.length,
      newDirection
    ])
  }

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto h-[600px] px-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl aspect-[16/9]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <Card className="bg-background/80 backdrop-blur-sm border-cyan-500/20 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <Image
                      src={problems[activeIndex].image}
                      alt={problems[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-6xl">
                      {problems[activeIndex].icon}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                      {problems[activeIndex].title}
                    </h3>
                    <p className="text-lg text-foreground/80 mb-6">
                      {problems[activeIndex].description}
                    </p>
                    <div className="flex gap-4">
                      <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {problems[activeIndex].category}
                      </span>
                      <span className="px-4 py-2 rounded-full bg-foreground/5 text-foreground/80 border border-foreground/10">
                        {problems[activeIndex].difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Previous/Next buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-cyan-400 hover:text-cyan-300"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-cyan-400 hover:text-cyan-300"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {problems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex([index, index > activeIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-cyan-400' : 'bg-foreground/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

