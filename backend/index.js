const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is running.');
});

app.listen(port, err => {
  console.log(`Listening on port: ${port}`);
});
