import Icon from "./Icon"
import Link from "./Link"
import NowPlaying from "./NowPlaying"

function Footer({ data }) {
  const { referral } = data

  return (
    <footer>
      <div className="max-w-screen-sm mx-auto px-8 border-t border-gray-300 dark:border-gray-600 sm:border-0">
        <div className="py-12 border-t border-gray-300 dark:border-gray-600 sm-down:border-0">
          <NowPlaying className="mb-12" />

          <div className="h-24 flex items-center justify-end">
            <Link href={referral} target="_blank" title="DigitalOcean">
              <Icon name="do" width={160} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
