"use client"

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import gsap from 'gsap'

interface RobotProps {
  id: string
  position?: { x: number; y: number }
}

const Robot1 = ({  position }: RobotProps) => {
  const controls = useAnimation()
  const x = useMotionValue(position?.x || 0)
  const y = useMotionValue(position?.y || 0)
  const eyeRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (eyeRef.current) {
      gsap.to(eyeRef.current, {
        scaleY: 0.3,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        repeatDelay: 2
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={controls}
      style={{ x, y }}
      transition={{ type: "spring", damping: 20 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <motion.rect
          x="5"
          y="5"
          width="30"
          height="25"
          rx="5"
          fill="currentColor"
          className="text-primary"
        />
        <circle
          ref={eyeRef}
          cx="15"
          cy="15"
          r="3"
          fill="white"
        />
        <circle
          cx="25"
          cy="15"
          r="3"
          fill="white"
        />
        <rect x="12" y="22" width="16" height="2" fill="white" />
        <motion.rect
          x="8"
          y="30"
          width="8"
          height="5"
          fill="currentColor"
          animate={{ rotate: [-10, 10] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.rect
          x="24"
          y="30"
          width="8"
          height="5"
          fill="currentColor"
          animate={{ rotate: [10, -10] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </motion.div>
  )
}

const Robot2 = ({  position }: RobotProps) => {
  const controls = useAnimation()
  const x = useMotionValue(position?.x || 0)
  const y = useMotionValue(position?.y || 0)
  const bodyRef = useRef<SVGRectElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      gsap.to(bodyRef.current, {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center"
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={controls}
      style={{ x, y }}
      transition={{ type: "spring", damping: 20 }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <motion.circle
          cx="20"
          cy="15"
          r="10"
          fill="currentColor"
          className="text-primary"
        />
        <circle cx="16" cy="12" r="2" fill="white" />
        <circle cx="24" cy="12" r="2" fill="white" />
        <path
          d="M16 18 Q20 22 24 18"
          stroke="white"
          fill="none"
          strokeWidth="2"
        />
        <motion.rect
          ref={bodyRef}
          x="10"
          y="25"
          width="20"
          height="10"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  )
}

export default function MiniRobots() {
  const containerRef = useRef<HTMLDivElement>(null)
  const robots = [
    { Component: Robot1, position: { x: 100, y: 100 }, id: 'robot1' },
    { Component: Robot2, position: { x: 200, y: 200 }, id: 'robot2' },
    { Component: Robot1, position: { x: 300, y: 300 }, id: 'robot3' }
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return

      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      gsap.to('.mini-robot', {
        x: x - 20,
        y: y - 20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {robots.map((robot, index) => (
        <div key={index} className="mini-robot">
          <robot.Component
            id={robot.id}
            position={robot.position}
          />
        </div>
      ))}
    </div>
  )
}

