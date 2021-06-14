import Footer from "../Footer"
import Header from "../Header"
import Meta from "../Meta"

function Layout({ site, children }) {
  return (
    <>
      <Meta meta={site.meta} />
      <Header data={site.header} meta={site.meta} />
      <main>{children}</main>
      <Footer data={site.footer} />
    </>
  )
}

export default Layout
