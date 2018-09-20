const mongoose = require('mongoose');
const { MONGODB } = require('../config');

mongoose.connect(MONGODB);

const db = mongoose.connection;
db.on('error', () => console.error('The connection to database could not be established.'));
db.once('open', () => console.log('Connection to database established.'));

const userSchema = mongoose.Schema({
  username: String,
  googleId: String,
  wishList: [String],
  recentlyViewed: [String],
  totalSpent: Number,
  shippingAddress: String,
});

const User = mongoose.model('User', userSchema);

const itemSchema = mongoose.Schema({
  category: String,
  name: String,
  price: Number,
  releaseDate: Date,
  description: String,
  // quantity per size
  quantity: {},
  // amount sold per size
  amountSold: {},
  // array of all colors in item
  color: [String],
  // materials per component
  materials: {},
  // associated collection
  associatedCollection: String,
  // country
  origin: String,
  images: [String]
});

const Item = mongoose.model('Item', itemSchema);

module.exports.Item = Item;
module.exports.User = User;