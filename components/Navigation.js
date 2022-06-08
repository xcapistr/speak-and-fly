import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = (props) => {
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened(prev => {
      document.body.style.overflow = prev ? 'unset' : 'hidden';
      return !prev;
    })
  }

  // const handleScroll = () => {
  //   if (window.pageYOffset >= 150 && scrolledToTop) {
  //     console.log('set to false')
  //     setScrolledToTop(false)
  //     return
  //   }
  //   if (window.pageYOffset < 150 && !scrolledToTop) {
  //     console.log('set to true')
  //     setScrolledToTop(true)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [scrolledToTop])

  const navItems = [
    { href: '#services', label: 'Služby' },
    { href: '#bio', label: 'O mne' },
    { href: '#certification', label: 'Certifikáty' },
    { href: '#references', label: 'Referencie' },
    { href: '#contact', label: 'Kontakt' },
  ]

  return (
    <div id="navigation">
      <Link href="/#home" className="logo">
        <a>
          <Image src="/logo2.svg" alt="Speak & fly" width="192" height="40" />
        </a>
      </Link>
      <nav id="desktop-navigation">
        <ul>
          {navItems.map((n, i) => (
            <li key={`${i}-${n.label}`}>
              <Link href={n.href}>
                <a>{n.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav id="mobile-navigation" className={menuOpened ? 'open' : ''}>
        <ul>
          {navItems.map((n, i) => (
            <li key={`${i}-${n.label}`}>
              <Link href={n.href} >
                <a onClick={toggleMenu}>{n.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button id="menu-button" className={menuOpened ? 'menu-button open' : 'menu-button'} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <style jsx>{`
        #navigation {
          background-color: #25325D;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100vw;
          height: 70px;
          padding: 0 10px;
          color: #fff;
          position: fixed;
          z-index: 5;
        }
     
        #desktop-navigation > ul {
          list-style: none;
          display: none;
          margin: 0;
          padding: 0;
        }
        #desktop-navigation > ul > li {
          margin: 0 20px;
        }
        #mobile-navigation {
          background-color: #25325D;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          visibility: hidden;
          opacity: 0;
          transition: .2s visibility linear, .2s opacity linear;
        }
        #mobile-navigation.open {
            visibility: visible;
            opacity: 1;
        }
        #mobile-navigation > ul {
          list-style: none;
          padding: 0;
          text-align: center;
          transition: .3s transform ease-out;
        }
        #mobile-navigation.open > ul {
            transform: scale(1.3);
        }
        .menu-button {
          width: 42px;
          height: 42px;
          outline: none;
          border: none;
          background-color: transparent;
          padding: 10px 11px 17px;
          cursor: pointer;
          border-radius: 5px;
          -webkit-tap-highlight-color: transparent;
          z-index: 5;
        }

        .menu-button:active {
          background-color: #fff1;
        }

        .menu-button > div {
          width: 20px;
          height: 2px;
          background-color: #fff;
          border-radius: 1px;
          position: relative;
        }

        .menu-button > div:first-child {
          -webkit-transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear,
            -webkit-transform 0.2s linear;
          top: 0;
        }

        .menu-button > div:nth-child(2) {
          -webkit-transition: background-color 0.2s linear;
          transition: background-color 0.2s linear;
          top: 4px;
        }

        .menu-button > div:last-child {
          -webkit-transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear,
            -webkit-transform 0.2s linear;
          top: 8px;
        }

        .menu-button.open > div:first-child {
          -webkit-transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear,
            -webkit-transform 0.2s linear;
          top: 6px;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        .menu-button.open > div:nth-child(2) {
          -webkit-transition: background-color 0.2s linear;
          transition: background-color 0.2s linear;
          background-color: #ffffff00;
        }

        .menu-button.open > div:last-child {
          -webkit-transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: top 0.2s linear, -webkit-transform 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear;
          transition: transform 0.2s linear, top 0.2s linear,
            -webkit-transform 0.2s linear;
          top: 2px;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        @media only screen and (min-width: 765px) {
          #desktop-navigation > ul {
            display: flex;
          }
          #menu-button {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Navigation
