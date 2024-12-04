"use client"

import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Subscribed to newsletter")
  }

  return (
    <footer className="relative bg-background text-foreground border-t overflow-hidden">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">CodeSewa Hackathon</h2>
            <p className="mb-4 text-foreground/80">Empowering innovation and fostering creativity through technology.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input type="email" placeholder="Enter your email" required />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#tracks" className="hover:text-primary transition-colors">Tracks</a></li>
              <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@codeseva.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: Delhi, India</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-foreground/20 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 CodeSewa Hackathon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

