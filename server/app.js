import functions from 'firebase-functions';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();
const PORT = 5001;

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {},
});

contactEmail.verify((e) => {
  if (e) {
    console.log('Error', e);
  } else {
    console.log('ready to send');
  }
});
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});

app.post('/user/verify_email', (req, res) => {
  // Get data from form
  console.log(req.params, req.body);

  const mail = {
    from: 'test',
    to: '',
    subject: 'verify code',
    html: `
      <p>Your verification code: 123</p>
    `,
  };

  contactEmail.sendMail(mail, (e) => {
    if (e) {
      res.json(e);
    } else {
      res.status(200).json({
        status: 'sent',
        timestamp: Date.now(),
      });
    }
  });
});

let api = functions.https.onRequest(app);

export default api;
