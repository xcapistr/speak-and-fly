import nodemailer from 'nodemailer'

export default function handler(req, res) {
  const data = JSON.parse(req.body)
  if (
    req.method === 'POST' &&
    data.name &&
    data.email &&
    data.message &&
    data.secret === process.env.SECRET
  ) {
    const name = data.name
    const email = data.email
    const message = data.message

    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })

    const options = {
      from: process.env.EMAIL,
      to: process.env.RECEIVER,
      subject: 'Správa z webu speakandfly.sk',
      html: `<h3>Správa z webu speakandfly.sk</h3><p>meno: ${name}</p><p>email: ${email}</p><p>${message}</p>`,
    }

    transporter.sendMail(options, (err, info) => {
      if (err) {
        return res.status(500).json({ message: 'Sending email failed', err })
      } else {
        return res.status(200).json({ message: 'Email has been sent', info })
      }
    })
  } else return res.status(400).json({ message: 'wrong request' })
}
