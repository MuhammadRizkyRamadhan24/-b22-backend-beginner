const db = require('../helpers/db')
exports.getItemVariantByIdItems = (id, cb) => {
  db.query('SELECT * FROM items_variants WHERE id_items = ?', [id], cb)
}

exports.createItemVariant = (data, cb) => {
  db.query('INSERT INTO `items_variants`( `id_items`, `id_variants`, `additional_price`) VALUES (?, ?, ?)', [data.id_items, data.id_variants, data.additional_price], cb)
}

exports.deleteItemVariant = (id, cb) => {
  db.query('DELETE FROM items_variants WHERE id_items = ?', [id], cb)
}
