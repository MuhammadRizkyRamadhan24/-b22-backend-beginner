const db = require('../helpers/db')

const table = 'users'

exports.createUser = (data, cb) => {
  db.query(`
  INSERT INTO ${table} (email, phone_number, position, password) VALUES (?, ?, ?, ?)
  `, [data.email, data.phone_number, data.password], cb)
}

exports.getUserByEmail = (email, cb) => {
  db.query(`
  SELECT email, password, position FROM ${table} WHERE email = ?
  `, [email], cb)
}
