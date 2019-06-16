const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// routes
router(app);

// error handler
app.use(function(error, req, res, next) {
  console.error(error.message);
  res.status(error.statusCode || 500).send(error.message);
});

app.listen(port, err => {
  console.log(`Listening on port: ${port}`);
});
