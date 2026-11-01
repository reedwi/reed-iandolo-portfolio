import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { SiteBar } from "@/components/site-bar"
import { SITE_URL } from "@/lib/site"
import { Analytics } from '@vercel/analytics/react';

const sans = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: 'Reed Iandolo',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/reed_headshot.png', alt: 'Reed Iandolo' }],
  },
  twitter: { card: 'summary' },
  title: 'Reed Iandolo | VP of Technology',
  description:
    'Reed Iandolo is VP of Technology at Aptitude 8 and an independent technical advisor. He helps teams get the most out of their core systems and builds the custom 10% those systems can\'t cover.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteBar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
