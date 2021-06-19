/* eslint-disable react/jsx-props-no-spreading */
import "../styles/index.css"

import { ThemeProvider } from "next-themes"

function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
