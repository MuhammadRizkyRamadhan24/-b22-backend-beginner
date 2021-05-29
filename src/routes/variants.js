const route = require('express').Router()
const variantController = require('../controllers/variants')

route.get('/', variantController.getVariants)
route.post('/', variantController.createVariants)
route.get('/:id', variantController.getDetailVariant)
route.put('/:id', variantController.updateVariants)
route.delete('/:id', variantController.deleteVariants)

module.exports = route
