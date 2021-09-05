const db = require('../helpers/db')
const { promisify } = require('util')
const execPromise = promisify(db.query).bind(db)

const table = 'users'

// exports.createUser = (data, cb) => {
//   db.query(`
//   INSERT INTO ${table} (email, phone_number, position, password) VALUES (?, ?, ?, ?)
//   `, [data.email, data.phone_number, data.position, data.password], cb)
// }

exports.createUser = (data) => {
  return execPromise(`
  INSERT INTO ${table} (email, phone_number, position, password) VALUES (?, ?, ?, ?)
    `, [data.email, data.phone_number, data.position, data.password])
}

// exports.getUserByEmail = (email, cb) => {
//   db.query(`
//   SELECT id, email, phone_number, image, password, address, position FROM ${table} WHERE email = ?
//   `, [email], cb)
// }

exports.getUserByEmail = (email, cb) => {
  return execPromise(
    `
    SELECT id, email, phone_number, image, password, address, position FROM ${table} WHERE email = ?
  `,
    [email]
  )
}

exports.getUserByIdUser = (email, cb) => {
  db.query(`
  SELECT * FROM ${table} WHERE id = ?
  `, [email], cb)
}

exports.getUserById = (id, cb) => {
  db.query(`
  SELECT id, email, phone_number, image, address FROM ${table} WHERE id = ?
  `, [id], cb)
}

exports.getUserByName = (search, cb) => {
  db.query(`
  SELECT id, display_name, image FROM users WHERE display_name LIKE '%${search}%' OR phone_number LIKE '%${search}%'
  `, [search, search], cb)
}

exports.getUserPassById = (id, cb) => {
  db.query(`
  SELECT password FROM ${table} WHERE id = ?
  `, [id], cb)
}

exports.updateUser = (data, id, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id], cb)
}
