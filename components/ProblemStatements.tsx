import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

const problems = [
  {
    title: "AI for Healthcare",
    description: "Develop an AI-powered solution to improve early disease detection and diagnosis in rural areas.",
    category: "Healthcare",
    difficulty: "Hard",
    icon: "🏥"
  },
  {
    title: "Smart Water Management",
    description: "Create an IoT-based system for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    difficulty: "Medium",
    icon: "💧"
  },
  {
    title: "EdTech for Accessibility",
    description: "Design an educational platform that caters to students with different learning abilities and disabilities.",
    category: "Education",
    difficulty: "Medium",
    icon: "📚"
  },
  {
    title: "Blockchain for Food Traceability",
    description: "Implement a blockchain solution to enhance transparency in the food supply chain.",
    category: "Agriculture",
    difficulty: "Hard",
    icon: "🌾"
  }
]

export default function ProblemStatements() {
  return (
    <section id="problems" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
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
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-primary">
                    <span className="text-4xl mr-2">{problem.icon}</span>
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{problem.description}</p>
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

