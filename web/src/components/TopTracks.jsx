import useSWR from "swr"

import fetcher from "../libs/fetcher"

export default function TopTracks() {
  const { data, error } = useSWR("/api/top-tracks", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <ul>
      {data.tracks.map((track) => (
        <li key={track.title}>
          <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
            {track.title}
          </a>
          <p>{track.artist}</p>
        </li>
      ))}
    </ul>
  )
}
