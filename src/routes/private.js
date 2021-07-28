const route = require('express').Router()
const { createTransactions, historyTransaction, getDetailTransaction, deleteHistoryByIdTransaction } = require('../controllers/transactions')
const { getUserById, updateUser, updatePass } = require('../controllers/users')
const { user } = require('../middlewares/auth')
const upload = require('../helpers/upload')
// const uploadImage = upload.single('image')

route.get('/profile', user, getUserById)
route.patch('/profile', user, upload, updateUser)
route.put('/profile/change_password', user, updatePass)
route.post('/transaction', user, createTransactions)
route.get('/transaction', user, historyTransaction)
route.delete('/transaction/:id', user, deleteHistoryByIdTransaction)
route.get('/transaction/:id/detail', user, getDetailTransaction)

module.exports = route
