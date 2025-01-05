'use client'

import { motion } from 'framer-motion'

export default function GameRules() {
  const rules = [
    {
      title: "Basic Rules",
      icon: "🎮",
      items: [
        "Players take turns answering questions or taking drinks",
        "Be honest with your answers or take a drink to skip",
        "Respect other players' privacy and boundaries",
        "Drink responsibly and know your limits"
      ]
    },
    {
      title: "Game Modes",
      icon: "🎲",
      content: [
        { mode: "Normal Mode", desc: "Classic drinking game questions suitable for casual play" },
        { mode: "Party Mode", desc: "Fun and exciting questions perfect for group parties" },
        { mode: "Spicy Mode", desc: "More challenging and adventurous questions" },
        { mode: "Mixed Mode", desc: "Random selection from all question categories" }
      ]
    },
    {
      title: "Safety Guidelines",
      icon: "🛡️",
      items: [
        "Always drink responsibly and in moderation",
        "Have a designated driver or use ride-sharing services",
        "Stay hydrated and drink water between alcoholic beverages",
        "Don't pressure others to drink more than they want",
        "Stop playing if you feel unwell"
      ]
    }
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6" aria-label="Game Rules and Guidelines">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        Drinking Games Rules & Guidelines
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {rules.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl 
                     p-4 sm:p-6 backdrop-blur-sm
                     border border-gray-700/30 hover:border-gray-600/30 transition-all"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl" aria-hidden="true">{section.icon}</span>
              <h2 className="text-lg sm:text-xl font-bold text-white/90">{section.title}</h2>
            </div>

            {section.items && (
              <ul className="space-y-3 sm:space-y-4" role="list">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                    <span className="text-purple-400 mt-1" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.content && (
              <div className="space-y-3 sm:space-y-4">
                {section.content.map((item, i) => (
                  <div key={i} className="text-sm sm:text-base text-gray-300">
                    <strong className="text-purple-400">{item.mode}: </strong>
                    <span>{item.desc}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 重要提示 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 sm:mt-8 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-xl 
                   p-4 sm:p-6 backdrop-blur-sm
                   border border-red-900/30 hover:border-red-800/30 transition-all"
        role="alert"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl" aria-hidden="true">⚠️</span>
          <h2 className="text-lg sm:text-xl font-bold text-white/90">Important Notice</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          This game is intended for players aged 21 and over (or legal drinking age in your country). 
          Please drink responsibly and follow your local laws and regulations.
        </p>
      </motion.div>
    </section>
  )
} 