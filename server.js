const express = require('express');
const winston = require('winston');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));

const baseurlDisplay = () => {
  const baseurl = 'http://localhost:' + PORT + '/';
  winston.info('Listening on port: %s', PORT);
  winston.info('Connection with URL %s', baseurl);
};

app.listen(PORT, (err) => {
  (err) ? winston.error(err) : baseurlDisplay();
});
