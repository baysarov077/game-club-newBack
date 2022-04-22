const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  productId: Number,
  amount: Number
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart