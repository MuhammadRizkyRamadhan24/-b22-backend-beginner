const db = require('../helpers/db')
const { promisify } = require('util')
const execPromise = promisify(db.query).bind(db)
const table = 'categories'

// exports.getCategories = (cb) => {
//   db.query(`SELECT * FROM ${table}`, cb)
// }

exports.getCategories = () => {
  return execPromise(`SELECT * FROM ${table}`
  )
}

// exports.getCategoryById = (id, cb) => {
//   db.query(`SELECT * FROM ${table} WHERE id = ?`, [id], cb)
// }

exports.getCategoryById = (id) => {
  return execPromise(`SELECT * FROM ${table} WHERE id = ?`, [id]
  )
}

// exports.createCategory = (data, cb) => {
//   db.query(`INSERT INTO ${table} SET ? `, data, cb)
// }

exports.createCategory = (data) => {
  return execPromise(`INSERT INTO ${table} SET ? `, [data])
}

// exports.updateCategory = (data, id, cb) => {
//   db.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], cb)
// }

exports.updateCategory = (data, id) => {
  return execPromise(`UPDATE ${table} SET ? WHERE id = ?`, [data, id]
  )
}

// exports.deleteCategory = (id, cb) => {
//   db.query(`DELETE FROM ${table} WHERE id = ?`, [id], cb)
// }

exports.deleteCategory = (id) => {
  return execPromise(`DELETE FROM ${table} WHERE id = ?`, [id])
}
