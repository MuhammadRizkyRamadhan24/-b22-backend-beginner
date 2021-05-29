const db = require('../helpers/db')

exports.getItems = (cb) => {
  db.query('SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price, created_at, updated_at FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id', cb)
}

exports.getItemById = (id, cb) => {
  db.query('SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price, created_at, updated_at FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id WHERE items.id = ?', [id], cb)
}

exports.getSearch = (limit, page, sort, order, search, cb) => {
  const offset = (limit * page) - limit
  console.log(page)
  db.query(`SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price, created_at, updated_at FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id WHERE items.name LIKE ? OR categories.name_category LIKE ? OR variants.name_variant LIKE ? ORDER BY ${order} ${sort} LIMIT ? OFFSET ?`, [search, search, search, limit, offset], cb)
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
