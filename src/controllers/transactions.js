const { response } = require('../helpers/standardResponse')
const { codeTransaction } = require('../helpers/time')
const { getItemsById } = require('../models/items')
const { createTransaction, createItemTransaction, getTransactionByIdUser, getDetailTransactionByCode, getTransactionById, deleteTransactionById } = require('../models/transactions')
const { getUserById } = require('../models/users')
const { getItemTransactionByIdTransaction, deleteItemTransactionByIdTransaction } = require('../models/itemsTransactions')

const { APP_TRANSACTION_PREFIX } = process.env

// exports.createTransactions = (req, res) => {
//   const data = req.body
//   if (typeof data.item_id === 'string') {
//     data.item_id = [data.item_id]
//     data.item_amount = [data.item_amount]
//   }
//   getItemsById(data.item_id.map(id => parseInt(id)), (err, items) => {
//     if (err) throw err
//     const idUser = req.authUser.id
//     const code = codeTransaction(APP_TRANSACTION_PREFIX, idUser)
//     const total = items.map((item, idx) => item.price * data.item_amount[idx]).reduce((acc, curr) => acc + curr)
//     const tax = total * 10 / 100
//     const shippingCost = 10000
//     const paymentMethod = data.payment_method

//     getUserById(idUser, (err, results) => {
//       if (err) throw err
//       const shippingAddress = results[0].address
//       if (!shippingAddress) {
//         return response(res, 400, false, 'Address must be provided!')
//       }
//       const setData = {
//         code, total, tax, shippingCost, shippingAddress, paymentMethod, idUser
//       }
//       createTransaction(setData, (err, results) => {
//         if (err) throw err
//         items.forEach((item, idx) => {
//           const setData = {
//             name: item.name,
//             price: item.price,
//             variants: null,
//             amount: data.item_amount[idx],
//             id_item: item.id,
//             id_transaction: results.insertId
//           }
//           createItemTransaction(setData, (err, results) => {
//             if (err) throw err
//             console.log(`Item ${item.id} inserted to items_transactions`)
//           })
//         })
//         return response(res, 200, true, 'Success add transaction!')
//       })
//     })
//   })
// }

exports.createTransactions = (req, res) => {
  const data = req.body
  if (typeof data.item_id === 'string') {
    data.item_id = [data.item_id]
    data.item_amount = [data.item_amount]
    data.item_variant = [data.item_variant]
    data.item_additional_price = [data.item_additional_price]
  }
  const additionalPrice = data.item_additional_price.map(elem => parseInt(elem))
  console.log(data)
  getItemsById(data.item_id.map(id => parseInt(id)), (err, items) => {
    // console.log(items)
    if (err) throw err
    const idUser = req.authUser.id
    const code = codeTransaction(APP_TRANSACTION_PREFIX, idUser)
    const subTotal = items.map((item, idx) => (item.price + additionalPrice[idx]) * data.item_amount[idx]).reduce((acc, curr) => acc + curr)
    const tax = subTotal * 10 / 100
    const shippingCost = 10000
    const paymentMethod = data.payment_method
    const total = subTotal + tax + shippingCost
    console.log(total, 'hehe')
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
            price: item.price + additionalPrice[idx],
            variants: data.item_variant[idx],
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
  const id = req.authUser.id
  getTransactionByIdUser(id, (err, results) => {
    if (err) throw err
    if (!err) {
      return response(res, 200, true, 'History Transactions!', results)
    } else {
      return response(res, 500, false, 'An error occured')
    }
  })
}

// exports.detailHistoryTransaction = (req, res) => {
//   const { code } = req.body
//   console.log(code)
//   getDetailTransactionByCode(code, (err, results) => {
//     if (err) throw err
//     console.log(results)
//   })
// }

exports.getDetailTransaction = (req, res) => {
  const { id } = req.params
  getDetailTransactionByCode(id, (err, results) => {
    if (!err) {
      if (results.length > 0) {
        const data = {
          id: '',
          code: '',
          total: '',
          tax: '',
          shipping_cost: '',
          shipping_address: '',
          payment_method: '',
          items: [],
          ...results[0]
        }
        const hiddenColumn = ['item_id', 'item_name', 'price', 'variant', 'amount', 'image']
        hiddenColumn.forEach(column => {
          delete data[column]
        })
        results.forEach(item => {
          data.items.push({
            id: item.item_id,
            item_name: item.item_name,
            variant: item.variant,
            price: item.price,
            amount: item.amount,
            image: item.image
          })
        })
        return response(res, 200, true, 'Detail Transaction', data)
      } else {
        return response(res, 404, false, 'Transaction not found')
      }
    } else {
      return response(res, 500, false, `Error: ${err.sqlMessage}`)
    }
  })
}

exports.deleteHistoryByIdTransaction = (req, res) => {
  const { id: stringId } = req.params
  const id = parseInt(stringId)

  getDetailTransactionByCode(id, (err, results) => {
    if (!err) {
      if (results.length > 0) {
        getItemTransactionByIdTransaction(id, (err, results) => {
          if (!err) {
            if (results.length > 0) {
              deleteItemTransactionByIdTransaction(id, () => {
                console.log(`Items Transactions by id_transaction ${id} has been delete `)
              })
            }
          }
        })

        getTransactionById(id, (err, results, _field) => {
          if (!err) {
            deleteTransactionById(id, (err, results, _field) => {
              if (!err) {
                return response(res, 200, true, 'Transaction has been deleted!')
              } else {
                return response(res, 500, false, 'An error occured')
              }
            })
          } else {
            return response(res, 500, false, 'An error occured')
          }
        })
      } else {
        return response(res, 404, false, 'Transaction not found!')
      }
    } else {
      return response(res, 500, false, `Error: ${err.sqlMessage}`)
    }
  })
}
