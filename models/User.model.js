const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  img: String,
  login: {
    type: String,
    unique: true,
  },
  nickName: {
    type: String,
    default: null,
  },
  amount: {
    type: String,
    default: 0,
  },
  password: String,
  image: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
