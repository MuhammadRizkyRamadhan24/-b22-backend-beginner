const db = require('../helpers/db')
const { promisify } = require('util')
const execPromise = promisify(db.query).bind(db)

// exports.getVariants = (cb) => {
//   db.query('SELECT * FROM variants', cb)
// }

exports.getVariants = () => {
  return execPromise('SELECT * FROM variants'
  )
}

// exports.getVariantById = (id, cb) => {
//   db.query('SELECT * FROM variants WHERE id = ?', [id], cb)
// }

exports.getVariantsById = (id) => {
  return execPromise('SELECT * FROM variants WHERE id = ?', [id]
  )
}

// exports.createVariant = (data, cb) => {
//   db.query('INSERT INTO variants SET ? ', data, cb)
// }

exports.createVariant = (data) => {
  return execPromise('INSERT INTO variants SET ? ', [data])
}

// exports.updateVariant = (data, id, cb) => {
//   db.query('UPDATE variants SET ? WHERE id = ?', [data, id], cb)
// }

exports.updateVariant = (data, id) => {
  return execPromise('UPDATE variants SET ? WHERE id = ?', [data, id]
  )
}

// exports.deleteVariant = (id, cb) => {
//   db.query('DELETE FROM variants WHERE id = ?', [id], cb)
// }

exports.deleteVariant = (id) => {
  return execPromise('DELETE FROM variants WHERE id=?', [id])
}
