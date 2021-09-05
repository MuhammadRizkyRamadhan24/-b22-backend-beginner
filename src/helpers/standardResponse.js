// exports.response = (res, status = 200, success = true, message = 'This is message', results, pageInfo) => {
//   return res.status(status).json({
//     success,
//     message,
//     results,
//     pageInfo
//   })
// }

exports.response = (res, status, success, message, results, pageInfo) => {
  // success = success || true
  // message = message || ''
  const returnData = {
    success,
    message,
    pageInfo
  }
  if (status >= 400) {
    returnData.success = false
  } else {
    status = 200
  }
  if (results !== null) {
    returnData.results = results
  }
  return res.status(status).json(returnData)
}
