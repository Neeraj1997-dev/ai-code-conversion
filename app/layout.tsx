import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegacyTransformed.ai',
  description: 'Created By Neeraj',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
