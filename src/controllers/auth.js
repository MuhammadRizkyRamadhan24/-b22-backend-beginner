const userModel = require('../models/users')
const { response: standardResponse } = require('../helpers/standardResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { validationResult } = require('express-validator')

exports.login = async (req, res) => {
  const { email, password } = req.body
  const results = await userModel.getUserByEmail(email)
  if (results.length < 1) {
    return standardResponse(res, 401, false, 'Email not found')
  }
  const user = results[0]
  const compare = await bcrypt.compare(password, user.password)
  if (compare) {
    const token = jwt.sign({ id: user.id, email: user.email, position: user.position }, process.env.APP_KEY)
    return standardResponse(res, 200, true, 'Login Success', { token })
  } else {
    return standardResponse(res, 401, false, 'Wrong Email or Password!')
  }
}

exports.register = async (req, res) => {
  // const result = validationResult(req)
  // if (!result.isEmpty()) {
  //   return response(res, 400, false, result.errors[0].msg)
  // }
  const data = req.body
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
  const setData = {
    ...data,
    position: 0
  }
  await userModel.createUser(setData)
  return standardResponse(res, 200, true, 'Register SuccesFully, You can Login Now')
}

// exports.register = async (req, res) => {
//   const err = validationResult(req)
//   if (!err.isEmpty()) {
//     // if (err.errors.length > 1) {
//     //   const msg = []
//     //   err.errors.forEach(error => {
//     //     msg.push(
//     //       error.msg
//     //     )
//     //   })
//     //   return standardResponse(res, 401, false, msg)
//     // } else {
//     return standardResponse(res, 401, false, err.errors[0].msg)
//     // }
//   } else {
//     const data = req.body
//     data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
//     const setData = {
//       ...data,
//       position: 0
//     }
//     userModel.createUser(setData, (err, results) => {
//       if (err) {
//         return standardResponse(res, 500, false, 'An error occured')
//       }
//       if (results.affectedRows > 0) {
//         return standardResponse(res, 200, true, 'Register Successfully')
//       } else {
//         return standardResponse(res, 500, false, 'An error occured')
//       }
//     })
//   }
// }

// exports.login = async (req, res) => {
//   const err = validationResult(req)
//   if (!err.isEmpty()) {
//     // if (err.errors.length > 1) {
//     //   const msg = []
//     //   err.errors.forEach(error => {
//     //     msg.push(
//     //       error.msg
//     //     )
//     //   })
//     //   return standardResponse(res, 401, false, msg)
//     // } else {
//     return standardResponse(res, 401, false, err.errors[0].msg)
//     // }
//   } else {
//     const { email, password } = req.body
//     userModel.getUserByEmail(email, async (err, results) => {
//       if (err) {
//         return standardResponse(res, 500, false, 'An error occured')
//       }
//       if (results.length < 1) return standardResponse(res, 401, false, 'Wrong Email or Password!')
//       const user = results[0]
//       const compare = await bcrypt.compare(password, user.password)
//       if (compare) {
//         const token = jwt.sign({ id: user.id, email: user.email, position: user.position }, process.env.APP_KEY)
//         return standardResponse(res, 200, true, 'Login Success!', { token, id: user.id })
//       } else {
//         return standardResponse(res, 401, false, 'Wrong Email or Password!')
//       }
//     })
//   }
// }
