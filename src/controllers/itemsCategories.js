const itemsCategoriesModel = require('../models/itemsCategories')
const { response: standardResponse } = require('../helpers/standardResponse')

exports.updateItemCategory = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  itemsCategoriesModel.getItemCategoryById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const data = req.body
        itemsCategoriesModel.updateItemCategory(data, id, (err, results, _field) => {
          if (!err) {
            return standardResponse(res, 200, true, 'Item Category updated successfully!')
          } else {
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'Item Category not found!')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}
