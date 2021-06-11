const db = require('../helpers/db')

exports.createItemCategory = (data, cb) => {
  db.query('INSERT INTO `items_categories`(`id_items`, `id_category`) VALUES (?, ?)', [data.id_items, data.id_category], cb)
}

exports.deleteItemCategory = (id, cb) => {
  db.query('DELETE FROM items_categories WHERE id_items = ?', [id], cb)
}

exports.getItemCategoryByIdItems = (id, cb) => {
  db.query('SELECT * FROM items_categories WHERE id_items = ?', [id], cb)
}
