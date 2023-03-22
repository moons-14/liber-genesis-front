import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Liber Genesis</title>
      <meta name="description" content="Liber Genesis Front End.Visualize all conversations and impacts." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
    <DefaultSeo
      defaultTitle='Liber Genesis'
      description='Liber Genesis Front End.Visualize all conversations and impacts.'
      titleTemplate='%s | Liber Genesis Front End'
    />
    <Component {...pageProps} />
  </>)
}
