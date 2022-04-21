const { Router } = require('express')
const { productController } = require('../controllers/product.controller')

const router = Router()

router.get('/products', productController.getProducts)
router.post('/products', productController.addProduct)

module.exports = router