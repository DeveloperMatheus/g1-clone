import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from 'styles/chakra-ui-config'
import 'styles/globals.css'
import Head from 'next/head'

import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])

  return (
    <>
      <Head>
        <title>G1 - O portal de notícias da Globo</title>
        <meta
          name="description"
          content="Últimas notícias do Brasil e do mundo, sobre política, economia, emprego, educação, saúde, meio ambiente, tecnologia, ciência, cultura e carros. Vídeos dos telejornais da TV Globo e da GloboNews."
        />
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
