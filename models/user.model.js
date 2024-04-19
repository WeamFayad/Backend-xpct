const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: {
    type: Number,
    min: [18, 'Min age is 18'], 
    max: [30, 'Max age is 30'], 
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
