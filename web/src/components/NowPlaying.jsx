import useSWR from "swr"

import fetcher from "../libs/fetcher"

export default function NowPlaying() {
  const { data, error } = useSWR("/api/now-playing", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      {data.songUrl ? (
        <span>
          <a href={data.songUrl} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
          <span> -</span>
        </span>
      ) : (
        <span>Not Playing -</span>
      )}
      <span> {data.artist ?? "Spotify"}</span>
    </div>
  )
}
