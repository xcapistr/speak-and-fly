import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <div className="description">
          <img className="logo" src="/logo3.svg" alt="logo" />
          <p>
            Speak&fly poskytuje profesionálne kurzy anglického jazyka zamerané
            na výučbu odbornej angličtiny, odborné preklady a tlmočenie.
          </p>
        </div>
        <div className="links">
          <h3>Odkazy</h3>
          <ul>
            <li>Kurzy</li>
            <li>Testovanie</li>
            <li>Preklady</li>
            <li>ICAO</li>
            <li>ENG-NAV</li>
          </ul>
        </div>
        <div className="contacts">
          <h3>Kontakt</h3>
          <ul>
            <li>
              <img src="/call.svg" alt="phone" />
              <p>+421 324 456 234</p>
            </li>
            <li>
              <img src="/mail.svg" alt="email" />
              <p>betty.palockova@gmail.com</p>
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
          background-color: #333;
        }
        .footer-nav {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          padding: 40px 0 50px;
        }
        .footer-nav > div {
          padding: 20px;
        }
        .description,
        .contacts {
          flex: 4;
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
          padding-left: 20px;
          width: 80%;
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
          background-color: #222;
          padding: 25px;
        }
        .copyright > p {
          margin: 0;
          text-align: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer
