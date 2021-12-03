const ContactForm = () => {
  return (
    <form className="contact-form">
     <h3>Kontaktujte ma</h3>
    <p>Meno</p>
    <input type="text" autoCapitalize="words" placeholder="Jan Lasak"/>
    <p>Email</p>
    <input type="email" placeholder="jan.lasak@gmail.com"/>
    <p>Predmet</p>
    <input type="text" placeholder="Napíšte predmet správy"/>
    <p>Správa</p>
    <textarea rows={5} placeholder="Napíšte text správy" />
    <br />
    <button type="submit">Odoslať</button>
      <style jsx>{`
        .contact-form {
            background: white;
            border-radius: 10px;
            padding: 20px;
            border: 1px solid #ccc;
            color: #333;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }
        input, textarea {
            width: 100%;
            border-radius: 6px;
            background: #ddd;
            border: none;
            padding: 10px 16px;
            margin: 2px 0 16px;
            font-family: 'Titillium Web', sans-serif;
            font-size: 16px;
            color: #333;
            resize: none;
        }
        button {
            width: 100%;
            color: white;
            background: #262561;
            border-radius: 6px;
            padding: 15px;
            border: none;
            font-size: 14px;
            text-transform: uppercase;
        }
    `}</style>
    </form>
  )
}

export default ContactForm
