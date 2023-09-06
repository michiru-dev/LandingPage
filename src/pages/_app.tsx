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
        <meta
          name='description'
          content="Michiru's portofolio. Last updated:6th September"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
