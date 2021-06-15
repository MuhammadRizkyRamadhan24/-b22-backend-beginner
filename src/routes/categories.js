const route = require('express').Router()
const categoryController = require('../controllers/categories')
const { auth, admin, user } = require('../middlewares/auth')

route.get('/', auth, user, categoryController.getCategories)
route.post('/', auth, admin, categoryController.createCategories)
route.get('/:id/items', auth, user, categoryController.getItemByCategory)
route.get('/:id', auth, user, categoryController.getDetailCategory)
route.put('/:id', auth, admin, categoryController.updateCategories)
route.delete('/:id', auth, admin, categoryController.deleteCategories)

module.exports = route
