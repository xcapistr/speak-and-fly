import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import groq from 'groq'
import client from '../sanityClient'

import {
  Header,
  BioSection,
  Services,
  Certification,
  References,
  Contact,
} from '../sections'
import { Navigation, Footer } from '../components'

const Home = (props) => (
  <div
    className={styles.container}
  >
    <Head>
      <title>Speak & fly</title>
      {/* 50 and 160 characters */}
      <meta
        name="description"
        content="Kurzy anglického jazyka, testovanie, tlmočenie a preklady"
      />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <Navigation />

    <Header {...props.header} />

    <main className={styles.main}>
      <Services {...props.services} />
      <BioSection {...props.bio} />
      <Certification {...props.certification} />
      <References {...props.references} />
      <Contact />
    </main>
    <Footer />
  </div>
)

const query = groq`*[_id in ["header", "services", "bio", "certification", "references"]]`

Home.getInitialProps = async (context) => {
  const data = await client.fetch(query)
  return data.reduce(
    (obj, item) => ({
      ...obj,
      [item._id]: item,
    }),
    {},
  )
}

export default Home
