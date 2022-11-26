const { model, Schema } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const ShortURLsSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortURL: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

ShortURLsSchema.pre('save', async function (next) {
  this.shortURL = uuidv4();
  next();
});

module.exports = ShortURLsSchema;
