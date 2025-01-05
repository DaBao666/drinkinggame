import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Drinking Games',
  description: 'Our privacy policy explains how we protect your privacy. We do not collect any personal information when you use our drinking games platform.',
  openGraph: {
    title: 'Privacy Policy - Drinking Games',
    description: 'We respect your privacy. No personal information collection.',
    type: 'website',
  }
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-gray-800/30 rounded-xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Introduction */}
            <section>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                At Drinking Games, we take your privacy seriously. We want to be clear that we do not collect any personal information from our users. 
                This website is designed to be used without requiring any personal data.
              </p>
            </section>

            {/* No Data Collection Policy */}
            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                No Personal Data Collection
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                We are committed to protecting your privacy. Our website:
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-300 space-y-2">
                <li>Does not collect personal information</li>
                <li>Does not require account creation</li>
                <li>Does not track individual users</li>
                <li>Does not store game progress or preferences</li>
              </ul>
            </section>

            {/* Technical Information */}
            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Technical Information
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                While we don't collect personal data, our website may automatically receive some technical information:
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-300 space-y-2">
                <li>Basic device information for compatibility (browser type, screen size)</li>
                <li>Anonymous usage statistics to improve performance</li>
                <li>Temporary data stored locally on your device (cleared when you close the browser)</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
                This technical information is anonymous and cannot be used to identify individual users.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Third-Party Services
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our website may use third-party services for:
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-300 space-y-2 mb-4">
                <li>Website analytics (anonymous usage data)</li>
                <li>Content delivery optimization</li>
                <li>Basic security measures</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                These services operate in compliance with privacy regulations and do not collect personal information.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-gray-700/30 pt-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                If you have any questions about our privacy policy, please contact us at:{' '}
                <a 
                  href="mailto:privacy@drinking-games.com" 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  privacy@drinking-games.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  )
} 