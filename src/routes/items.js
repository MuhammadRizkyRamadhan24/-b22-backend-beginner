const route = require('express').Router()
const itemController = require('../controllers/items')
const { auth, admin, user } = require('../middlewares/auth')
const upload = require('../helpers/upload')
const uploadImage = upload.single('image')

route.get('/', auth, user, itemController.getItems)
route.get('/search', auth, user, itemController.getSearchItems)
route.post('/', uploadImage, admin, itemController.createItems)
route.get('/:id', user, itemController.getDetailItem)
route.put('/:id', uploadImage, admin, itemController.updateItems)
route.delete('/:id', admin, itemController.deleteItems)

module.exports = route
