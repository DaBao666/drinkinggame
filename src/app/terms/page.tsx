import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service & Game Rules | Drinking Games',
  description: 'Official terms of service and game rules for Drinking Games. Learn about age restrictions, responsible gaming guidelines, and player safety. Must be of legal drinking age to play.',
  keywords: ['drinking games terms', 'game rules', 'player guidelines', 'responsible gaming', 'age restrictions', 'gaming policy'],
  openGraph: {
    title: 'Terms of Service & Game Rules | Drinking Games',
    description: 'Official terms and guidelines for safe, responsible gaming. Age restrictions apply.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Drinking Games',
    images: [
      {
        url: '/images/terms-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Drinking Games Terms of Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Game Rules',
    description: 'Official gaming guidelines and policies for responsible play.',
    images: ['/images/terms-twitter.jpg']
  },
  alternates: {
    canonical: 'https://drinking-games.com/terms'
  }
}

export default function Terms() {
  return (
    <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-300" aria-current="page">
            Terms of Service
          </li>
        </ol>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article 
          className="bg-gray-800/30 rounded-xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
          itemScope 
          itemType="https://schema.org/WebPage"
        >
          <meta itemProp="lastReviewed" content={new Date().toISOString()} />
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <nav className="mb-8 p-4 bg-gray-900/50 rounded-lg" aria-label="Table of contents">
            <h2 className="text-lg font-semibold mb-3 text-white/90">Quick Navigation</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <a href="#age-restriction" className="hover:text-purple-400 transition-colors">
                  Age Restriction and Eligibility
                </a>
              </li>
              <li>
                <a href="#responsible-gaming" className="hover:text-purple-400 transition-colors">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#acceptable-use" className="hover:text-purple-400 transition-colors">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-purple-400 transition-colors">
                  Disclaimer and Liability
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <section id="age-restriction" className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Age Restriction and Eligibility
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="leading-relaxed">
                  You must be of legal drinking age in your jurisdiction to use our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>21 years or older in the United States</li>
                  <li>18 years or older in most European countries</li>
                  <li>Legal drinking age in your specific location</li>
                </ul>
                <p className="leading-relaxed">
                  By using our service, you confirm that you meet these age requirements and are legally able to consume alcohol in your jurisdiction.
                </p>
              </div>
            </section>

            <section id="responsible-gaming" className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Responsible Gaming and Drinking
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="leading-relaxed">
                  We promote responsible drinking and gaming. Users must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Drink responsibly and know their limits</li>
                  <li>Have a designated driver or safe transportation plan</li>
                  <li>Not engage in dangerous or harmful behavior</li>
                  <li>Respect other players and maintain appropriate conduct</li>
                </ul>
              </div>
            </section>

            <section id="acceptable-use" className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Acceptable Use Policy
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="leading-relaxed">
                  When using our platform, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Encourage excessive or irresponsible drinking</li>
                  <li>Share inappropriate or offensive content</li>
                  <li>Attempt to manipulate or disrupt the service</li>
                </ul>
              </div>
            </section>

            <section id="disclaimer" className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Disclaimer and Liability
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="leading-relaxed">
                  Our platform is provided "as is" without warranties of any kind. We are not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any consequences of drinking alcohol</li>
                  <li>User behavior or decisions while playing</li>
                  <li>Technical issues or service interruptions</li>
                  <li>Third-party content or links</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Changes to Terms
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the platform after changes 
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a 
                  href="mailto:terms@drinking-games.com" 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  terms@drinking-games.com
                </a>
              </p>
            </section>

            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Related Information
              </h2>
              <div className="p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
                <Link 
                  href="/privacy" 
                  className="block"
                >
                  <h3 className="font-semibold mb-2 text-white/90">Privacy Policy</h3>
                  <p className="text-sm text-gray-400">Learn about our privacy practices and how we protect your information.</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntity": {
                "@type": "WebContent",
                "name": "Terms of Service - Drinking Games",
                "description": "Official terms of service and game rules for responsible gaming.",
                "text": "Complete terms of service including age restrictions, responsible gaming guidelines, and acceptable use policies.",
                "datePublished": "2024-01-01T00:00:00Z",
                "dateModified": new Date().toISOString(),
                "publisher": {
                  "@type": "Organization",
                  "name": "Drinking Games",
                  "url": "https://drinking-games.com"
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://drinking-games.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Terms of Service",
                    "item": "https://drinking-games.com/terms"
                  }
                ]
              },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2"]
              }
            })
          }}
        />
      </div>
    </main>
  )
} 