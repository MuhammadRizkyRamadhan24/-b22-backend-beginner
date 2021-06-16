const db = require('../helpers/db')

exports.getItems = (cb) => {
  // db.query('SELECT items.id, items.name, items.image, items.price, items.detail, categories.name_category FROM items LEFT JOIN items_categories on items_categories.id_items = items.id INNER JOIN categories on categories.id = items_categories.id_category', cb)
  db.query('SELECT items.id, items.name, items.image, items.price, items.detail FROM items', cb)
}

exports.getItemById = (id, cb) => {
  db.query('SELECT items.id, items.name, items.image, items.price, items.detail FROM items WHERE items.id = ?', [id], cb)
}

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
  const newSearch = `%${search}%`
  const offset = (limit * page) - limit
  db.query(`SELECT items.id, items.name, items.image, items.price, items.detail FROM items WHERE items.name LIKE ? OR items.detail LIKE ? ORDER BY items.${order} ${sort} LIMIT ? OFFSET ?`, [newSearch, newSearch, limit, offset], cb)
}

exports.getItemDetail = (id, cb) => {
  db.query('SELECT items.id, items.name, items.image, items.price AS base_price, items_variants.id AS id_item_variant, items_variants.additional_price, (items.price + items_variants.additional_price) AS end_price, items.delivery, items.detail, items.quantity, variants.name_variant AS variant, items.created_at, items.updated_at FROM items INNER JOIN items_variants ON items_variants.id_items = items.id INNER JOIN variants ON items_variants.id_variants = variants.id WHERE items.id = ?', [id], cb)
}

exports.getItemCategory = (id, cb) => {
  db.query('SELECT items_categories.id AS id_item_category, categories.name_category AS category FROM items INNER JOIN items_categories ON items_categories.id_items = items.id INNER JOIN categories ON items_categories.id_category = categories.id WHERE items.id = 8', [id], cb)
}

exports.getItemsCount = (search, cb) => {
  db.query('SELECT COUNT(items.id) as count FROM items WHERE items.name LIKE ? OR items.detail LIKE ?', [search, search], cb)
}

exports.getItemsById = (id, cb) => {
  db.query('SELECT id, name, price FROM items WHERE id IN (?)', [id], cb)
}
