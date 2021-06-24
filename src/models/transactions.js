const db = require('../helpers/db')

exports.createTransaction = (data, cb) => {
  db.query(`
    INSERT INTO transactions (code, total, tax, shipping_cost, shipping_address, payment_method, id_user) VALUES (?,?,?,?,?,?,?)
  `, [data.code, data.total, data.tax, data.shippingCost, data.shippingAddress, data.paymentMethod, data.idUser], cb)
}

exports.createItemTransaction = (data, cb) => {
  db.query(`
    INSERT INTO item_transactions (name, price, variants, amount, id_item, id_transaction) VALUES (?,?,?,?,?,?)
 `, [data.name, data.price, data.variants, data.amount, data.id_item, data.id_transaction], cb)
}

exports.getTransactionByIdUser = (id, cb) => {
  db.query(`
    SELECT * FROM transactions WHERE id_user = ?
  `, [id], cb)
}

exports.getTransactionById = (id, cb) => {
  db.query(`
    SELECT * FROM transactions WHERE id = ?
  `, [id], cb)
}

exports.getDetailTransactionByCode = (id, cb) => {
  db.query(`
  SELECT transactions.id, transactions.code, transactions.total, transactions.tax, transactions.shipping_cost, transactions.shipping_address, transactions.payment_method, item_transactions.id AS item_id, item_transactions.name AS item_name, item_transactions.price, item_transactions.variants AS variant, item_transactions.amount, items.image FROM transactions INNER JOIN item_transactions ON item_transactions.id_transaction = transactions.id INNER JOIN items ON items.id = item_transactions.id_item WHERE transactions.id = ?
  `, [id], cb)
}

exports.deleteTransactionById = (id, cb) => {
  db.query(`
  DELETE FROM transactions WHERE id = ?
  `, [id], cb)
}
