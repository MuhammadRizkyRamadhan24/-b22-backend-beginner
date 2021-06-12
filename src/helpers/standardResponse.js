exports.response = (res, status = 200, success = true, message = 'This is message', results, pageInfo) => {
  return res.status(status).json({
    success,
    message,
    results,
    pageInfo
  })
}
