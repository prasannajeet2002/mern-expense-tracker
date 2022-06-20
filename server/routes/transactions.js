const express = require('express')
const router = express.Router()
const {getAllTransactions , postTransaction , deleteTransaction } = require('../controllers/transactionController')

router.route('/').get(getAllTransactions).post(postTransaction)

router.route('/:id').delete(deleteTransaction)

module.exports = router
