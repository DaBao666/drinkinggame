'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Drinking Games - Party Games for Adults
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            The ultimate collection of drinking games for your next party. Play responsibly and have fun with friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/play/normal"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 
                       text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Start Playing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 