const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
  _id: String,
  name: String,
  email: String
});

const UserModel = mongoose.model('User', UserScheme);

module.exports = UserModel;
