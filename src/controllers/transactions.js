const { response } = require('../helpers/standardResponse')
const { codeTransaction } = require('../helpers/time')
const { getItemsById } = require('../models/items')
const { createTransaction, createItemTransaction, getTransactionByIdUser } = require('../models/transactions')
const { getUserById } = require('../models/users')

const { APP_TRANSACTION_PREFIX } = process.env

exports.createTransactions = (req, res) => {
  const data = req.body
  if (typeof data.item_id === 'string') {
    data.item_id = [data.item_id]
    data.item_amount = [data.item_amount]
  }
  getItemsById(data.item_id.map(id => parseInt(id)), (err, items) => {
    if (err) throw err
    const idUser = req.authUser.id
    const code = codeTransaction(APP_TRANSACTION_PREFIX, idUser)
    const total = items.map((item, idx) => item.price * data.item_amount[idx]).reduce((acc, curr) => acc + curr)
    const tax = total * 10 / 100
    const shippingCost = 10000
    const paymentMethod = data.payment_method

    getUserById(idUser, (err, results) => {
      if (err) throw err
      const shippingAddress = results[0].address
      if (!shippingAddress) {
        return response(res, 400, false, 'Address must be provided!')
      }
      const setData = {
        code, total, tax, shippingCost, shippingAddress, paymentMethod, idUser
      }
      createTransaction(setData, (err, results) => {
        if (err) throw err
        items.forEach((item, idx) => {
          const setData = {
            name: item.name,
            price: item.price,
            variants: null,
            amount: data.item_amount[idx],
            id_item: item.id,
            id_transaction: results.insertId
          }
          createItemTransaction(setData, (err, results) => {
            if (err) throw err
            console.log(`Item ${item.id} inserted to items_transactions`)
          })
        })
        return response(res, 200, true, 'Success add transaction!')
      })
    })
  })
}

exports.historyTransaction = (req, res) => {
  const { id } = req.params
  getTransactionByIdUser(id, (err, results) => {
    if (err) throw err
    if (!err) {
      return response(res, 200, true, 'History Transactions!', results)
    } else {
      return response(res, 500, false, 'An error occured')
    }
  })
}
