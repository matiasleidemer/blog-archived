import '../styles/globals.css'
import '../styles/prism-material-dark.css'

import React from 'react'
import { ThemeProvider } from 'next-themes'

import Head from '@/components/Head'
import Container from '@/components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head title="Matias Leidemer | Software Developer"></Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
