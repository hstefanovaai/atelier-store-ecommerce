import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Atelier Store - Luxury Fashion & Collections',
  description: 'Discover curated collections and signature pieces at Atelier Store. Premium fashion with timeless design.',
  openGraph: {
    title: 'Atelier Store',
    description: 'Discover curated collections and signature pieces at Atelier Store',
    type: 'website',
  },
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
