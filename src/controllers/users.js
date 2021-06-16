const { getUserById, getUserPassById, updateUser } = require('../models/users')
const { response: standardResponse } = require('../helpers/standardResponse')
const bcrypt = require('bcrypt')
const fs = require('fs')
const path = './src/public/images'

exports.getUserById = (req, res) => {
  const { id } = req.params
  getUserById(id, (err, results, _fields) => {
    if (err) throw err
    if (!err) {
      return standardResponse(res, 200, true, 'List User by Id', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updateUser = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  getUserById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const oldData = results
        const data = req.body
        const setData = []
        if (req.file === undefined) {
          setData.push(data)
        } else {
          data.image = req.file.filename
          setData.push(data)
        }
        console.log(setData[0])
        updateUser(setData[0], id, (err, results, _field) => {
          if (!err) {
            if (setData[0].image === undefined) {
              return standardResponse(res, 200, true, 'User updated successfully!')
            } else {
              fs.unlinkSync(path + '/' + oldData[0].image)
              return standardResponse(res, 200, true, 'User updated successfully!')
            }
          } else {
            fs.unlinkSync(path + '/' + req.file.filename)
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'User not found!')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updatePass = (req, res) => {
  const { id } = req.params
  const { password, newPassword } = req.body
  getUserPassById(id, async (err, results) => {
    if (err) throw err
    if (results.length < 1) return standardResponse(res, 401, false, 'User Nor Found!')
    const user = results[0]
    const compare = await bcrypt.compare(password, user.password)
    if (compare) {
      const data = { password: newPassword }
      data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
      updateUser(data, id, (err, results) => {
        if (!err) {
          return standardResponse(res, 200, true, 'Password updated successfully!')
        } else {
          return standardResponse(res, 500, false, 'An error occured')
        }
      })
    } else {
      return standardResponse(res, 401, false, 'Wrong Password')
    }
  })
}
