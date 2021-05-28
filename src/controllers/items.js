const itemsModel = require('../models/items')
const { response: standardResponse } = require('../helpers/standardResponse')

exports.getItems = (req, res) => {
  itemsModel.getItems((err, results, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List of item', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.getDetailItem = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  itemsModel.getItemById(id, (err, results, _field) => {
    if (!err) {
      if (results.length === 1) {
        return standardResponse(res, 200, true, 'Detail item', results)
      } else {
        return standardResponse(res, 404, false, 'Item not found')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.createItems = (req, res) => {
  const data = req.body
  itemsModel.createItem(data, (err, result, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'Item has been created successfully')
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updateItems = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  itemsModel.getItemById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const data = req.body
        itemsModel.updateItem(data, id, (err, results, _field) => {
          if (!err) {
            return standardResponse(res, 200, true, 'Item updated successfully!')
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Item not found!')
      }
    }
  })
}

exports.deleteItems = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  itemsModel.getItemById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        itemsModel.deleteItem(id, (err, results, _field) => {
          if (!err) {
            return standardResponse(res, 200, true, 'Item has been deleted!')
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Item not found!')
      }
    }
  })
}
