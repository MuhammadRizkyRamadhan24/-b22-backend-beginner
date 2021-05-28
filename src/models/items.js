const db = require('../helpers/db')

exports.getItems = (cb) => {
  db.query('SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id', cb)
}

exports.getItemById = (id, cb) => {
  db.query('SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id WHERE items.id = ?', [id], cb)
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
