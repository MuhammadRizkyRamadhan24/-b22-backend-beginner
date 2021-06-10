const db = require('../helpers/db')

exports.createItemCategory = (data, cb) => {
  db.query('INSERT INTO `items_categories`(`id_items`, `id_category`) VALUES (?, ?)', [data.id_items, data.id_category], cb)
}
