import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel='icon' sizes='16x16' href='/pawprint.png' />
        <title>Michiru.I Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
