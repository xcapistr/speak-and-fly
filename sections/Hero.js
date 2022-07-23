import { useState, useEffect } from 'react'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import NextImage from 'next/image'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const urlFor = (source) => imageUrlBuilder(client).image(source)

const Hero = (props) => {
  const [currentImage, setCurrentImage] = useState(
    urlFor(props.image).width(20).url(),
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchImage(urlFor(props.image).url())
  }, [props.image])

  const fetchImage = (src) => {
    const image = new Image()
    image.onload = () => {
      setCurrentImage(loadingImage.src)
      setIsLoading(false)
    }
    image.src = src
    const loadingImage = image
  }

  return (
    <header id="home">
      <div className="content">
        <h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo" src="/logo-simple.svg" alt="logo" />
          speak<span>&</span>fly
        </h1>
        <p>Na krídlach angličtiny</p>
      </div>
      <div className="mask">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <AnchorLink href="#services">
        <div className="arrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <NextImage
            src="/arrowbtn.svg"
            alt="continue to next section"
            width={40}
            height={40}
            priority
          />
        </div>
      </AnchorLink>
      <style jsx>{`
          header {
              background-image: url('${currentImage}');
              background-size: cover;
              background-position-x: center;
              background-position-y: center;
              font-family: 'Titillium Web', sans-serif;
              position: relative;
          }
          .content {
            width: 100%;
            height: 80vh;
            min-height: 450px;
            max-height: 1000px;
            backdrop-filter: ${isLoading ? 'blur(20px)' : 'blur(0px)'};
            -webkit-backdrop-filter: ${isLoading ? 'blur(20px)' : 'blur(0px)'};
            transition: .5s backdrop-filter linear, .5s -webkit-backdrop-filter linear; 
            background-color: #26256199;
            background: linear-gradient( #26256133 0%, #26256157 90%, #2d3083 100%);
            padding: 60px 20px 95px;
            z-index: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
          h1 {
            font-size: 64px;
            font-weight: bold;
            position: relative;
          }
          .logo {
            width: 100px;
            height: 56px;
            position: absolute;
            left: -48px;
          }
          h1 > span {
            color: #e45d73;
          }
          p {
            font-size: 24px;
            letter-spacing: 5px;
            margin-top: 0;
            text-align: center;
          }

          .mask {
            position: absolute;
            bottom: -35px;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            align-items: flex-end;
          }

          .mask > div:first-child,
          .mask > div:last-child {
            flex: 1;
            background-color: #fff;
            height: 70px;
          }

          .mask > div:first-child {
            border-radius: 0 35px 0 0;
          }

          .mask > div:nth-child(2) {
            width: 110px;
            background-color: #2d3083;
            border-radius: 0 0 35px 35px;
            height: 35px;
          }

          .mask > div:last-child {
            border-radius: 35px 0 0 0;
          }

          .arrow {
            position: absolute;
            margin: 0 auto;
            bottom: -25px;
            left: calc(50% - 20px);
          }

          .arrow > img {
            width: 40px;
            height: 40px;
          }

          @media only screen and (min-width: 765px) {
            .content {
              height: 90vh;
            }
            h1 {
              font-size: 112px;
              margin-bottom: 20px;
            }
            .logo {
              width: 180px;
              height: 100px;
              left: -88px;
            }
            p {
              font-size: 32px;
              letter-spacing: 20px;
            }
          }
    `}</style>
    </header>
  )
}

export default Hero
