export default function HinweisgeberPage() {
  return (
    <div>
      <article className="text-content">
        <a className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </a>

        <h1>
          J&P Media Labs: Crafting a Digital Presence with Cutting-Edge Web
          Technologies
        </h1>

        <p>
          For J&P Media Labs, a dynamic advertising agency, I developed a sleek
          and intuitive website leveraging the power of Vue.js and Nuxt for a
          seamless, single-page application experience. By integrating Directus
          as the headless CMS, I enabled the team to manage content
          effortlessly, resulting in a robust, maintainable, and user-friendly
          website that truly represents the innovative spirit of J&P Media Labs.
          This project showcased my ability to translate creative visions into
          digital realities through sophisticated web development techniques.
        </p>

        <img
          src="/img/jp-website.png"
          alt="Homepage of J&P Media Labs advertising agency, displaying a bold and colorful abstract design with navigation menu and a compelling company description highlighting their expertise in print, web, and advertising technology"
        />
      </article>
    </div>
  )
}
