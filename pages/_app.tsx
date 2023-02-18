import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import Head from '../components/Head'
import Container from '../components/Container'

import '../styles/globals.css'
import '../styles/dark-code.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q6CPX728G2"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q6CPX728G2');
        `}
      </Script>

      <ThemeProvider attribute="class" defaultTheme="system">
        <Head title="Matias Leidemer | Software Developer"></Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
