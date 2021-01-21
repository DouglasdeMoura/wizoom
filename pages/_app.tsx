import { ReactNode } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Wrapper from '../components/Wrapper/Wrapper'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  console.log(Component)
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default App
