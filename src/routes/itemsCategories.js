const route = require('express').Router()
const itemsCategoriesController = require('../controllers/itemsCategories')

route.put('/:id', itemsCategoriesController.updateItemCategory)

module.exports = route
