const mongoose = require('mongoose');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please enter a email address'],
    unique: true,
    lowercase: true,
    // Using 3rd party library to validate email address
    validate: [isEmail, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
