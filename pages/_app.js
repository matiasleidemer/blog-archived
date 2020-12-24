import Head from '@/components/Head'
import React from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head title="Matias Leidemer | Software Developer"></Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
