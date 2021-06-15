const route = require('express').Router()
const itemsCategoriesController = require('../controllers/itemsCategories')
const { auth, admin } = require('../middlewares/auth')

route.put('/:id', auth, admin, itemsCategoriesController.updateItemCategory)

module.exports = route
