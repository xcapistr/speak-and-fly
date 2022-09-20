import { ContactForm, CopyButton } from '../components'

const Contact = ({
  secret,
  locale,
  title,
  locationTitle,
  locationDescription,
  emailTitle,
  emailValue,
  phoneTitle,
  phoneValue
}) => {
  return (
    <section id="contact">
      <h2>{title[locale]}</h2>
      <div className="contact-wrapper">
        <div>
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-wrapper">
                <img src="/location.svg" alt="location" />
              </div>
              <h3>{locationTitle[locale]}</h3>
              <p>{locationDescription[locale]}</p>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <img src="/mail.svg" alt="email" />
              </div>
              <h3>{emailTitle[locale]}</h3>
              <p>
                <a href="mailto:palockova.betty@gmail.com">{emailValue}</a>
                <CopyButton text="palockova.betty@gmail.com" />
              </p>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper">
                <img src="/call.svg" alt="phone" />
              </div>
              <h3>{phoneTitle[locale]}</h3>
              <p>
                <a href={`tel:${phoneValue.replaceAll(' ', '')}`}>
                  {phoneValue}
                </a>
                <CopyButton text={phoneValue} />
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm secret={secret} locale={locale}/>
        </div>
      </div>
      <style jsx>{`
        h2 {
          color: #fff;
        }
        #contact {
          background: #384983;
          color: white;
        }
        .contact-wrapper {
          margin: 0 auto;
          max-width: 1080px;
        }
        .contact-wrapper > * {
          flex: 1;
          padding: 20px;
        }
        .contact-info {
          padding: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          margin: 20px 20px 40px;
          align-items: center;
          flex: 1;
          max-width: 300px;
        }
        .contact-item > h3 {
          margin: 10px 0;
          font-size: 20px;
          text-transform: uppercase;
        }
        .contact-item > p,
        .contact-item > a {
          margin: 10px 0 0;
          text-align: center;
          color: #fffb;
        }
        .contact-item > p > b {
          color: #fff;
        }
        .icon-wrapper {
          padding: 17px;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          background-color: #a9d0e6;
        }
        .icon-wrapper > img {
          width: 35px;
          height: 35px;
        }
        @media only screen and (min-width: 768px) {
          .contact-info {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
