const { createConnection, connect } = require('mongoose');

const shorturlConnetionFactory = () => {
  try {
    const conn = createConnection(process.env.MONGODB_URI_SHORTURL, {
      useNewUrlParser: true,
    });
    conn.model('shortURLs', require('../models/shortURLs.js'));
    console.log('Database connection established');
    return conn;
  } catch (error) {
    throw new Error(error.message);
  }
};

const trackerConnection = async () => {
  try {
    await connect(process.env.MONGODB_URI_TRACKER);
    console.log('Database connection established');
  } catch (error) {
    throw new Error(error.message);
  }
};

const ShortURLsconn = shorturlConnetionFactory();

const ShortURLs = ShortURLsconn.models.shortURLs;
module.exports = {
  ShortURLs,
  trackerConnection,
};
