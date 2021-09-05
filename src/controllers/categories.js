const categoriesModel = require('../models/categories')
const { getItemByCategory } = require('../models/items')

const { response: standardResponse } = require('../helpers/standardResponse')

// exports.getCategories = (req, res) => {
//   categoriesModel.getCategories((err, results, _field) => {
//     if (!err) {
//       return standardResponse(res, 200, true, 'List of Category', results)
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.getCategories = async (req, res) => {
  const results = await categoriesModel.getCategories()
  return standardResponse(res, 200, true, 'List of Category', results)
}

// exports.getItemByCategory = (req, res) => {
//   const { id } = req.params
//   getItemByCategory(id, (err, results, _fields) => {
//     if (!err) {
//       return standardResponse(res, 200, true, 'List Items by Category', results)
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.getItemByCategory = async (req, res) => {
  const { id } = req.params
  const results = await getItemByCategory(id)
  if (results.length > 0) {
    return standardResponse(res, 200, true, 'List Items by Category', results)
  } else {
    return standardResponse(res, 404, false, 'Category Not Found')
  }
}

// exports.getDetailCategory = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)
//   categoriesModel.getCategoryById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length === 1) {
//         return standardResponse(res, 200, true, 'Detail Category', results)
//       } else {
//         return standardResponse(res, 404, false, 'Category not found')
//       }
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

// exports.createCategories = (req, res) => {
//   const data = req.body
//   categoriesModel.createCategory(data, (err, result, _field) => {
//     if (!err) {
//       return standardResponse(res, 200, true, 'Category has been created successfully')
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.createCategories = async (req, res) => {
  const data = req.body
  await categoriesModel.createCategory(data)
  return standardResponse(res, 200, true, 'Category has been created successfully')
}

// exports.updateCategories = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)

//   categoriesModel.getCategoryById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length > 0) {
//         const data = req.body
//         categoriesModel.updateCategory(data, id, (err, results, _field) => {
//           console.log(err)
//           if (!err) {
//             return standardResponse(res, 200, true, 'Category updated successfully!')
//           } else {
//             return standardResponse(res, 500, false, 'An error occured')
//           }
//         })
//       } else {
//         return standardResponse(res, 404, false, 'Category not found!')
//       }
//     }
//   })
// }

exports.updateCategories = async (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  const resultCate = await categoriesModel.getCategoryById(id)
  if (resultCate.length > 0) {
    const data = req.body
    await categoriesModel.updateCategory(data, id)
    return standardResponse(res, 200, true, 'Category updated successfully!')
  } else {
    return standardResponse(res, 404, false, 'Category not found!')
  }
}

// exports.deleteCategories = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)

//   categoriesModel.getCategoryById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length > 0) {
//         categoriesModel.deleteCategory(id, (err, results, _field) => {
//           if (!err) {
//             return standardResponse(res, 200, true, 'Category has been deleted!')
//           } else {
//             return standardResponse(res, 500, false, 'An error occured')
//           }
//         })
//       } else {
//         return standardResponse(res, 404, false, 'Category not found!')
//       }
//     }
//   })
// }

exports.deleteCategories = async (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  const resultsCate = await categoriesModel.getCategoryById(id)
  if (resultsCate.length >= 1) {
    await categoriesModel.deleteCategory(id)
    return standardResponse(res, 200, true, 'Category has been deleted!')
  } else {
    return standardResponse(res, 404, false, 'Category not found!')
  }
}
