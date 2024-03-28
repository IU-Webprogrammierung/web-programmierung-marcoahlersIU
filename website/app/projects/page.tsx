import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div>
      <header className="page-section">
        <div className="hero-section-text">
          <h1>Crafting Digital Solutions: My Portfolio Highlights</h1>
          <p>
            In my professional journey, I've navigated the diverse landscapes of
            customer-centric projects and in-house developments. This experience
            has allowed me to not only refine my technical skills but also to
            understand deeply the nuances of delivering tailored solutions that
            meet specific needs.
          </p>
        </div>
      </header>

      <hr className="divider" />

      <section className="page-section">
        <ul className="project-list">
          <li className="project-list-item">
            <Link href="/projects/rechain">
              <div className="project-list-item-image-container">
                <img
                  src="/img/rechain-thumbnail.webp"
                  alt="Person holding a tablet displaying an app interface for construction site documentation, showing images of a building in various stages of renovation"
                />
              </div>

              <div className="project-list-item-title">Rechain</div>
            </Link>
          </li>
          <li className="project-list-item">
            <Link href="/projects/jp-website">
              <div className="project-list-item-image-container">
                <img
                  src="/img/jp-website-thumbnail.png"
                  alt="Homepage of J&P Media Labs advertising agency, displaying a bold and colorful abstract design with navigation menu and a compelling company description highlighting their expertise in print, web, and advertising technology."
                />
              </div>
              <div className="project-list-item-title">J&P Media Labs</div>
            </Link>
          </li>
          <li className="project-list-item">
            <Link href="/projects/hinweisgeber">
              <div className="project-list-item-image-container">
                <img
                  src="/img/hinweisgeber-thumbnail.webp"
                  alt="placeholder iamge"
                />
              </div>
              <div className="project-list-item-title">Hinweisgeber.in</div>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
