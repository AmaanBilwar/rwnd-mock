import type { Metadata } from 'next'
import './globals.css'
import React from 'react'


export const metadata: Metadata = {
  title: 'RWND - Loaded Clone',
  description: 'mock website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className='font-sans'>{children}</body>
    </html>
  )
}
