import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import GameModes from '@/components/GameModes'
import FeaturedGames from '@/components/FeaturedGames'
import GameRules from '@/components/GameRules'
import AdBanner from '@/components/AdBanner'

export const metadata: Metadata = {
  title: 'Drinking Games - Fun Party Games for Adults | Play Online',
  description: 'Discover the best drinking games online! Choose from Normal, Party, Spicy, and Mixed modes. Free party games for adults with responsible drinking guidelines. Perfect for your next party!',
  keywords: ['drinking games', 'party games', 'adult games', 'online drinking games', 'party mode', 'game rules', 'truth or drink'],
  openGraph: {
    title: 'Drinking Games - Fun Party Games for Adults',
    description: 'Play exciting drinking games online with friends. Multiple game modes available!',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drinking Games Preview'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <main itemScope itemType="https://schema.org/WebApplication" className="flex min-h-screen flex-col">
        <meta itemProp="applicationCategory" content="Game" />
        <meta itemProp="operatingSystem" content="Web Browser" />
        
        <AdBanner className="top-banner" />
        
        <HeroSection />
        
        <section 
          aria-label="Game Modes" 
          className="container mx-auto px-4 py-12"
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white/90">
            Choose Your Game Mode
          </h2>
          <GameModes />
        </section>
        
        <AdBanner className="mid-content" />
        
        <section 
          aria-label="Featured Games"
          className="container mx-auto px-4 py-12"
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          
          <FeaturedGames />
        </section>

        <section 
          aria-label="Game Rules"
          className="container mx-auto px-4 py-16"
          itemScope 
          itemType="https://schema.org/HowTo"
        >
          <GameRules />
        </section>
        
        <AdBanner className="bottom-banner" />
      </main>

      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Drinking Games",
            "applicationCategory": "Game",
            "operatingSystem": "Web Browser",
            "description": "Online drinking games platform with multiple game modes",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250"
            },
            "author": {
              "@type": "Organization",
              "name": "Drinking Games"
            }
          })
        }}
      />
    </>
  )
}
