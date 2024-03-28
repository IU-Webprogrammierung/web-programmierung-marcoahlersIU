import Link from "next/link"
import { allArticles } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { Card } from "@/components/ui/card"

export default function BlogPage() {
  const posts = allArticles
    .filter((post) => post.date)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

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
          {posts.map((post) => (
            <Card className="p-6">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.description}</p>
              <Link href={post.slug} className="card-link">
                Open Article
              </Link>
            </Card>
          ))}
        </ul>
      </section>
    </div>
  )
}
