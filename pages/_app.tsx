import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'

import Head from '../components/Head'
import Container from '../components/Container'

import '../styles/globals.css'
import '../styles/dark-code.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head title="Matias Leidemer | Software Developer"></Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default App
