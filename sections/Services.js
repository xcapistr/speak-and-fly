import { ServiceCard } from '../components'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const urlFor = source => imageUrlBuilder(client).image(source)

const Services = props => {
  return (
    <section id="services">
      <h2>{props.title[props.locale]}</h2>
      <div className="services-wrapper">
        {props.items.map(i => (
          <ServiceCard
            key={i._key}
            title={i.title[props.locale]}
            subtitle={i.subtitle[props.locale]}
            description={i.description[props.locale]}
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
            padding: 10px;
            align-items: stretch;
          }
          @media only screen and (min-width: 800px) {
            .services-wrapper {
              flex-direction: row;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </section>
  )
}

export default Services
