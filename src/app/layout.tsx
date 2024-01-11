"use client"

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Pharma Ease</title>
      </head>
      <body className={inter.className}>
        <Header />
        <main style={{minHeight: '70vh'}}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
