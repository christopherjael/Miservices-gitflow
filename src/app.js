const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbClient = require('./v1/db/config');

const app = express();

const PORT = process.env.PORT || 3000;

const paths = {
  v1: {
    home: '/api/v1/',
    urlshorter: '/api/v1/urlshorter',
    timeslamp: '/api/v1/timeslamp',
    exerciseTracker: '/api/v1/exercisetracker',
    requesHeader: '/api/v1/requesheader',
    fileMetadata: '/api/v1/filemetadata',
  },
};

//connect to mongodb
dbClient();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
//home
app.use(paths.v1.home, (req, res, next) => {
  return res.status(200).json({
    status: 'ok',
    msg: 'Welcome to Miservices',
  });
});
//urlshorter
//app.use(paths.v1.urlshorter);

app.listen(PORT, () => {
  console.log('Server lintening on port ', PORT);
});
