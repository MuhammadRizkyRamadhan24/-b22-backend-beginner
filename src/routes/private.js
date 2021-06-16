const route = require('express').Router()
const { createTransactions, historyTransaction } = require('../controllers/transactions')
const { getUserById, updateUser, updatePass } = require('../controllers/users')
const { user } = require('../middlewares/auth')
const upload = require('../helpers/upload')
const uploadImage = upload.single('image')

route.get('/profile/:id', user, getUserById)
route.put('/profile/:id', user, uploadImage, updateUser)
route.put('/profile/:id/change_password', user, updatePass)
route.post('/transaction', user, createTransactions)
route.get('/transaction/:id', user, historyTransaction)

module.exports = route
