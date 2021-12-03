import { ContactForm } from '../components'

const Contact = (props) => {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <div className="contact-wrapper">
        <div>
          <ul className="contact-info">
            <li>
              <div className="icon-wrapper">
                <img src="/location.svg" alt="location" />
              </div>
              <p>
                Sunt non irure dolore sunt in amet qui amet voluptate in veniam
                officia officia.
              </p>
            </li>
            <li>
              <div className="icon-wrapper">
                <img src="/mail.svg" alt="email" />
              </div>
              <p>jkhkjh@kjhkj.sk</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <img src="/call.svg" alt="phone" />
              </div>
              <p>+421 879 765 890</p>
            </li>
            <li>
              <div className="icon-wrapper">
                <img src="/logo-linkedin.svg" alt="phone" />
              </div>
              <p>LinkedIn</p>
            </li>
          </ul>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <style jsx>{`
        #contact {
          background: rgb(88, 178, 126);
          background: radial-gradient(
            ellipse at 120% 120%,
            rgba(88, 178, 126, 1) 0%,
            rgba(13, 101, 144, 1) 50%,
            rgba(3, 31, 62, 1) 100%
          );
          color: white;
        }
        .contact-wrapper {
          margin: 0 auto;
          max-width: 800px;
          display: flex;
          flex-direction: column;
        }
        .contact-wrapper > * {
          flex: 1;
          padding: 20px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0 20px;
        }
        li {
          display: flex;
          flex-direction: column;
          margin: 20px 0 40px;
          align-items: center;
        }
        li > p {
          margin: 0;
          line-height: 25px;
        }
        .icon-wrapper {
          margin: 0 0 20px 0;
          padding: 10px;
          border: 2px solid white;
          border-radius: 50%;
          width: 49px;
          height: 49px;
        }
        .icon-wrapper > img {
          width: 25px;
          height: 25px;
        }
        @media only screen and (min-width: 568px) {
          .contact-wrapper {
            flex-direction: row;
            align-items: center;
          }
          li {
            display: flex;
            flex-direction: row;
            margin: 20px 0 40px;
          }
          .icon-wrapper {
            margin: 0 20px 0 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
