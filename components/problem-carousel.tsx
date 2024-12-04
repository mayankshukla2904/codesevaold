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
    image: "/placeholder.svg?height=300&width=400",
    icon: "🏥"
  },
  {
    title: "Smart Water Management",
    description: "Create an IoT-based system for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    difficulty: "Medium",
    image: "/placeholder.svg?height=300&width=400",
    icon: "💧"
  },
  {
    title: "EdTech for Accessibility",
    description: "Design an educational platform that caters to students with different learning abilities and disabilities.",
    category: "Education",
    difficulty: "Medium",
    image: "/placeholder.svg?height=300&width=400",
    icon: "📚"
  },
  {
    title: "Blockchain for Food Traceability",
    description: "Implement a blockchain solution to enhance transparency in the food supply chain.",
    category: "Agriculture",
    difficulty: "Hard",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🌾"
  }
]

export default function ProblemCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + problems.length) % problems.length)
  }

  return (
    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="w-full"
        >
          <Card className="w-full overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={problems[currentIndex].image}
                  alt={problems[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{problems[currentIndex].title}</h2>
                    <p className="text-sm text-gray-500">{problems[currentIndex].category}</p>
                  </div>
                  <span className="text-xl">{problems[currentIndex].icon}</span>
                </div>
                <p className="text-gray-700">{problems[currentIndex].description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {problems.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 rounded-full p-0 ${
              currentIndex === index ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

