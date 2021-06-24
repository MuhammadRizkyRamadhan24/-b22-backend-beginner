const db = require('../helpers/db')

exports.getItemTransactionByIdTransaction = (id, cb) => {
  db.query('SELECT * FROM item_transactions WHERE id_transaction = ?', [id], cb)
}

exports.deleteItemTransactionByIdTransaction = (id, cb) => {
  db.query(`
  DELETE FROM item_transactions WHERE id_transaction = ?
  `, [id], cb)
}
