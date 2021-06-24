exports.codeTransaction = (prefix, id) => {
  const date = new Date()
  const val = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}/${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}/${val}/${id}`
}
