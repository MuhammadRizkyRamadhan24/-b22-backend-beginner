const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

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

app.use('/static', express.static(path.join(__dirname, 'src/public')))
app.use('/items', itemRoute)
app.use('/category', categoryRoute)
app.use('/variant', variantRoute)

app.listen(8880, () => {
  console.log('app running on port 8880')
})
