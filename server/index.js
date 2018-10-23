require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// these are for production. Clean it up later.
// app.use(express.static(path.join(__dirname, '/../client/dist/'))).use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist', 'index.jsx'));
// });

app.use(express.static(path.join(__dirname, '/../client/dist/'))).use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.jsx'));
});

app.listen(PORT, () => console.log(`EnF Random Character Generator listening on ${PORT}`));
