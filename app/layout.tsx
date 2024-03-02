import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const space = localFont({ src: '../public/fonts/space-mono/SpaceMono-Regular.ttf' })

export const metadata: Metadata = {
  title: 'Yukendhiran',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= {space.className}>{children}</body>
    </html>
  )
}
