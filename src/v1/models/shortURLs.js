const { model, Schema } = require('mongoose');
const { uuid } = require('uuid');

const ShortURLsSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortURL: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

ShortURLsSchema.pre('save', async function (next) {
  this.shortURL = uuid();
  next();
});

module.exports = model('shortURLs', ShortURLsSchema);
