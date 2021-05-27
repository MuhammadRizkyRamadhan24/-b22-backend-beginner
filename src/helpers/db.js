const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'coffee-shop',
  user: 'root',
  password: ''
})

connection.connect()

module.exports = connection
