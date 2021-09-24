const express = require('express')
const router = express.Router()
const chatController = require('../controllers/chat')
const { auth } = require('../middlewares/auth')
const upload = require('../helpers/upload')

router.get('/', auth, chatController.getChat)
router.get('/home', auth, chatController.getHomeChat)
router.post('/', auth, chatController.postChat)
router.post('/attachment', auth, upload, chatController.postAttachment)
router.put('/delete/:id', auth, chatController.deleteChat)

module.exports = router
