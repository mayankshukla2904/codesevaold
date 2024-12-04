'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle} from '@/components/ui/card'

const scheduleItems = [
  { time: '9:00 AM', event: 'Registration and Check-in' },
  { time: '10:00 AM', event: 'Opening Ceremony' },
  { time: '11:00 AM', event: 'Hacking Begins' },
  { time: '1:00 PM', event: 'Lunch Break' },
  { time: '6:00 PM', event: 'Dinner' },
  { time: '12:00 AM', event: 'Midnight Snack' },
  { time: '9:00 AM', event: 'Breakfast' },
  { time: '11:00 AM', event: 'Hacking Ends' },
  { time: '12:00 PM', event: 'Judging Begins' },
  { time: '3:00 PM', event: 'Closing Ceremony and Awards' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Schedule
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{item.event}</span>
                    <span className="text-blue-600">{item.time}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

