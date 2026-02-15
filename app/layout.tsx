import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrimeSEO Solutions - Expert SEO Services',
  description: 'Boost your online visibility with PrimeSEO Solutions. Expert SEO services including keyword research, technical SEO, link building, and content strategy.',
  generator: 'v0.app',
  keywords: 'SEO services, search engine optimization, digital marketing, keyword research, link building',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}