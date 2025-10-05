import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Noman\'s Portfolio | Node.js, React, Vue, Laravel Expert',
  description: 'Experienced web developer specializing in Node.js, React, Vue.js, Laravel, and AWS. Creating modern, scalable web applications with cutting-edge technologies.',
  keywords: 'web developer, nodejs, react, vue, laravel, aws, portfolio, full stack developer',
  authors: [{ name: 'Noman Malik' }],
  creator: 'Noman Malik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dev-portfolio-noman.vercel.app/',
    title: 'Professional Web Developer Portfolio',
    description: 'Experienced web developer specializing in Laravel, React, Vue.js, Node.js, and AWS.',
    siteName: 'Web Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noman\'s Portfolio',
    description: 'Experienced web developer specializing in Laravel, React, Vue.js, Node.js, and AWS.',
    creator: '@bwithnomi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://dev-portfolio-noman.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
