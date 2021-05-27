const db = require('../helpers/db')

exports.getItems = (cb) => {
  db.query('SELECT * FROM items', cb)
}

exports.getItemById = (id, cb) => {
  db.query('SELECT * FROM items WHERE id = ?', [id], cb)
}

exports.createItem = (data, cb) => {
  db.query('INSERT INTO items SET ? ', data, cb)
}

exports.updateItem = (data, id, cb) => {
  db.query('UPDATE items SET ? WHERE id = ?', [data, id], cb)
}

exports.deleteItem = (id, cb) => {
  db.query('DELETE FROM items WHERE id = ?', [id], cb)
}
