import type React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "NAVI IT School – Future Creators, Not Just Users",
  description:
    "Online IT education center for kids aged 10–17. Learn HTML, CSS, JavaScript, React, and AI skills through gamified learning.",
  keywords: ["IT school", "coding for kids", "programming education", "learn React", "AI for kids"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#4a7fc1",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
