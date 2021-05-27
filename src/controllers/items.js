const itemsModel = require('../models/items')

exports.getItems = (req, res) => {
  itemsModel.getItems((err, results, _field) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: 'List of items',
        results
      })
    } else {
      return res.status(500).json({
        success: false,
        message: 'An error occured'
      })
    }
  })
}

exports.getDetailItem = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  itemsModel.getItemById(id, (err, results, _field) => {
    if (!err) {
      if (results.length === 1) {
        return res.status(200).json({
          success: true,
          message: 'Detail item',
          results
        })
      } else {
        return res.status(404).json({
          success: true,
          message: 'Item not found'
        })
      }
    } else {
      return res.status(500).json({
        success: false,
        message: 'An error occured'
      })
    }
  })
}

exports.createItems = (req, res) => {
  const data = req.body
  itemsModel.createItem(data, (err, result, _field) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: 'Item has been created successfully'
      })
    } else {
      return res.status(500).json({
        success: false,
        message: 'An error occured'
      })
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
            return res.status(200).json({
              success: true,
              message: 'Item updated successully!'
            })
          } else {
            return res.status(500).json({
              success: false,
              message: 'An error occured'
            })
          }
        })
      } else {
        return res.status(404).json({
          success: false,
          message: 'Item not found!'
        })
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
            return res.status(200).json({
              success: true,
              message: 'Item has been deleted!'
            })
          } else {
            return res.status(500).json({
              success: false,
              message: 'An error occured'
            })
          }
        })
      }
    } else {
      return res.status(404).json({
        success: false,
        message: 'Item not found!'
      })
    }
  })
}
