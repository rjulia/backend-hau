const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  token: {
    type: String,
  },
  favorites: [{ 
    type: Number, 

  }]
});


const User = mongoose.model('User', userSchema);

exports.User = User; 
