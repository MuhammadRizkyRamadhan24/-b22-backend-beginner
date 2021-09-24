const chatModel = require('../models/chat')

const { response: standardResponse } = require('../helpers/standardResponse')

exports.getChat = (req, res) => {
  const idSender1 = req.query.id_sender
  const idSender2 = req.query.id_receiver
  const idReceiver1 = req.query.id_sender
  const idReceiver2 = req.query.id_receiver
  chatModel.getChat(idSender1, idSender2, idReceiver1, idReceiver2, (err, results, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List of Chat', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.getHomeChat = (req, res) => {
  const id = req.query.id
  chatModel.getHomeChat(id, (err, results, _field) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List Chat', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.deleteChat = (req, res) => {
  const { id } = req.params
  const idUser = req.authUser.id
  chatModel.deleteChat(id, (err, results, _field) => {
    if (!err) {
      req.socket.emit(id, {
        message: `delete chat ${id}`,
        user: idUser
      })
      return standardResponse(res, 200, true, 'Success delete chat')
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.postChat = (req, res) => {
  const setData = req.body
  chatModel.updateStatusChat(setData.id_sender, setData.id_receiver, (err, results, _field) => {
    if (!err) {
      chatModel.postChat(setData, (err, results, _field) => {
        if (!err) {
          req.socket.emit(setData.id_receiver, {
            message: setData.chat,
            sender: setData.id_sender
          })
          return standardResponse(res, 200, true, 'Success send message', {
            chat: setData.chat
          })
        } else {
          return standardResponse(res, 500, false, 'An error occured')
        }
      })
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.postAttachment = (req, res) => {
  const setData = req.body
  setData.image = req.file.filename
  chatModel.updateStatusChat(setData.id_sender, setData.id_receiver, (err, results, _field) => {
    if (!err) {
      chatModel.postChat(setData, (err, results, _field) => {
        if (!err) {
          req.socket.emit(setData.id_receiver, {
            message: setData.image,
            sender: setData.id_sender
          })
          return standardResponse(res, 200, true, 'Success send message')
        } else {
          return standardResponse(res, 500, false, 'An error occured')
        }
      })
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}
