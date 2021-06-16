const route = require('express').Router()
const authController = require('../controllers/auth')
const { checkSchema } = require('express-validator')

route.post('/register', checkSchema(require('../helpers/validationSchema/register')), authController.register)
route.post('/login', checkSchema(require('../helpers/validationSchema/login')), authController.login)

module.exports = route
