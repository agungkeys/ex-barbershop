'use client'

import { ThemeProvider } from '@heroui/theme'
import { NextUIProvider } from '@heroui/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
