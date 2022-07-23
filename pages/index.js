import Head from 'next/head'
import styles from '../styles/Home.module.css'
import groq from 'groq'
import client from '../sanityClient'

import {
  Hero,
  BioSection,
  Services,
  Certification,
  References,
  Contact,
} from '../sections'
import { Header, Footer } from '../components'

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Speak & fly</title>
        {/* 50 and 160 characters */}
        <meta name="title" content="Speak&fly - na krídlach angličtiny" />
        <meta
          name="description"
          content="Speak&fly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie."
        />
        <meta
          name="keywords"
          content="letecka anglictina, kurzy leteckej anglictiny, ICAO anglictina, anglictina pre pilotov, tlmocenie, anglictina pre personal letiska, anglictina pre palubny personal, letusky a stewardov, kurzy, anglictina pre pilotov a riadiach letovej prevazdky, technicka anglictina, kurzy technickej anglictiny, kurzy anglickeho jazyka, preklady, technicke preklady, AB initio, obchodna anglictina, vseobecna anglictina, alzbeta palockova, mgr. alzbeta palockova, icao, icao english, aviation english, aviation english courses"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Header fixed />

      <main className={styles.main}>
        <Hero {...props.header} />
        <Services {...props.services} />
        <BioSection {...props.bio} />
        <Certification {...props.certification} />
        <References {...props.references} />
        <Contact secret={props.secret} />
      </main>
      <Footer />
    </div>
  )
}

const query = groq`*[_id in ["header", "services", "bio", "certification", "references"]]`

export const getStaticProps = async () => {
  const data = await client.fetch(query)
  const props = {
    ...data.reduce(
      (obj, item) => ({
        ...obj,
        [item._id]: item,
      }),
      {},
    ),
    secret: process.env.SECRET,
  }
  console.log('props', props);
  return {
    props,
  }
}

export default Home
