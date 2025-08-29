const express = require('express')
const authMiddleware = require('../middlewares/auth')
const {placeOrder , verifyOrder ,userOrders ,listOrders , updatestatus}=require('../controllers/order.controller')

const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updatestatus)

module.exports = orderRouter