import Link from "next/link"

export default function IndexPage() {
  return (
    <div>
      <header className="page-section">
        <div className="hero-section-avatar">
          <img src="/img/avatar.jpg" alt="avatar" />
        </div>
        <div className="hero-section-text">
          <h1>Experienced Software Engineer & Tech Enthusiast</h1>
          <p>
            I'm Marco Ahlers, a dedicated software engineer from
            Schleswig-Holstein. At Gridventures GmbH, I contribute to innovative
            software projects, blending my technical skills with a strong
            commitment to user-centric design. My passion lies in creating
            effective and impactful software solutions.
          </p>
        </div>

        <div className="hero-section-social-links">
          <a href="https://github.com/Tr3ffel" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              ></path>
            </svg>
          </a>
        </div>
      </header>

      <div className="divider"></div>

      <section className="page-section">
        <div className="section-content">
          <div className="page-section-title">
            <h3>Projects</h3>
          </div>
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
            <a href="/projects" className="view-all-link">
              View All
            </a>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-content">
          <div className="page-section-title">
            <h3>Blog</h3>
          </div>
          <ul className="card-list">
            <li className="card">
              <h3 className="card-title">
                Flexbox vs. Grid - A Practical Comparison
              </h3>
              <p className="card-description">
                Explore the strengths and use cases of Flexbox and Grid in
                responsive web design. This article offers a practical
                comparison, helping you decide when to use each technology for
                optimal layout efficiency and effectiveness.
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
            <Link href="/blog" className="view-all-link">
              View All
            </Link>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-content">
          <div className="page-section-title">
            <h3>Experience</h3>
          </div>
          <ul className="card-list">
            <li className="card">
              <h4 className="card-subtitle">
                Software-Developer (2018 - 2024)
              </h4>
              <h3 className="card-title">Gridventures</h3>
              <p className="card-description">
                At Gridventures, I've been engaged in software development for a
                variety of client and in-house projects, focusing on delivering
                innovative and user-centric solutions.
              </p>
            </li>

            <li className="card">
              <h4 className="card-subtitle">Internships (2015 - 2017)</h4>
              <h3 className="card-title">new-data-services, Sharpness</h3>
              <p className="card-description">
                During my school years, I completed internships at
                new-data-services and Sharpness, gaining hands-on experience in
                software development and enhancing my practical skills in a
                real-world environment.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-content">
          <div className="page-section-title">
            <h3>Education</h3>
          </div>
          <ul className="card-list">
            <li className="card">
              <h4 className="card-subtitle">
                Bachelor in Computer Science (2019 - 2024)
              </h4>
              <h3 className="card-title">IU Internationale Hochschule</h3>
              <p className="card-description">
                Currently nearing the completion of my part-time studies in
                Computer Science at IU International University, where I've
                gained a comprehensive understanding of theoretical and
                practical aspects of software development and computer systems.
              </p>
            </li>
            <li className="card">
              <h4 className="card-subtitle">
                Informationstechnischer Assistent (2015 - 2017)
              </h4>
              <h3 className="card-title">BZTG Oldenburg</h3>
              <p className="card-description">
                I completed a vocational education as an
                "Informationstechnischer Assistent", where I gained a solid
                foundation in network technology, system administration, and
                software development.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="section-content">
          <div className="page-section-title">
            <h3>Contact</h3>
          </div>
          <div>
            <ul className="contact-list">
              <li className="contact-list-item">
                <span className="contact-list-item-title">E-Mail:</span>
                <a
                  className="contact-list-item-link"
                  href="mailto:marco.ahlers@t-online.de"
                >
                  marco.ahlers@t-online.de
                </a>
              </li>
              <li className="contact-list-item">
                <span className="contact-list-item-title">GitHub:</span>
                <a
                  className="contact-list-item-link"
                  href="https://github.com/Tr3ffel"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Tr3ffel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ slug: "/" }]
}
