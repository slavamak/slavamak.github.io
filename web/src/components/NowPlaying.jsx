import classNames from "classnames"
import useSWR from "swr"

import fetcher from "../libs/fetcher"
import Icon from "./Icon"
import Link from "./Link"

export default function NowPlaying({ className }) {
  const { data, error } = useSWR("/api/now-playing", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div
      className={classNames("flex items-center", { [className]: className })}
    >
      <div className="mr-4">
        <Icon name="spotify" width="24px" height="24px" />
      </div>

      <div>
        {data.isPlaying ? (
          <Link className="mr-2" href={data.songUrl} target="_blank">
            {data.title}
          </Link>
        ) : (
          <span className="mr-2">Not Playing</span>
        )}

        <span className="mr-2">-</span>

        <span className="font-bold">
          {data.isPlaying ? data.artist : "Spotify"}
        </span>
      </div>
    </div>
  )
}
