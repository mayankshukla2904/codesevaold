"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const faqs = [
  {
    question: 'What is CodeSewa Hackathon?',
    answer: 'CodeSewa is a 48-hour hackathon where participants collaborate to create innovative solutions to real-world problems. It\'s an opportunity to learn, network, and potentially win exciting prizes.',
  },
  {
    question: 'Who can participate?',
    answer: 'CodeSewa is open to students, professionals, and anyone passionate about technology and problem-solving. Teams can consist of 2-4 members.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No, participation in CodeSewa Hackathon is completely free of charge.',
  },
  {
    question: 'What should I bring to the hackathon?',
    answer: 'Bring your laptop, charger, and any other devices you might need. We\'ll provide food, drinks, and a comfortable hacking space.',
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <CardTitle className="flex justify-between items-center text-lg">
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </CardTitle>
                </CardHeader>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <p className="text-foreground/80">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

