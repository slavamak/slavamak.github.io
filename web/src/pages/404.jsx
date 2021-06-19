import Layout from "../components/Layout"
import Link from "../components/Link"
import { siteQuery } from "../libs/queries"
import { getClient } from "../libs/sanity.server"

export default function NotFound({ data, preview }) {
  const { site } = data

  return (
    <Layout site={site} preview={preview}>
      <section className="max-w-3xl mx-auto mt-24 sm:mt-36">
        <div className="flex flex-col justify-center items-start text-center py-16">
          <h1 className="h1 mb-4">404 – Page not found :(</h1>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
            It seems you&apos;ve found something that used to exist, or you
            spelled something wrong. I&apos;m guessing you spelled something
            wrong. Can you double check that URL?
          </p>
          <Link
            className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-600 rounded-md"
            href="/"
            unLink
          >
            Return Home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(
    `
      {
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
