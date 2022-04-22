const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  img: String,
  name: String,
  price: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product