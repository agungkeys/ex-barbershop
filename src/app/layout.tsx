import { Poppins } from "next/font/google"
import { ThemeProvider } from "@heroui/theme"
import { NextUIProvider } from "@heroui/react"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}