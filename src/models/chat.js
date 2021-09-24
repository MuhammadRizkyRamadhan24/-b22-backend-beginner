const db = require('../helpers/db')
const table = 'chats'

exports.getChat = (idSender1, idSender2, idReceiver1, idReceiver2, cb) => {
  db.query(`SELECT * , (SELECT image FROM users WHERE users.id = chats.id_sender) AS senderImage, (SELECT display_name FROM users WHERE users.id = chats.id_sender) AS senderName, (SELECT image FROM users WHERE users.id = chats.id_receiver) AS receiverImage, (SELECT display_name FROM users WHERE users.id = chats.id_receiver) AS receiverName FROM ${table} WHERE id_sender IN (?,?) AND id_receiver IN (?,?)`, [idSender1, idSender2, idReceiver1, idReceiver2], cb)
}

exports.getHomeChat = (id, cb) => {
  db.query('SELECT m.*, users.phone_number, users.display_name, users.image as imageUser from chats m left join chats m1 on (((m.id_sender = m1.id_sender and m.id_receiver = m1.id_receiver) or (m.id_sender = m1.id_receiver and m.id_receiver = m1.id_sender ) ) and case when m.created_at = m1.created_at then m.id < m1.id else m.created_at < m1.created_at end ) INNER JOIN users on (m.id_sender = users.id OR m.id_receiver = users.id) WHERE users.id != ? AND m1.id is null and ? in(m.id_sender, m.id_receiver) ORDER BY created_at DESC', [id, id], cb)
}

exports.postChat = (data, cb) => {
  db.query('INSERT INTO chats SET ?', [data], cb)
}

exports.deleteChat = (id, cb) => {
  db.query('UPDATE chats SET deleted = "1" WHERE id=?', [id], cb)
}

exports.updateStatusChat = (idSender, idReceiver, cb) => {
  db.query('UPDATE chats SET latest = "0" WHERE latest = "1" AND id_sender IN (?,?) AND id_receiver IN (?,?)', [idSender, idReceiver, idSender, idReceiver], cb)
}
