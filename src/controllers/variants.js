const variantsModel = require('../models/variants')
const { response: standardResponse } = require('../helpers/standardResponse')

// exports.getVariants = (req, res) => {
//   variantsModel.getVariants((err, results, _field) => {
//     if (!err) {
//       return standardResponse(res, 200, true, 'List of Variant', results)
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.getVariants = async (req, res) => {
  const results = await variantsModel.getVariants()
  return standardResponse(res, 200, true, 'List of Variant', results)
}

// exports.getDetailVariant = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)
//   variantsModel.getVariantById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length === 1) {
//         return standardResponse(res, 200, true, 'Detail Variant', results)
//       } else {
//         return standardResponse(res, 404, false, 'Variant not found')
//       }
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

// exports.createVariants = (req, res) => {
//   const data = req.body
//   variantsModel.createVariant(data, (err, result, _field) => {
//     if (!err) {
//       return standardResponse(res, 200, true, 'Variant has been created successfully')
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.createVariants = async (req, res) => {
  await variantsModel.createVariant(req.body)
  return standardResponse(res, 200, true, 'Variant has been created successfully')
}

// exports.updateVariants = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)

//   variantsModel.getVariantById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length > 0) {
//         const data = req.body
//         variantsModel.updateVariant(data, id, (err, results, _field) => {
//           console.log(err)
//           if (!err) {
//             return standardResponse(res, 200, true, 'Variant updated successfully!')
//           } else {
//             return standardResponse(res, 500, false, 'An error occured')
//           }
//         })
//       } else {
//         return standardResponse(res, 404, false, 'Variant not found!')
//       }
//     }
//   })
// }

exports.updateVariants = async (req, res) => {
  const { id } = req.params
  const resultVar = await variantsModel.getVariantsById(id)
  if (resultVar.length > 0) {
    const data = req.body
    await variantsModel.updateVariant(data)
    return standardResponse(res, 200, true, 'Variant updated successfully!')
  } else {
    return standardResponse(res, 404, false, 'Variant not found!')
  }
}

// exports.deleteVariants = (req, res) => {
//   const { id: stringId } = req.params
//   const id = parseInt(stringId)

//   variantsModel.getVariantById(id, (err, results, _field) => {
//     if (!err) {
//       if (results.length > 0) {
//         variantsModel.deleteVariant(id, (err, results, _field) => {
//           if (!err) {
//             return standardResponse(res, 200, true, 'Variant has been deleted!')
//           } else {
//             return standardResponse(res, 500, false, 'An error occured')
//           }
//         })
//       } else {
//         return standardResponse(res, 404, false, 'Variant not found!')
//       }
//     }
//   })
// }

exports.deleteVariants = async (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)
  const resultsVar = await variantsModel.getVariantsById(id)
  if (resultsVar.length > 0) {
    await variantsModel.deleteVariant(id)
    return standardResponse(res, 200, true, 'Variant has been deleted!')
  } else {
    return standardResponse(res, 404, false, 'Variant not found!')
  }
}
