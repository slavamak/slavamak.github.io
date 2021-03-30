import { promises as fs } from 'fs'
import path from 'path'

import { GetStaticProps } from 'next'

import Head from 'next/head'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

type Project = {
  title: string,
  url: string,
  description: string,
  technologies: string
}

type Link = {
  name: string,
  url: string,
  title: string
}

export type HomeProps = {
  projects: Project[],
  links: Link[]
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Slava Maksimov | Freelancer, web developer</title>
      </Head>
      <Layout>
        <Hero {...props} />
        <Projects {...props} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(jsonData)

  return {
    props: {
      ...data
    }
  }
}