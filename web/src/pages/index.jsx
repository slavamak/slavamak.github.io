import Layout from "../components/Layout"
import Module from "../components/Module"
import { homeQuery, siteQuery } from "../libs/queries"
import { getClient } from "../libs/sanity.server"

export default function Home({ data, preview }) {
  const { site, page } = data

  return (
    <Layout site={site} page={page} preview={preview}>
      {page.modules?.map((module) => (
        <Module key={module._key} module={module} />
      ))}
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(
    `
      {
        "page": ${homeQuery},
        ${siteQuery}
      }
    `
  )

  return {
    props: {
      data,
      preview,
    },
  }
}
