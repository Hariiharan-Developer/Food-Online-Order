const express =require('express')
const {addtoCart,removeFromCart,getCart} =require('../controllers/cart.controller.js')
const authMiddleware = require('../middlewares/auth.js')

const cartRouter = express.Router()

cartRouter.post('/add',authMiddleware, addtoCart)
cartRouter.post('/remove',authMiddleware,removeFromCart)
cartRouter.post('/get',authMiddleware,getCart)

module.exports = cartRouter