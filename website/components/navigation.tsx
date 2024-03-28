import Link from "next/link"

const links = [
  { title: "Home", herf: "/" },
  { title: "Projects", herf: "/projects" },
  { title: "Blog", herf: "/blog" },
  { title: "Tools", herf: "/tools" },
]

export default function Navigation() {
  return (
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
  )
}
