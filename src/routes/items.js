const route = require('express').Router()
const itemController = require('../controllers/items')

route.get('/', itemController.getItems)
route.get('/search', itemController.getSearchItems)
route.post('/', itemController.createItems)
route.get('/:id', itemController.getDetailItem)
route.put('/:id', itemController.updateItems)
route.delete('/:id', itemController.deleteItems)

module.exports = route
