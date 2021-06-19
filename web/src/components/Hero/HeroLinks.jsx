import classNames from "classnames"

import Icon from "../Icon"
import Link from "../Link"

function HeroLinks({ links }) {
  return (
    <div className="mt-12">
      {links.map((link, index) => (
        <Link
          key={link._key}
          href={link.url}
          title={link.title}
          target="_blank"
          className={classNames(
            "inline-block no-underline hover:text-gray-700 dark:hover:text-gray-300",
            {
              "ml-12": index !== 0,
            }
          )}
          unLink
        >
          <Icon name={link.icon.toLowerCase()} />
        </Link>
      ))}
    </div>
  )
}

export default HeroLinks
