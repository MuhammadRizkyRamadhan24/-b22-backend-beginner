const db = require('../helpers/db')

const table = 'users'

exports.createUser = (data, cb) => {
  db.query(`
  INSERT INTO ${table} (email, phone_number, position, password) VALUES (?, ?, ?, ?)
  `, [data.email, data.phone_number, data.position, data.password], cb)
}

exports.getUserByEmail = (email, cb) => {
  db.query(`
  SELECT id, email, password, address, position FROM ${table} WHERE email = ?
  `, [email], cb)
}

exports.getUserById = (id, cb) => {
  db.query(`
  SELECT id, email, image, address FROM ${table} WHERE id = ?
  `, [id], cb)
}

exports.getUserPassById = (id, cb) => {
  db.query(`
  SELECT password FROM ${table} WHERE id = ?
  `, [id], cb)
}

exports.updateUser = (data, id, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], cb)
}
