const db = require('../helpers/db')

exports.getCategories = (cb) => {
  db.query('SELECT * FROM categories', cb)
}

exports.getCategoryById = (id, cb) => {
  db.query('SELECT * FROM categories WHERE id = ?', [id], cb)
}

exports.createCategory = (data, cb) => {
  db.query('INSERT INTO categories SET ? ', data, cb)
}

exports.updateCategory = (data, id, cb) => {
  db.query('UPDATE categories SET ? WHERE id = ?', [data, id], cb)
}

exports.deleteCategory = (id, cb) => {
  db.query('DELETE FROM categories WHERE id = ?', [id], cb)
}
