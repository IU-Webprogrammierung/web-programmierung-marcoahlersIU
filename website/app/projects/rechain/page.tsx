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

        <h1>Empowering Craftsmanship with Digital Solutions</h1>

        <p>
          In my role at Gridventures GmbH, I was instrumental in developing the
          Rechain app, designed to digitize the operational workflow for crafts
          and trades businesses. My contribution primarily focused on the
          backend development, leveraging Node.js, MongoDB, Websockets, and
          Redis to ensure a seamless, real-time data synchronization and robust
          database management. This backend architecture was critical in
          supporting the app's capability to streamline documentation,
          scheduling, and communication processes for craftsmen, thereby
          enhancing efficiency and reducing manual errors.
        </p>

        <img
          src="/img/rechain-1.webp"
          alt="Screenshot of the Rechain app's project management interface, showcasing various projects listed with their respective statuses."
        />

        <p>
          Through this project, I demonstrated my expertise in creating scalable
          and efficient backend solutions that cater to the specific needs of
          the crafts and trades sector. By integrating advanced technologies, I
          helped facilitate a digital transformation, enabling businesses to
          operate more effectively in a competitive landscape. This experience
          has been a testament to my ability to innovate and execute complex
          software development projects that address real-world challenges.
        </p>

        <img
          src="/img/rechain-2.webp"
          alt="Interface screenshot displaying a construction report template in the Rechain app, featuring customizable fields for project details, weather conditions, personnel, and other report elements to streamline on-site documentation."
        />
      </article>
    </div>
  )
}
