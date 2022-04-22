const { Router } = require('express')
const { messageController } = require('../controllers/message.controller')

const router = Router()

router.get('/message', messageController.getMessage)
router.post('/message', messageController.createMessage)

module.exports = router