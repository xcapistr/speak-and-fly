import { useState, useEffect } from 'react'
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import NextImage from 'next/image'
import Link from 'next/link'

const urlFor = (source) => imageUrlBuilder(client).image(source)

const Header = (props) => {
  const [currentImage, setCurrentImage] = useState(
    urlFor(props.image).width(20).url(),
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchImage(urlFor(props.image).url())
  }, [])

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
    <header>
      <div className="content">
        <h1>
          speak<span>&</span>fly
        </h1>
        <p>Na krídlach angličtiny</p>
      </div>
      <div className="mask">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link href="#services">
        <a className="arrow">
          <NextImage
            src="/arrowbtn.svg"
            alt="continue to next section"
            width={40}
            height={40}
          />
        </a>
      </Link>
      <style jsx>{`
          header {
              background-image: url('${currentImage}');
              background-size: cover;
              background-position-x: 80%;
              background-position-y: center;
              font-family: 'Titillium Web', sans-serif;
              position: relative;
          }
          .content {
            width: 100%;
            height: 90vh;
            min-height: 500px;
            max-height: 1000px;
            backdrop-filter: ${isLoading ? 'blur(20px)' : 'blur(0px)'};
            -webkit-backdrop-filter: ${isLoading ? 'blur(20px)' : 'blur(0px)'};
            transition: .5s backdrop-filter linear, .5s -webkit-backdrop-filter linear; 
            background-color: #26256199;
            background: linear-gradient( #26256199 0%, #26256199 90%, #262561ff 100%);
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
            background-color: #262561;
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
            h1 {
              font-size: 112px;
              margin-bottom: 20px;
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

export default Header
