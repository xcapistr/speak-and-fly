import Image from 'next/image'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const urlFor = (source) => imageUrlBuilder(client).image(source)

const References = (props) => {
  return (
    <section id="references">
      <h2>{props.title.sk}</h2>
      <div className="references-wrapper">
        {props.items.map((r) => (
          <a key={r._key} className="reference" href={r.link}>
            <Image
              className="reference-logo"
              src={urlFor(r.image).width(200).height(200).url()}
              alt={r.name}
              width={200}
              height={110}
            />
          </a>
        ))}
      </div>
      <div className="filter"></div>
      <style jsx>{`
        section {
          background-color: #eee;
          background-image: url('/airport.png');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .filter {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background: #0000ff1f;
          z-index: 0;
        }
        .references-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 10px;
        }
        .reference {
          background-color: #fff;
          padding: 20px;
          margin: 10px;
          width: calc(50% - 20px);
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          z-index: 1;
        }
        @media only screen and (min-width: 568px) {
          .reference {
            width: calc(33.3% - 40px);
            margin: 20px;
          }
        }
        @media only screen and (min-width: 765px) {
          .reference {
            width: calc(25% - 40px);
          }
        }
      `}</style>
    </section>
  )
}

export default References
