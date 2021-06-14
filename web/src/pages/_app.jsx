/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
