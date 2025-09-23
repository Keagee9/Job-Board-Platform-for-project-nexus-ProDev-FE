
require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');

// Check if serviceAccountKey.json exists
let serviceAccount;
try {
  serviceAccount = require('./serviceAccountKey.json');
} catch (error) {
  console.error('Error: serviceAccountKey.json not found.');
  console.error('Please add your Firebase service account key to a file named serviceAccountKey.json in the backend directory.');
  process.exit(1);
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
