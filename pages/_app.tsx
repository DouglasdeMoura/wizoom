import { ReactNode } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  console.log(Component)
  return <Component {...pageProps} />
}

export default App
