"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'FAQ', href: '#faq' },
]

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  // const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const theme = new URLSearchParams(window.location.search).get('theme')
    if (theme) {
      // Apply theme logic here
    }
  }, [])

  const theme = new URLSearchParams(window.location.search).get('theme')


  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="icon"
              className={`bg-primary text-primary-foreground rounded-full shadow-lg ${theme === 'dark' ? 'bg-gray-800' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <ChevronUp /> : <Menu />}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 bg-background rounded-lg shadow-lg p-4 w-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-foreground hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

