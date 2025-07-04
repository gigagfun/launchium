import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Launchium - AI-Powered Token Launch Platform',
  description: 'Launch your Solana token in 0-60 seconds with AI-powered automation. No coding required. Join the future of decentralized token launches.',
  keywords: 'solana, token launch, crypto, defi, ai, automation, blockchain, presale',
  authors: [{ name: 'Launchium Team' }],
  creator: 'Launchium',
  publisher: 'Launchium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://launchium.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Launchium - AI-Powered Token Launch Platform',
    description: 'Launch your Solana token in 0-60 seconds with AI-powered automation. No coding required.',
    url: 'https://launchium.app',
    siteName: 'Launchium',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Launchium Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launchium - AI-Powered Token Launch Platform',
    description: 'Launch your Solana token in 0-60 seconds with AI-powered automation. No coding required.',
    creator: '@launchium',
    images: ['/logo.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 