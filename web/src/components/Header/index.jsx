import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import Link from "../Link"
import HeaderNav from "./HeaderNav"

function Header({ data, meta }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const { showActionsMenu, menu } = data
  const { email, mailto_title: mailtoTitle } = meta

  useEffect(() => {
    setMounted(true)
  }, [mounted])

  return (
    <header className="h-24 font-medium text-lg fixed top-0 left-0 right-0 bg-white transition transition-height duration-500 z-10 sm:h-36 dark:bg-gray-900">
      <div className="flex justify-between items-center h-full max-w-screen-md mx-auto px-8 md:px-24">
        <div className="inline-flex items-center">
          {mounted && (
            <button
              className="p-0"
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <svg className="h-12" fill="none" viewBox="0 0 512 512">
                <path
                  className="text-black dark:text-gray-200"
                  fill="currentColor"
                  d="M0 0h512v512H0z"
                />
                <path
                  className="text-white dark:text-black"
                  fill="currentColor"
                  d="M176.28 146.92V193c-17.28-10.03-35.2-15.04-53.76-15.04-8.32 0-14.72 1.7-19.2 5.12-4.27 3.41-6.4 7.79-6.4 13.12 0 5.33 2.67 10.13 8 14.4 5.33 4.05 13.33 8.43 24 13.12a238.2 238.2 0 0116.32 8c4.48 2.13 9.5 5.23 15.04 9.28 5.76 3.84 10.24 8 13.44 12.48 3.41 4.27 6.3 9.6 8.64 16a59.96 59.96 0 013.52 20.8c0 19.41-7.15 35.2-21.44 47.36-14.3 11.95-33.28 17.92-56.96 17.92-25.39 0-46.08-4.48-62.08-13.44v-49.6c19.41 14.08 40.1 21.12 62.08 21.12 7.47 0 13.65-1.92 18.56-5.76a19.4 19.4 0 007.36-15.68c0-2.13-.32-4.16-.96-6.08a14 14 0 00-3.52-5.44c-1.7-1.7-3.41-3.1-5.12-4.16-1.5-1.28-3.84-2.67-7.04-4.16a161.7 161.7 0 00-7.68-4.16 281.36 281.36 0 00-9.6-4.48 239.27 239.27 0 00-9.92-4.48c-13.87-6.4-25.07-14.3-33.6-23.68-8.32-9.39-12.48-21.87-12.48-37.44 0-18.56 6.83-33.5 20.48-44.8 13.65-11.52 32.53-17.28 56.64-17.28 21.55 0 40.1 3.63 55.68 10.88zM211.38 353l18.56-215.68H284l30.09 78.08a724.38 724.38 0 0113.11 35.84c3.63 10.88 5.98 18.56 7.05 23.04l1.6 6.4c3.4-14.08 10.88-35.84 22.4-65.28l30.4-78.08h54.07L465.13 353h-49.27l-8-83.52-4.17-63.04c-5.54 16-13.22 37.01-23.04 63.04l-30.4 81.28h-29.12l-30.07-81.28a960.64 960.64 0 01-12.49-35.52 465.12 465.12 0 01-6.71-21.76l-1.6-5.76c0 15.15-.96 36.16-2.88 63.04L260.64 353h-49.27z"
                />
              </svg>
            </button>
          )}

          <Link className="ml-6" href="/">
            Home
          </Link>
        </div>

        <HeaderNav
          menu={menu}
          showActionsMenu={showActionsMenu}
          email={email}
          mailtoTitle={mailtoTitle}
        />
      </div>
    </header>
  )
}

export default Header
