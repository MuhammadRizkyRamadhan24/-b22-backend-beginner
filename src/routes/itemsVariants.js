const route = require('express').Router()
const itemsVariantsController = require('../controllers/itemsVariants')
const { auth, admin } = require('../middlewares/auth')

route.put('/:id', auth, admin, itemsVariantsController.updateItemCategory)

module.exports = route
