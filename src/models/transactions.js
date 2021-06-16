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
