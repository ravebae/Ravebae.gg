import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5001;

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Test');
});

app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
});

app.post('/user/verify_email', (req, res) => {});

let api = functions.https.onRequest(app);

export default api;
