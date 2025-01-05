'use client'

import { useState } from 'react'
import GameInterface from '@/components/GameInterface'
import AdBanner from '@/components/AdBanner'
import { motion } from 'framer-motion'

const modes = [
  { id: 'normal', name: 'Normal', color: 'from-blue-500 to-purple-500' },
  { id: 'party', name: 'Party', color: 'from-purple-500 to-pink-500' },
  { id: 'spicy', name: 'Spicy', color: 'from-red-500 to-orange-500' },
  { id: 'mixed', name: 'Mixed', color: 'from-green-500 to-teal-500' }
]

export default function PlayPage() {
  const [selectedMode, setSelectedMode] = useState('normal')
  
  return (
    <main className="min-h-screen pt-16">
      {/* 模式选择器 */}
      <div className="bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-4">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-bold transition-all
                  ${selectedMode === mode.id 
                    ? `bg-gradient-to-r ${mode.color} text-white` 
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* 左侧广告 */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-24">
              <AdBanner className="min-h-[600px]" />
            </div>
          </aside>
          
          {/* 游戏主界面 */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GameInterface mode={selectedMode} />
            
            {/* 游戏说明 */}
            <div className="mt-12 bg-gray-800/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">如何玩 Truth or Drink</h2>
              <div className="space-y-4 text-gray-300">
                <p>1. 选择游戏模式：Normal（普通）、Party（派对）、Spicy（辣味）或 Mixed（混合）</p>
                <p>2. 点击"下一题"获取问题</p>
                <p>3. 选择"说真话"诚实回答问题，或选择"喝一口"跳过回答</p>
                <p>4. 按顺序轮流回答，直到所有玩家都参与</p>
                <p className="text-yellow-500">温馨提示：请理性饮酒，注意安全</p>
              </div>
            </div>
          </motion.div>
          
          {/* 右侧广告 */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-24">
              <AdBanner className="min-h-[600px]" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 