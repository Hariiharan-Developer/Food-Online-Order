const express = require('express')
const authMiddleware = require('../middlewares/auth')
const {placeOrder}=require('../controllers/order.controller')

const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)

module.exports = orderRouter