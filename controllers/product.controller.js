const Product = require('../models/Product.model')

module.exports.productController = {
  getProducts: async (req, res) => {
    try {
      const data = await Product.find()
      res.json(data)
    } catch (error) {
      res.json('ошибка в get')
    }
  },

  addProduct: async (req, res) => {
    try {
      const data = await Product.create({
        img: req.body.img,
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId
      })
      return res.json(data)
    } catch (error) {
      res.json('ошибка в create')
    }
  }
}