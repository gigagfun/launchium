import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://launchium.io'),
  title: 'Launchium (LNCHM) - Launch a Token With a Tweet',
  description: 'Revolutionary token launch platform powered by AI. Create, deploy, and manage tokens in under 47 seconds with no coding required.',
  keywords: ['crypto', 'token launch', 'blockchain', 'DeFi', 'Solana', 'AI'],
  authors: [{ name: 'Launchium Team' }],
  openGraph: {
    title: 'Launchium (LNCHM) - Launch a Token With a Tweet',
    description: 'Revolutionary token launch platform powered by AI. Create, deploy, and manage tokens in under 47 seconds.',
    url: 'https://launchium.io',
    siteName: 'Launchium',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Launchium - Token Launch Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Launchium (LNCHM) - Launch a Token With a Tweet',
    description: 'Revolutionary token launch platform powered by AI.',
    images: ['/og-image.png'],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 