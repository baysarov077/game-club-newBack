const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  text: String,
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  }
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message