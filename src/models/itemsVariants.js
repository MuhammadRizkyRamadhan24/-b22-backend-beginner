const db = require('../helpers/db')

exports.createItemVariant = (data, cb) => {
  db.query('INSERT INTO `items_variants`( `id_items`, `id_variants`, `additional_price`) VALUES (?, ?, ?)', [data.id_items, data.id_variants, data.additional_price], cb)
}
