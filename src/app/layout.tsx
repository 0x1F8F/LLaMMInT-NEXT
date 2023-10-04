import '@/style/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LLaMMInT AI',
  description: 'Generative AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
