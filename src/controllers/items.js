const itemsModel = require('../models/items')
const fs = require('fs')
const path = './src/public/images'

const { createItemCategory, deleteItemCategory, getItemCategoryByIdItems } = require('../models/itemsCategories')
const { createItemVariant, deleteItemVariant, getItemVariantByIdItems } = require('../models/itemsVariants')
const { response: standardResponse } = require('../helpers/standardResponse')

const { APP_URL } = process.env

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
          categories: [],
          variants: [],
          created_at: '',
          updated_at: '',
          ...results[0]
        }

        const hiddenColumn = ['id_item_variant', 'additional_price', 'end_price', 'variant']
        hiddenColumn.forEach(column => {
          delete data[column]
        })
        results.forEach(item => {
          data.variants.push({
            id: item.id_item_variant,
            variant: item.variant,
            price: item.end_price
          })
        })

        itemsModel.getItemCategory(id, (err, results) => {
          if (!err) {
            if (results.length > 0) {
              results.forEach(item => {
                data.categories.push({
                  id: item.id_item_category,
                  category: item.category
                })
              })
              return standardResponse(res, 200, true, 'Detail of item by id', data)
            } else {
              return standardResponse(res, 404, false, 'Category not found')
            }
          } else {
            return standardResponse(res, 500, false, `Error: ${err.sqlMessage}`)
          }
        })
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
  const search = req.query.search || ''
  const pageInfo = {}
  itemsModel.getSearch(limit, page, sort, order, search, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const data = [...results]
        data.forEach(items => {
          delete items.detail
        })
        itemsModel.getItemsCount(search, (err, resultCount, _fields) => {
          if (!err) {
            const totalData = resultCount[0].count
            const lastPage = Math.ceil(totalData / limit)
            pageInfo.totalData = totalData
            pageInfo.currentPage = page
            pageInfo.lastPage = lastPage
            pageInfo.limitData = limit
            pageInfo.nextPage = page < lastPage ? `${APP_URL}/items?search=${req.query.search}&order=${order}&sort=${sort}&page=${page + 1}` : null
            pageInfo.prevPage = page > 1 ? `${APP_URL}/items?search=${req.query.search}&order=${order}&sort=${sort}&page=${page - 1}` : null
            return standardResponse(res, 200, true, 'Search items', data, pageInfo)
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Item not found')
      }
    } else {
      console.log(err)
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.createItems = (req, res) => {
  const setData = req.body
  setData.image = req.file.filename
  itemsModel.createItem(setData, (err, results, _field) => {
    if (!err) {
      if (results.affectedRows > 0) {
        if (setData.variant.length === 1) {
          const data = {
            id_items: results.insertId,
            id_variants: setData.variant,
            additional_price: setData.additional_price
          }

          createItemVariant(data, () => {
            console.log(`Items ${results.insertId} added to variant ${data.id_variants}`)
          })
        } else {
          const itemsVariant = setData.variant.map((d, i) => {
            const data = {
              id_items: results.insertId,
              id_variants: d,
              additional_price: setData.additional_price[i]
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

        if (typeof setData.category !== 'object') {
          setData.category = [setData.category]
        }
        setData.category.forEach(idCategory => {
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
        const oldData = results
        const data = req.body
        // console.log(req.file)
        const setData = []
        if (req.file === undefined) {
          setData.push(data)
        } else {
          data.image = req.file.filename
          setData.push(data)
        }
        console.log(setData[0])
        // data.image = req.file.filename
        // const setData = {
        //   ...data,
        //   image: req.file.filename
        // }
        // if (req.file === undefined) {
        //   delete setData.image
        //   console.log(setData)
        // }

        itemsModel.updateItem(setData[0], id, (err, results, _field) => {
          if (!err) {
            console.log(setData[0].image)
            if (setData[0].image === undefined) {
              return standardResponse(res, 200, true, 'Item updated successfully!')
            } else {
              fs.unlinkSync(path + '/' + oldData[0].image)
              return standardResponse(res, 200, true, 'Item updated successfully!')
            }
          } else {
            fs.unlinkSync(path + '/' + req.file.filename)
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

  itemsModel.getItemDetail(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        getItemCategoryByIdItems(id, (err, results) => {
          if (!err) {
            if (results.length > 0) {
              deleteItemCategory(id, () => {
                console.log(`Items Category by id_items ${id} has been delete `)
              })
            }
          }
        })

        getItemVariantByIdItems(id, (err, results) => {
          if (!err) {
            if (results.length > 0) {
              deleteItemVariant(id, () => {
                console.log(`Items Variant by id_items ${id} has been delete `)
              })
            }
          }
        })

        itemsModel.getItemById(id, (err, results, _field) => {
          if (err) {
            return standardResponse(res, 500, false, 'An error occured')
          }
          const oldData = results
          itemsModel.deleteItem(id, (err, results, _field) => {
            if (!err) {
              fs.unlinkSync(path + '/' + oldData[0].image)
              return standardResponse(res, 200, true, 'Item has been deleted!')
            } else {
              return standardResponse(res, 500, false, 'An error occured')
            }
          })
        })
      } else {
        return standardResponse(res, 404, false, 'Item not found!')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}
