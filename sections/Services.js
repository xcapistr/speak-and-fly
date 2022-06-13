import { ServiceCard } from '../components'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const urlFor = (source) => imageUrlBuilder(client).image(source)

const Services = (props) => {
  return (
    <section id="services">
      <h2>{props.title.sk}</h2>
      <div className="services-wrapper">
        {props.items.map((i) => (
          <ServiceCard
            key={i._key}
            title={i.title.sk}
            subtitle={i.subtitle.sk}
            description={i.description.sk}
            image={urlFor(i.image).url()}
          />
        ))}
      </div>
      <style jsx>
        {`
          #services {
            padding-top: 100px;
          }
          .services-wrapper {
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 10px;
          }
          @media only screen and (min-width: 800px) {
              .services-wrapper {
                flex-direction: row;
              }
          }
        `}
      </style>
    </section>
  )
}

export default Services
