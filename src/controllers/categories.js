const categoriesModel = require('../models/categories')
const { getItemByCategory } = require('../models/items')

const { response: standardResponse } = require('../helpers/standardResponse')

exports.getCategories = (req, res) => {
  categoriesModel.getCategories((err, results, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List of Category', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.getItemByCategory = (req, res) => {
  const { id } = req.params
  getItemByCategory(id, (err, results, _fields) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List Items by Category', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.getDetailCategory = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  categoriesModel.getCategoryById(id, (err, results, _field) => {
    if (!err) {
      if (results.length === 1) {
        return standardResponse(res, 200, true, 'Detail Category', results)
      } else {
        return standardResponse(res, 404, false, 'Category not found')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.createCategories = (req, res) => {
  const data = req.body
  categoriesModel.createCategory(data, (err, result, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'Category has been created successfully')
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updateCategories = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  categoriesModel.getCategoryById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const data = req.body
        categoriesModel.updateCategory(data, id, (err, results, _field) => {
          console.log(err)
          if (!err) {
            return standardResponse(res, 200, true, 'Category updated successfully!')
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Category not found!')
      }
    }
  })
}

exports.deleteCategories = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  categoriesModel.getCategoryById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        categoriesModel.deleteCategory(id, (err, results, _field) => {
          if (!err) {
            return standardResponse(res, 200, true, 'Category has been deleted!')
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Category not found!')
      }
    }
  })
}
