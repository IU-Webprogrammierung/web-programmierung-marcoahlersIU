import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body id="home">
          <Navigation />
          <main className="content">{children}</main>
          <footer className="footer">
            <hr className="divider" />
            <span className="footer-text">
              © 2024 Marco Ahlers. All Rights Reserved.
            </span>
          </footer>
        </body>
      </html>
    </>
  )
}
