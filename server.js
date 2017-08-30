const express = require('express');
const winston = require('winston');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const baseurlDisplay = () => {
  const baseurl = 'http://localhost:' + PORT + '/';
  winston.info('Listening on port: %s', PORT);
  winston.info('Connection with URL %s', baseurl);
};

app.listen(PORT, (err) => {
  (err) ? winston.error(err) : baseurlDisplay();
});


app.get('/', (req, res) =>{
  res.render('index', {
    title: 'Recipes',
  });
});

app.get('/contact', (req, res) =>{
  res.render('contact', {
    title: 'Contact',
  });
});

app.get('/topPicks', (req, res) =>{
  res.render('topPicks', {
    title: 'Top Recipes',
  });
});