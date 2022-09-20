import Head from 'next/head'
import { useRouter } from 'next/router'
import groq from 'groq'

import client from '../sanityClient'
import styles from '../styles/Home.module.css'

import {
  Hero,
  BioSection,
  Services,
  Certification,
  References,
  Contact
} from '../sections'
import { Header, Footer } from '../components'
import { useMemo } from 'react'

const Home = props => {
  const { locale } = useRouter()
  const isSk = useMemo(() => locale === 'sk', [locale])
  return (
    <div className={styles.container}>
      <Head>
        <title>Speakandfly</title>
        {/* 50 and 160 characters */}
        <meta
          name="title"
          content={
            isSk
              ? 'Speakandfly - na krídlach angličtiny'
              : 'Speakandfly - On the wings of English'
          }
        />
        <meta
          name="description"
          content={
            isSk
              ? 'Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie.'
              : 'Speakandfly provides professional English language courses focused on Technical, Aviation and Business English as well as technical translations and interpreting.'
          }
        />
        <meta
          name="keywords"
          content={
            isSk
              ? 'letecka anglictina, kurzy leteckej anglictiny, ICAO anglictina, anglictina pre pilotov, tlmocenie, anglictina pre personal letiska, anglictina pre palubny personal, letusky a stewardov, kurzy, anglictina pre pilotov a riadiach letovej prevazdky, technicka anglictina, kurzy technickej anglictiny, kurzy anglickeho jazyka, preklady, technicke preklady, AB initio, obchodna anglictina, vseobecna anglictina, alzbeta palockova, mgr. alzbeta palockova, icao, icao english, aviation english, aviation english courses'
              : 'aviation english, interpreting, English for Airport staff, English for Cabin crew, courses, English for Pilots and Air Traffic Controllers, technical english, translations, AB initio, business english, general english, icao, icao english'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
          content={
            isSk
              ? 'Speakandfly - na krídlach angličtiny'
              : 'Speakandfly - On the wings of English'
          }
        />
        <meta
          property="og:description"
          content={
            isSk
              ? 'Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie.'
              : 'Speakandfly provides professional English language courses focused on Technical, Aviation and Business English as well as technical translations and interpreting.'
          }
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
          content={
            isSk
              ? 'Speakandfly - na krídlach angličtiny'
              : 'Speakandfly - On the wings of English'
          }
        />
        <meta
          name="twitter:description"
          content={
            isSk
              ? 'Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie.'
              : 'Speakandfly provides professional English language courses focused on Technical, Aviation and Business English as well as technical translations and interpreting.'
          }
        />
        <meta
          property="twitter:image"
          content="https://speak-and-fly.vercel.app/social.png"
        />
      </Head>

      <Header locale={locale} />
      <Header fixed locale={locale} />

      <main className={styles.main}>
        <Hero {...props.header} locale={locale} />
        <Services {...props.services} locale={locale} />
        <BioSection {...props.bio} locale={locale} />
        <Certification {...props.certification} locale={locale} />
        <References {...props.references} locale={locale} />
        <Contact secret={props.secret} {...props.contact} locale={locale} />
      </main>
      <Footer contact={props.contact} locale={locale} />
    </div>
  )
}

const query = groq`*[_id in ["header", "services", "bio", "certification", "references", "contact"]]`

export const getServerSideProps = async () => {
  const data = await client.fetch(query)
  const props = {
    ...data.reduce(
      (obj, item) => ({
        ...obj,
        [item._id]: item
      }),
      {}
    ),
    secret: process.env.SECRET
  }
  return {
    props
  }
}

export default Home
