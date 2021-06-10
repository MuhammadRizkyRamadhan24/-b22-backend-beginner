const db = require('../helpers/db')

exports.getItems = (cb) => {
  db.query('SELECT items.id, items.name, items.image, items.price, items.detail, categories.name_category FROM items LEFT JOIN items_categories on items_categories.id_items = items.id INNER JOIN categories on categories.id = items_categories.id_category', cb)
}

exports.getItemById = (id, cb) => {
  db.query('SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price, created_at, updated_at FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id WHERE items.id = ?', [id], cb)
}

// exports.getSearch = (limit, page, sort, order, search, cb) => {
//   const offset = (limit * page) - limit
//   db.query(`SELECT items.id AS id ,name, image, categories.name_category AS category, variants.name_variant AS variant, detail, price, created_at, updated_at FROM items INNER JOIN categories ON items.id_category = categories.id INNER JOIN variants ON items.id_variant = variants.id WHERE items.name LIKE ? OR categories.name_category LIKE ? OR variants.name_variant LIKE ? ORDER BY ${order} ${sort} LIMIT ? OFFSET ?`, [search, search, search, limit, offset], cb)
// }

exports.createItem = (data, cb) => {
  db.query('INSERT INTO `items`(`name`, `detail`, `price`, `delivery`, `quantity`, `image`) VALUES (?, ?, ?, ?, ?, ?)', [data.name, data.detail, data.price, data.delivery, data.quantity, data.image], cb)
}

exports.updateItem = (data, id, cb) => {
  db.query('UPDATE items SET ? WHERE id = ?', [data, id], cb)
}

exports.deleteItem = (id, cb) => {
  db.query('DELETE FROM items WHERE id = ?', [id], cb)
}

exports.getItemByCategory = (id, cb) => {
  db.query('SELECT items.id, items.name, items.image, items.price FROM items left JOIN items_categories on items_categories.id_items = items.id WHERE items_categories.id_category = ?', [id], cb)
}

exports.getSearch = (limit, page, sort, order, search, cb) => {
  const offset = (limit * page) - limit
  db.query(`SELECT items.id, items.name, items.image, items.price, items.detail, categories.name_category FROM items LEFT JOIN items_categories on items_categories.id_items = items.id INNER JOIN categories on categories.id = items_categories.id_category WHERE items.name LIKE ? OR items.detail LIKE ? OR categories.name_category LIKE ? ORDER BY items.${order} ${sort} LIMIT ? OFFSET ?`, [search, search, search, limit, offset], cb)
}

exports.getItemDetail = (id, cb) => {
  db.query('SELECT items.id, items.name, items.image, items.price AS base_price, items_variants.id AS id_variant, items_variants.additional_price, (items.price + items_variants.additional_price) AS end_price, items.delivery, items.detail, items.quantity, variants.name_variant AS variant, items.created_at, items.updated_at FROM items INNER JOIN items_variants ON items_variants.id_items = items.id INNER JOIN variants ON items_variants.id_variants = variants.id WHERE items.id = ?', [id], cb)
}
