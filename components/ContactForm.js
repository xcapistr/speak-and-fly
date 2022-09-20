import { useMemo, useState } from 'react'
import { Spinner } from '.'

const ContactForm = ({ secret, locale }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [validations, setValidations] = useState({})

  const isSk = useMemo(() => locale === 'sk', [locale])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSuccess(false)
    if (!validate()) return
    setIsLoading(true)
    const response = await fetch(`/api/sendMail`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        message,
        secret
      })
    })
    if (response.status === 200) {
      setIsSuccess(true)
    }
    setIsLoading(false)
  }

  const validate = () => {
    const result = {}
    if (!name) {
      result.name = isSk ? 'Vyplňte meno' : 'Fill your name'
    }
    if (!email) {
      result.email = isSk ? 'Vyplňte email' : 'Fill your email'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      result.email = isSk
        ? 'Zadaná e-mailová adresa je nevalidná'
        : 'Email address is not valid'
    }
    if (!message) {
      result.message = isSk ? 'Vypňte správu' : 'Fill your message'
    }
    setValidations(result)
    return !Object.keys(result).length
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>{isSk ? 'Kontaktný formulár' : 'Contact form'}</h3>
      <div className="column">
        <p>{isSk ? 'Meno*' : 'Name*'}</p>
        <input
          className={validations.name ? 'error' : ''}
          type="text"
          autoCapitalize="words"
          placeholder={isSk ? 'Meno a priezvisko' : 'Full name'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p className="validation-message">{validations.name}</p>
      </div>
      <div className="column">
        <p>E-mail*</p>
        <input
          className={validations.email ? 'error' : ''}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className="validation-message">{validations.email}</p>
      </div>
      <p>{isSk ? 'Správa*' : 'Message*'}</p>
      <textarea
        className={validations.message ? 'error' : ''}
        rows={5}
        placeholder={isSk ? 'Napíšte text správy' : 'Write your message'}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <p className="validation-message">{validations.message}</p>
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        style={{ cursor: isLoading || isSuccess ? 'not-allowed' : 'pointer' }}
      >
        {isLoading || isSuccess ? (
          <Spinner done={isSuccess} />
        ) : isSk ? (
          'Odoslať'
        ) : (
          'Send'
        )}
      </button>
      {isSuccess && (
        <p className="success-message">
          {isSk
            ? 'Ďakujeme, vaša správa bola odoslaná. Čoskoro vás budeme kontaktovať.'
            : 'Thank you, your message has been sent. We will contact you soon.'}
        </p>
      )}
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
          display: inherit;
          height: 95px;
        }
        p {
          margin: 0 0 0 2px;
          font-size: 14px;
          color: #fffc;
        }
        p.validation-message {
          color: #ff8196;
        }
        input,
        textarea {
          width: 100%;
          border-radius: 6px;
          background-color: #fffd;
          border: none;
          padding: 10px 16px;
          margin: 2px 0 0;
          font-family: 'Titillium Web', sans-serif;
          font-size: 16px;
          color: #333;
          resize: vertical;
          border: 2px solid transparent;
        }
        input.error,
        textarea.error {
          border-color: #f64c72;
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
          color: #fff;
          background: #5c798b;
          border-radius: 6px;
          padding: 15px;
          border: none;
          font-size: 16px;
          text-transform: uppercase;
          font-weight: bold;
          margin: 10px auto 0;
          display: block;
          cursor: pointer;
          line-height: 25px;
        }

        .success-message {
          font-size: 16px;
          text-align: center;
          margin-top: 6px;
        }

        @media only screen and (min-width: 568px) {
          .column {
            display: inline-table;
            width: calc(50% - 10px);
          }
          .column:first-of-type {
            margin-right: 10px;
          }
          .column:last-of-type {
            margin-left: 10px;
          }
          button {
            width: 330px;
          }
        }
      `}</style>
    </form>
  )
}

export default ContactForm
