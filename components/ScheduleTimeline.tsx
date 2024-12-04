"use client"

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

const scheduleData = {
  "21st February 2025": [
    { time: "9:00 am", event: "Entry" },
    { time: "10:00 am", event: "Breakfast" },
    { time: "10:45 am", event: "Hacking" },
    { time: "11:30 am", event: "Coding Workshop" },
    { time: "13:30 pm", event: "Lunch+Dance" },
    { time: "16:00 pm", event: "Mentoring R1" },
    { time: "20:00 pm", event: "Dinner" },
    { time: "00:00 am", event: "Midnight DJ" },
  ],
  "22nd February 2025": [
    { time: "06:00 am", event: "Morning Tea" },
    { time: "08:30 am", event: "Breakfast" },
    { time: "11:00 am", event: "Mentoring R2" },
    { time: "13:00 pm", event: "Lunch" },
    { time: "15:00 pm", event: "Result Declaration (top 15)" },
    { time: "16:30 pm", event: "Judgement Round begins" },
    { time: "18:30 pm", event: "Winner Declaration" },
  ]
}

export default function ScheduleTimeline() {
  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Schedule
        </motion.h2>

        <div className="relative">
          {/* Dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full w-full border-l-2 border-dashed border-cyan-500/50"></div>
          </div>

          <div className="space-y-24">
            {Object.entries(scheduleData).map(([date, events], dayIndex) => (
              <div key={date} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: dayIndex * 0.2 }}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-full w-max mx-auto mb-12 relative z-10"
                >
                  {date}
                </motion.div>

                <div className="space-y-12">
                  {events.map((event, index) => (
                    <motion.div
                      key={event.time}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (dayIndex * 0.2) }}
                      className={cn(
                        "flex items-center gap-8",
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      )}
                    >
                      <div className={cn(
                        "w-1/2 flex",
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      )}>
                        <div className="bg-gray-900/80 backdrop-blur-sm p-4 rounded-lg max-w-sm w-full hover:bg-gray-900/90 transition-colors">
                          <div className="text-xl font-bold text-cyan-400">{event.time}</div>
                          <div className="text-white/90">{event.event}</div>
                        </div>
                      </div>

                      <div className="relative w-4 h-4">
                        <div className="absolute w-4 h-4 bg-cyan-500 rounded-full"></div>
                        <div className="absolute w-4 h-4 bg-cyan-500 rounded-full animate-ping"></div>
                      </div>

                      <div className="w-1/2"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

