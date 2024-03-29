import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = ({ fixed, locale }) => {
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [menuOpened, setMenuOpened] = useState(false)

  const toggleMenu = () => {
    setMenuOpened(prev => {
      document.body.style.overflow = prev ? 'unset' : 'hidden'
      return !prev
    })
  }

  const handleScroll = () => {
    if (window.pageYOffset >= 350 && scrolledToTop) {
      setScrolledToTop(false)
      return
    }
    if (window.pageYOffset < 350 && !scrolledToTop) {
      setScrolledToTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolledToTop])

  const navItems = [
    { href: '#services', label: { sk: 'Služby', en: 'Services' } },
    { href: '#bio', label: { sk: 'O mne', en: 'About me' } },
    {
      href: '#certification',
      label: { sk: 'Certifikáty', en: 'Further qualifications' }
    },
    { href: '#references', label: { sk: 'Referencie', en: 'References' } },
    { href: '#contact', label: { sk: 'Kontakt', en: 'Contact' } }
  ]

  return (
    <div
      id="navigation"
      className={fixed ? 'fixed' : ''}
      style={{
        transform: `translateY(${scrolledToTop && fixed ? '-70px' : '0'})`,
        opacity: scrolledToTop && fixed ? '0' : '1'
      }}
    >
      {fixed ? (
        <AnchorLink href="#home" className="logo">
          <Image src="/logo2.svg" alt="Speak & fly" width="192" height="40" />
        </AnchorLink>
      ) : (
        <div></div>
      )}
      <nav id="desktop-navigation">
        <ul>
          {navItems.map((n, i) => (
            <li key={`${i}-${n.label}`}>
              <AnchorLink href={n.href}>{n.label[locale]}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav id="mobile-navigation" className={menuOpened ? 'open' : ''}>
        <ul>
          {navItems.map((n, i) => (
            <li key={`${i}-${n.label}`}>
              <AnchorLink href={n.href} onClick={toggleMenu}>
                {n.label[locale]}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        id={fixed ? 'menu-button-fixed' : 'menu-button'}
        aria-label="toggle navigation"
        className={menuOpened ? 'menu-button open' : 'menu-button'}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <style jsx>{`
        #navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 70px;
          padding: 0 10px;
          color: #fff;
          position: absolute;
          z-index: 5;
        }
        #navigation.fixed {
          background-color: #25325d;
          position: fixed;
          transition: transform 0.3s ease-out, opacity 0.3s ease-out;
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
          background-color: #25325d;
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
          transition: 0.2s visibility linear, 0.2s opacity linear;
        }
        #mobile-navigation.open {
          visibility: visible;
          opacity: 1;
        }
        #mobile-navigation > ul {
          list-style: none;
          padding: 0;
          text-align: center;
          transition: 0.3s transform ease-out;
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
          #menu-button,
          #menu-button-fixed {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Header
