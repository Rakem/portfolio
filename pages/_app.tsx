import '../styles/globals.css'
import { AppProps } from 'next/app'
import 'devicon/devicon.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
