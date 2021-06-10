const itemsModel = require('../models/items')
const { createItemCategory } = require('../models/itemsCategories')
const { createItemVariant } = require('../models/itemsVariants')
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
  const { id } = req.params
  itemsModel.getItemDetail(id, (err, results, _fields) => {
    if (!err) {
      if (results.length > 0) {
        const data = {
          id: '',
          name: '',
          image: '',
          detail: '',
          base_price: '',
          delivery: '',
          quantity: '',
          variants: [],
          created_at: '',
          updated_at: '',
          ...results[0]
        }
        const hiddenColumn = ['id_variant', 'additional_price', 'end_price', 'variant']
        hiddenColumn.forEach(column => {
          delete data[column]
        })
        results.forEach(item => {
          data.variants.push({
            id: item.id_variant,
            variant: item.variant,
            price: item.end_price
          })
        })
        return standardResponse(res, 200, true, 'Detail of item by id', data)
      } else {
        return standardResponse(res, 404, false, 'Item not found')
      }
    } else {
      return standardResponse(res, 500, false, `Error: ${err.sqlMessage}`)
    }
  })
}

exports.getSearchItems = (req, res) => {
  const limit = parseInt(req.query.limit) || 8
  const page = parseInt(req.query.page) || 1
  const sort = req.query.sort || 'asc'
  const order = req.query.order || 'created_at'
  const search = `%${req.query.search}%` || ''
  itemsModel.getSearch(limit, page, sort, order, search, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        return standardResponse(res, 200, true, 'Search items', results)
      } else {
        return standardResponse(res, 404, false, 'Item not found')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.createItems = (req, res) => {
  itemsModel.createItem(req.body, (err, results, _field) => {
    if (!err) {
      if (results.affectedRows > 0) {
        if (req.body.variant.length === 1) {
          const data = {
            id_items: results.insertId,
            id_variants: req.body.variant,
            additional_price: req.body.additional_price
          }

          createItemVariant(data, () => {
            console.log(`Items ${results.insertId} added to variant ${data.id_variants}`)
          })
        } else {
          const itemsVariant = req.body.variant.map((d, i) => {
            const data = {
              id_items: results.insertId,
              id_variants: d,
              additional_price: req.body.additional_price[i]
            }
            return data
          })

          itemsVariant.forEach(value => {
            const data = {
              id_items: results.insertId,
              id_variants: value.id_variants,
              additional_price: value.additional_price
            }
            createItemVariant(data, () => {
              console.log(`Items ${results.insertId} added to variant ${data.id_items}`)
            })
          })
        }

        if (typeof req.body.category !== 'object') {
          req.body.category = [req.body.category]
        }
        req.body.category.forEach(idCategory => {
          const data = {
            id_items: results.insertId,
            id_category: idCategory
          }
          createItemCategory(data, () => {
            console.log(`Items ${results.insertId} added to category ${idCategory}`)
          })
        })
        return standardResponse(res, 200, true, 'Item created successfully!')
      } else {
        return standardResponse(res, 500, false, 'An error occured')
      }
    } else {
      console.log(err)
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
    } else {
      return standardResponse(res, 500, false, 'An error occured')
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
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}
