interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className }: AdBannerProps) {
  return (
    <div className={`w-full bg-gray-800/30 backdrop-blur-sm rounded-lg ${className}`}>
      <div className="flex items-center justify-center min-h-[90px] text-gray-400">
        {/* Advertisement */}
      </div>
    </div>
  )
} 