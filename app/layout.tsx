import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Epilogue } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReThinked Web Solutions',
  description: 'Created with love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>{children}
        <div className="body-wrapper">
          
        </div>
      </body>
    </html>
  )
}
