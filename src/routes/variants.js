const route = require('express').Router()
const variantController = require('../controllers/variants')
const { auth, admin, user } = require('../middlewares/auth')

route.get('/', auth, user, variantController.getVariants)
route.post('/', auth, admin, variantController.createVariants)
// route.get('/:id', auth, user, variantController.getDetailVariant)
route.put('/:id', auth, admin, variantController.updateVariants)
route.delete('/:id', auth, admin, variantController.deleteVariants)

module.exports = route
