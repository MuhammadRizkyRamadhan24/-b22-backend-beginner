const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

require('dotenv').config()

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', () => {
  console.log('socket connection is exists')
})

// CORS
// const whitelist = ['http://localhost:3000', 'https://localhost:3000']
app.use(cors())
const socket = require('./src/middlewares/socket')
app.use(socket(io))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const data = {
    success: true,
    message: 'backend is run well'
  }
  return res.json(data)
})

const itemRoute = require('./src/routes/items')
const categoryRoute = require('./src/routes/categories')
const variantRoute = require('./src/routes/variants')
const itemsCategoriesRoute = require('./src/routes/itemsCategories')
const itemsVariantsRoute = require('./src/routes/itemsVariants')
const authRoute = require('./src/routes/auth')
const privateRoute = require('./src/routes/private')
const chatRoute = require('./src/routes/chats')
const { auth } = require('./src/middlewares/auth')

app.use('/static', express.static(path.join(__dirname, 'src/public')))
app.use('/items', itemRoute)
app.use('/category', categoryRoute)
app.use('/variant', variantRoute)
app.use('/itemscategories', itemsCategoriesRoute)
app.use('/itemsvariants', itemsVariantsRoute)
app.use('/auth', authRoute)
app.use('/private', auth, privateRoute)
app.use('/chat', chatRoute)

const port = process.env.PORT || 8880

server.listen(port || 8880, () => {
  console.log(`app running on port ${port}`)
})
