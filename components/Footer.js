import Image from 'next/image'

const Footer = ({ locale, contact }) => {
  return (
    <footer>
      <div className="footer-nav">
        <div className="description">
          <img className="logo" src="/logo3.svg" alt="logo" />
          <p>
            {locale === 'sk'
              ? 'Speakandfly poskytuje profesionálne kurzy anglického jazyka zamerané na výučbu odbornej angličtiny, odborné preklady a tlmočenie.'
              : 'Speakandfly provides professional English language courses focused on Technical, Aviation and Business English as well as technical translations and interpreting.'}
          </p>
        </div>
        <div className="links">
          <h3>{locale === 'sk' ? 'Odkazy' : 'Links'}</h3>
          <ul>
            <li>
              <a href="https://www.icao.int/" target="_blank" rel="noreferrer">
                ICAO
              </a>
            </li>
            <li>
              <a href="https://eng-nav.com/" target="_blank" rel="noreferrer">
                ENG-NAV
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts">
          <h3>{contact.title[locale]}</h3>
          <ul>
            <li>
              <img src="/call.svg" alt="phone" />
              <p>{contact.phoneValue}</p>
            </li>
            <li>
              <img src="/mail.svg" alt="email" />
              <p>{contact.emailValue}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Speak and fly ⓒ 2021</p>
      </div>
      <style jsx>{`
        footer {
          color: #ccc;
          background-color: #413e4b;
        }
        .footer-nav {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          padding: 40px 0 50px;
          flex-direction: column;
        }
        .footer-nav > div {
          padding: 20px;
        }
        .description,
        .contacts {
          flex: 4;
        }
        .footer-nav > .links,
        .footer-nav > .contacts {
          padding-left: 40px;
        }
        .links {
          flex: 2;
        }
        .logo {
          opacity: 0.8;
          width: 150px;
          height: 40px;
        }
        .description > p {
          text-align: left;
          padding: 0 20px;
          margin: 6px 0;
        }
        .contacts > ul > li {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .contacts > ul > li > img {
          height: 18px;
          margin-right: 10px;
          opacity: 0.7;
        }
        .contacts > ul > li > p {
          margin: 0;
        }
        h3 {
          height: 40px;
          line-height: 40px;
          margin: 0;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 6px 0;
        }
        li {
          margin-bottom: 5px;
        }
        .copyright {
          width: 100%;
          background-color: #302e37;
          padding: 25px;
        }
        .copyright > p {
          margin: 0;
          text-align: center;
        }

        @media only screen and (min-width: 768px) {
          .footer-nav {
            flex-direction: row;
          }
          .footer-nav > .links,
          .footer-nav > .contacts {
            padding-left: 20px;
          }
        }

        @media only screen and (min-width: 1080px) {
          .description > p {
            width: 80%;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
