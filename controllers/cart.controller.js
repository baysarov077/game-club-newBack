const Cart = require('../models/Cart.model')

module.exports.cartController = {
  addCart: async (req, res) => {
    try {
     const cart = await Cart.create({
        productId: req.body.productId,
        amount: req.body.amount
      })
      res.json(cart)
    } catch (error) {
      res.json(error + 'Ошибка в Cart.create')
    }
  },

  getCart: async (req, res) => {
    try {
      const cart = await Cart.find()
      res.json(cart)
    } catch (error) {
      res.json(error + 'Ошибка в Cart.find')
    }
  }
}