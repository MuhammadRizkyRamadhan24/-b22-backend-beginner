const db = require('../helpers/db')
const table = 'categories'

exports.getCategories = (cb) => {
  db.query(`SELECT * FROM ${table}`, cb)
}

exports.getCategoryById = (id, cb) => {
  db.query(`SELECT * FROM ${table} WHERE id = ?`, [id], cb)
}

exports.createCategory = (data, cb) => {
  db.query(`INSERT INTO ${table} SET ? `, data, cb)
}

exports.updateCategory = (data, id, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], cb)
}

exports.deleteCategory = (id, cb) => {
  db.query(`DELETE FROM ${table} WHERE id = ?`, [id], cb)
}
