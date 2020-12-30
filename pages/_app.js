import '../styles/globals.css'
import '../styles/prism-material-dark.css'

import React from 'react'
import { ThemeProvider } from 'next-themes'

import Head from '@/components/Head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head title="Matias Leidemer | Software Developer"></Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
