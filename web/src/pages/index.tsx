import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="I develop custom app, themes, and integration APIs for Shopify platform. All this time, I not only create websites but also learn new technologies, so I can help you create a modern website that will meet your requirements." />
        <title>Slava Maksimov | Freelancer, web developer</title>
        <link rel="icon" href="/images/favicons/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicons/apple180.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
