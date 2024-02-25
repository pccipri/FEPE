'use client'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import { useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from '@/GlobalRedux/provider'
import { AuthContextProvider } from '@/contexts/AuthContext'
import Head from 'next/head'

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
    <AuthContextProvider>
      <html lang="en">
        <Providers>
          <Head>
            <title>Pharma Ease</title>
          </Head>
          <body className={inter.className}>
            <Header />
            <main style={{ minHeight: '70vh' }}>
              {children}
            </main>
            <Footer />
          </body>
        </Providers>
      </html>
    </AuthContextProvider>
  )
}
