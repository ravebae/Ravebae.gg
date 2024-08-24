import express from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import googleapis from 'googleapis';

const app = express();
const PORT = 5001;

dotenv.config({ path: '../.env' });

const { google } = googleapis;
const OAUTH2 = google.auth.OAuth2;

const createTransporter = async () => {
  try {
    const oauth2Client = new OAUTH2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log('ERR', err);
          reject();
        }
        resolve(token);
      });
    });

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    return transporter;
  } catch (err) {
    return err;
  }
};

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});

app.post('/user/verify_email', async (req, res) => {
  // Get data from form
  console.log(req.params, req.body);

  const mail = {
    from: process.env.USER_EMAIL,
    to: 'yamiremuru@gmail.com',
    subject: 'Verify code',
    html: `
      <p>Your verification code: 123</p>
    `,
  };

  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(mail, (e) => {
    if (e) {
      res.json(e);
    } else {
      res.status(200).json({
        status: 'sent',
        timestamp: Date.now(),
      });
    }
  });
  // contactEmail.sendMail(mail, (e) => {
  //   if (e) {
  //     res.json(e);
  //   } else {
  //     res.status(200).json({
  //       status: 'sent',
  //       timestamp: Date.now(),
  //     });
  //   }
  // });
});
