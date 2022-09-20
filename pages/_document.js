import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sk">
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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://speakandfly.sk",
              "logo": "https://speakandfly.sk/logo.png"
            }
          `
            }}
          ></script>

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Speakandfly - na krídlach angličtiny"
          />
          <meta
            property="og:description"
            content="Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie."
          />
          <meta
            property="og:image"
            content="https://speak-and-fly.vercel.app/social.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://speak-and-fly.vercel.app" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Speakandfly - na krídlach angličtiny"
          />
          <meta
            name="twitter:description"
            content="Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie."
          />
          <meta
            property="twitter:image"
            content="https://speak-and-fly.vercel.app/social.png"
          />

          <meta name="theme-color" content="#384983" />
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
