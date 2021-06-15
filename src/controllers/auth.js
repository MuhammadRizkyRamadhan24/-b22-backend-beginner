const userModel = require('../models/users')
const { response: standardResponse } = require('../helpers/standardResponse')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  const data = req.body
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
  userModel.createUser(data, (err, results) => {
    if (err) throw err
    if (results.affectedRows) {
      return standardResponse(res, 200, true, 'Register Successfully')
    }
  })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  userModel.getUserByEmail(email, async (err, results) => {
    if (err) throw err
    if (results.length < 1) return standardResponse(res, 401, false, 'Wrong Email or Password!')
    const user = results[0]
    const compare = await bcrypt.compare(password, user.password)
    if (compare) {
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.APP_KEY)
      return standardResponse(res, 200, true, 'Login Success!', { token })
    } else {
      return standardResponse(res, 401, false, 'Wrong Email or Password!')
    }
  })
}
