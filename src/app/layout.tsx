import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Drinking Games - Party Games for Adults | Play Online',
  description: 'Play fun drinking games online with friends. Choose from Normal, Party, Spicy, and Mixed modes. Free party games for adults with responsible drinking guidelines.',
  keywords: 'drinking games, party games, adult games, online drinking games, party mode, game rules',
  openGraph: {
    title: 'Drinking Games - Party Games for Adults',
    description: 'Play fun drinking games online with friends. Choose from various game modes and enjoy responsibly!',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.drinkinggame.online',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Drinking Games Online - Fun Party Games',
    }],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Drinking Games Online - Fun Party Games',
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7VBCTVRVTL"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7VBCTVRVTL');
        `
      }} />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-black min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
