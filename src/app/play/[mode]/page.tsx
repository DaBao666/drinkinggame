'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import GameInterface from '@/components/GameInterface'
import AdBanner from '@/components/AdBanner'
import { motion } from 'framer-motion'

const modes = [
  { id: 'normal', name: 'Normal', color: 'text-gray-400 hover:text-white' },
  { id: 'party', name: 'Party', color: 'text-purple-400 hover:text-purple-300' },
  { id: 'spicy', name: 'Spicy', color: 'text-red-400 hover:text-red-300' },
  { id: 'mixed', name: 'Mixed', color: 'text-green-400 hover:text-green-300' }
]

export default function PlayPage() {
  const params = useParams()
  const router = useRouter()
  const currentMode = params.mode as string
  
  // 验证模式是否有效，如果无效则重定向到 normal
  useEffect(() => {
    if (!modes.find(m => m.id === currentMode)) {
      router.push('/play/normal')
    }
  }, [currentMode, router])

  return (
    <main className="min-h-screen pt-16">
      {/* 模式选择器 */}
      <div className="bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-4">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => router.push(`/play/${mode.id}`)}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-full font-bold transition-all
                  ${currentMode === mode.id 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                    : mode.color}
                `}
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
            <GameInterface mode={currentMode} />
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