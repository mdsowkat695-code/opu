import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation & Web Design Portfolio',
  description: 'Professional portfolio for AI automation, web design, and AI APK development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}