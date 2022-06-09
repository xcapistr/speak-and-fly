import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/TitilliumWeb-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/TitilliumWeb-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Speak&fly - na krídlach angličtiny" />
          <meta property="og:description" content="Speak&fly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie." />
          <meta property="og:image" content="https://speak-and-fly.vercel.app/social.png" />
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:url" content="https://speak-and-fly.vercel.app" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Speak&fly - na krídlach angličtiny" />
          <meta name="twitter:description" content="Speak&fly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie." />
          <meta property="twitter:image" content="https://speak-and-fly.vercel.app/social.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
