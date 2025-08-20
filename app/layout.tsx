import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Sweet Burst - Cake & Event Planning | Creating Sweet Memories",
  description:
    "Sweet Burst specializes in elegant celebrations with custom cakes and flawless event planning for weddings, baby showers, birthdays, and corporate events.",
  keywords:
    "cake design, event planning, wedding cakes, birthday parties, baby showers, corporate events, venue sourcing, decor styling",
  openGraph: {
    title: "Sweet Burst - Cake & Event Planning",
    description: "Creating sweet memories that last forever through exquisite cakes and flawless event planning.",
    type: "website",
    locale: "en_US",
    siteName: "Sweet Burst Bakery & Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Burst - Cake & Event Planning",
    description: "Creating sweet memories that last forever through exquisite cakes and flawless event planning.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
