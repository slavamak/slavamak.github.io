import Link from "./Link"

function Projects({ data }) {
  const { title: heading, items: projects } = data

  return (
    <section className="py-24" id="projects">
      <div className="max-w-screen-sm mx-auto px-8">
        <h2 className="h2">{heading}</h2>
        <ul className="mt-12 -mx-4">
          {projects.map(({ _id, title, url, description, technologies }) => (
            <li
              className="px-4 py-6 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600"
              key={_id}
            >
              <Link
                className="block hover:text-current"
                href={url}
                title={title}
                target="_blank"
                unLink
              >
                <h3 className="h4">{title}</h3>
              </Link>
              <h4 className="font-normal text-lg mt-4">{description}</h4>
              <p className="italic text-gray-600 dark:text-gray-300">
                {technologies.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
