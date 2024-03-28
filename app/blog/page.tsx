import Link from "next/link"

export default function BlogPage() {
  return (
    <div>
      <header className="page-section">
        <div className="hero-section-text">
          <h1>Web Development & Beyond</h1>
          <p>
            Dive into web development, tech trends, and digital craftsmanship.
            My blog offers insights on coding, project management, and the tech
            industry's evolution. Discover a mix of technical know-how, creative
            problem-solving, and reflections on navigating the digital world.
          </p>
        </div>
      </header>

      <hr className="divider" />

      <section className="page-section">
        <ul className="card-list">
          <li className="card">
            <h3 className="card-title">
              Flexbox vs. Grid - A Practical Comparison
            </h3>
            <p className="card-description">
              Explore the strengths and use cases of Flexbox and Grid in
              responsive web design. This article offers a practical comparison,
              helping you decide when to use each technology for optimal layout
              efficiency and effectiveness.
            </p>
            <Link href="/articles/flexbox-vs-grid" className="card-link">
              Open Article
            </Link>
          </li>
          <li className="card">
            <h3 className="card-title">
              Mastering Clean Code: Essential Practices for Web Developers
            </h3>
            <p className="card-description">
              Uncover the principles of clean coding tailored for web
              development. This post discusses best practices for writing
              readable, maintainable, and efficient code, including naming
              conventions and function organization.
            </p>
            <Link href="/articles/clean-code" className="card-link">
              Open Article
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
