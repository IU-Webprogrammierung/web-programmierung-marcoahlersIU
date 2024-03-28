import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const links = [
  { title: "Home", herf: "/" },
  { title: "Projects", herf: "/projects" },
  { title: "Blog", herf: "/blog" },
  { title: "Tools", herf: "/tools" },
]

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body id="home">
          <nav className="navigation">
            <ul className="navigation-list">
              {links.map((link) => (
                <li className="navigation-list-item" key={link.herf}>
                  <Link className="navigation-list-item-link" href={link.herf}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
