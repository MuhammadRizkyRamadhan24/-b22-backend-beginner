const route = require('express').Router()
const itemsVariantsController = require('../controllers/itemsVariants')

route.put('/:id', itemsVariantsController.updateItemCategory)

module.exports = route
