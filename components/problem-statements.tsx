'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const problems = [
  {
    title: "AI for Healthcare",
    description: "Develop an AI-powered solution to improve early disease detection and diagnosis in rural areas.",
    category: "Healthcare",
    difficulty: "Hard"
  },
  {
    title: "Smart Water Management",
    description: "Create an IoT-based system for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    difficulty: "Medium"
  },
  {
    title: "EdTech for Accessibility",
    description: "Design an educational platform that caters to students with different learning abilities and disabilities.",
    category: "Education",
    difficulty: "Medium"
  },
  {
    title: "Blockchain for Food Traceability",
    description: "Implement a blockchain solution to enhance transparency in the food supply chain.",
    category: "Agriculture",
    difficulty: "Hard"
  }
]

export default function ProblemStatements() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Problem Statements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{problem.title}</CardTitle>
                  <CardDescription>{problem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{problem.category}</Badge>
                    <Badge variant="outline">{problem.difficulty}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

