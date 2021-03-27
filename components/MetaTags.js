import NextHead from 'next/head'

const MetaTags = ({ url, title, description, image }) => (
  <NextHead>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@matiasleidemer" />
    <meta name="twitter:creator" content="@matiasleidemer" />

    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content={
        image ||
        'https://matiasleidemer.dev/favicons/android-chrome-512x512.png'
      }
    />
  </NextHead>
)

export default MetaTags
