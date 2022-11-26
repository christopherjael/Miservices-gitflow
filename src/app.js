const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbClient = require('./v1/db/config');

const app = express();

const PORT = process.env.PORT || 3000;

const paths = {
  v1: {
    home: '/api/v1',
    urlshorter: '/api/v1/urlshorter/',
    timeslamp: '/api/v1/timeslamp/',
    exerciseTracker: '/api/v1/exercisetracker/',
  },
};

//connect to mongodb
//dbClient();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
//timeslamp
app.use(paths.v1.timeslamp, require('./v1/routes/timestamp.routes'));

//urlshorter
app.use(paths.v1.urlshorter, require('./v1/routes/shortURL.routes'));

//exerciseTracker
app.use(paths.v1.exerciseTracker, require('./v1/routes/users.routes'));

//home
app.use(paths.v1.home, (req, res, next) => {
  return res.status(200).json({
    status: 'ok',
    msg: 'Welcome to Miservices',
    services: paths.v1,
  });
});

app.all('*', (req, res, next) => {
  return res.status(404).json({
    status: 'PAGE NOT FOUND',
    services: paths.v1,
  });
});

app.listen(PORT, () => {
  console.log('Server lintening on port ', PORT);
});
