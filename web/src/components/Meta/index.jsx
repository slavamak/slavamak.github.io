import Head from "next/head"

const Meta = ({ meta }) => {
  const { title, description } = meta

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" href="/images/favicons/apple180.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default Meta
