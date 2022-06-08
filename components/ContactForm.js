const ContactForm = () => {
  return (
    <form className="contact-form">
      <h3>Kontaktný formulár</h3>
      <div className="column">
        <p>Meno</p>
        <input type="text" autoCapitalize="words" placeholder="Meno a priezvisko" />
      </div>
      <div className="column">
        <p>Email</p>
        <input type="email" placeholder="vasemail@gmail.com" />
      </div>
      <p>Správa</p>
      <textarea rows={5} placeholder="Napíšte text správy" />
      <button type="submit">Odoslať</button>
      <style jsx>{`
        .contact-form {
          padding: 10px;
          color: #fff;
        }
        h3 {
          text-align: center;
          text-transform: uppercase;
          font-size: 20px;
        }
        .column {
          display: inherit
        }
        p {
          margin: 0 0 0 2px;
          font-size: 14px;
          color: #fffc;
        }
        input,
        textarea {
          width: 100%;
          border-radius: 6px;
          background-color: #fffd;
          border: none;
          padding: 10px 16px;
          margin: 2px 0 10px;
          font-family: 'Titillium Web', sans-serif;
          font-size: 16px;
          color: #333;
          resize: vertical;
        }

        ::placeholder {
          color: #333a;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          color: #333a;
        }

        ::-ms-input-placeholder {
          color: #333a;
        }

        button {
          width: 100%;
          max-width: 100%;
          color: white;
          background: #A9D0E6;
          border-radius: 6px;
          padding: 15px;
          border: none;
          font-size: 14px;
          text-transform: uppercase;
          font-weight: bold;
          margin: 10px auto 0;
          display: block;
          cursor: pointer;
        }

        @media only screen and (min-width: 568px) {
          .column {
            display: inline-block;
            width: calc(50% - 10px);
          }
          .column:first-of-type {
            margin-right: 10px;
          }
          .column:last-of-type {
            margin-left: 10px;
          }
          button {
            padding: 20px;
            width: 330px;
          }
        }
      `}</style>
    </form>
  )
}

export default ContactForm
