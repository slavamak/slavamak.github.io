import Meta from '../Meta'

import Header from '../Header'
import Footer from '../Footer'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default Layout
