import Link from "./Link"

function NavItem({ className, url, children }) {
  return (
    <li className={className}>
      <Link href={url}>{children}</Link>
    </li>
  )
}

function Nav({ className, children }) {
  return <ul className={className}>{children}</ul>
}

export { Nav, NavItem }
