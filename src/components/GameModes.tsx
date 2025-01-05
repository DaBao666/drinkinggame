'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const modes = [
  {
    id: 'normal',
    name: 'Normal Mode',
    description: 'Classic drinking game questions',
    icon: '🎮',
    color: 'from-blue-500/20 to-purple-500/20',
    hoverColor: 'from-blue-500/30 to-purple-500/30'
  },
  {
    id: 'party',
    name: 'Party Mode',
    description: 'Fun and exciting party questions',
    icon: '🎉',
    color: 'from-purple-500/20 to-pink-500/20',
    hoverColor: 'from-purple-500/30 to-pink-500/30'
  },
  {
    id: 'spicy',
    name: 'Spicy Mode',
    description: 'More challenging questions',
    icon: '🌶️',
    color: 'from-red-500/20 to-orange-500/20',
    hoverColor: 'from-red-500/30 to-orange-500/30'
  },
  {
    id: 'mixed',
    name: 'Mixed Mode',
    description: 'Random mix of all questions',
    icon: '🎲',
    color: 'from-green-500/20 to-teal-500/20',
    hoverColor: 'from-green-500/30 to-teal-500/30'
  }
]

export default function GameModes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {modes.map((mode, index) => (
        <Link href={`/play/${mode.id}`} key={mode.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              group relative overflow-hidden rounded-xl 
              bg-gradient-to-br ${mode.color} 
              hover:bg-gradient-to-br ${mode.hoverColor}
              p-6 cursor-pointer transition-all duration-300
              border border-gray-800 hover:border-gray-700
            `}
          >
            <div className="space-y-4">
              <span className="text-4xl block">{mode.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{mode.name}</h3>
                <p className="text-gray-400">{mode.description}</p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </motion.div>
        </Link>
      ))}
    </div>
  )
} 