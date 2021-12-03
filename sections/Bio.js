import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const urlFor = (source) => imageUrlBuilder(client).image(source)

const BioSection = (props) => {
  return (
    <section id="bio">
      <h2>{props.title.sk}</h2>
      <div className="bio-row">
        <div className="image-wrapper">
          <Image
            src={urlFor(props.image).url()}
            alt="photo of me"
            width="400"
            height="400"
            className="bio-image"
          />
        </div>
        <div>
          <BlockContent
            blocks={props.about.sk}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="bio-row">
          <div>
            <BlockContent
              className="left-paragraph"
              blocks={props.leftParagraph.sk}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>
          <div>
            <BlockContent
              className="right-paragraph"
              blocks={props.rightParagraph.sk}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        #bio {
          background-color: #eef;
          padding-bottom: 0;
        }
        .wrapper {
          /* background: rgb(36,62,120);
          background: linear-gradient(90deg, rgba(36,62,120,1) 0%, rgba(16,37,82,1) 100%); */
          background: rgb(88,178,126);
          background: radial-gradient(ellipse at 120% 120%, rgba(88,178,126,1) 0%, rgba(13,101,144,1) 50%, rgba(3,31,62,1) 100%);
          color: #fff;
        }
        .bio-row {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          margin: 0 auto;
          max-width: 1000px;
          box-sizing: border-box;
        }
        .bio-row > div:not(.image-wrapper) {
          margin: 30px;
        }
        .bio-row:last-of-type {
          padding-bottom: 40px;
        }
        .bio-row:first-of-type > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .image-wrapper {
          border-radius: 50%;
          overflow: hidden;
          background-color: #fff;
          width: 200px;
          height: 200px;
          margin: 20px auto 0;
        }
        @media only screen and (min-width: 765px) {
          .bio-row {
            flex-direction: row;
          }
          .bio-row > div {
            flex: 1;
          }
          .bio-row > div:first-child {
            margin-right: 30px;
          }
          .bio-row > div:last-child {
            margin-left: 30px;
          }
          .image-wrapper {
            border-radius: 0;
            background-color: transparent;
            width: inherit;
            height: inherit;
            margin: inherit;
          }
        }
      `}</style>
    </section>
  )
}

export default BioSection
