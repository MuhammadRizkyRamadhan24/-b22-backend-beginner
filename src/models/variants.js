const db = require('../helpers/db')

exports.getVariants = (cb) => {
  db.query('SELECT * FROM variants', cb)
}

exports.getVariantById = (id, cb) => {
  db.query('SELECT * FROM variants WHERE id = ?', [id], cb)
}

exports.createVariant = (data, cb) => {
  db.query('INSERT INTO variants SET ? ', data, cb)
}

exports.updateVariant = (data, id, cb) => {
  db.query('UPDATE variants SET ? WHERE id = ?', [data, id], cb)
}

exports.deleteVariant = (id, cb) => {
  db.query('DELETE FROM variants WHERE id = ?', [id], cb)
}
