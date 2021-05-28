const route = require('express').Router()
const categoryController = require('../controllers/categories')

route.get('/', categoryController.getCategories)
route.post('/', categoryController.createCategories)
route.get('/:id', categoryController.getDetailCategory)
route.put('/:id', categoryController.updateCategories)
route.delete('/:id', categoryController.deleteCategories)

module.exports = route
