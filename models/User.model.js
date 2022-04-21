const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  img: String,
  login: {
    type: String,
    unique: true,
  },
  amount: {
    type: String,
    default: null
  },
  password: String,
  image: {
    type: String,
    default: null
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
