const userModel = require('../models/users')
const { response: standardResponse } = require('../helpers/standardResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.register = async (req, res) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    if (err.errors.length > 1) {
      const msg = []
      err.errors.forEach(error => {
        msg.push(
          error.msg
        )
      })
      return standardResponse(res, 401, false, msg)
    } else {
      return standardResponse(res, 401, false, err.errors[0].msg)
    }
  } else {
    const data = req.body
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
    const setData = {
      ...data,
      position: 0
    }
    userModel.createUser(setData, (err, results) => {
      if (err) throw err
      if (results.affectedRows > 0) {
        return standardResponse(res, 200, true, 'Register Successfully')
      } else {
        return standardResponse(res, 500, false, 'An error occured')
      }
    })
  }
}

exports.login = async (req, res) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    if (err.errors.length > 1) {
      const msg = []
      err.errors.forEach(error => {
        msg.push(
          error.msg
        )
      })
      return standardResponse(res, 401, false, msg)
    } else {
      return standardResponse(res, 401, false, err.errors[0].msg)
    }
  } else {
    const { email, password } = req.body
    userModel.getUserByEmail(email, async (err, results) => {
      if (err) throw err
      if (results.length < 1) return standardResponse(res, 401, false, 'Wrong Email or Password!')
      const user = results[0]
      const compare = await bcrypt.compare(password, user.password)
      if (compare) {
        const token = jwt.sign({ id: user.id, email: user.email, position: user.position }, process.env.APP_KEY)
        return standardResponse(res, 200, true, 'Login Success!', { token })
      } else {
        return standardResponse(res, 401, false, 'Wrong Email or Password!')
      }
    })
  }
}
