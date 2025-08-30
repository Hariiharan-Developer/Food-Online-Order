const express = require('express')
const cors =require('cors')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')
const foodRoutes = require('./routes/food.route')
const userRouter = require('./routes/user.route')
const cartRouter = require('./routes/cart.route')
const orderRouter = require('./routes/order.route')


//app config:
const app = express()
const port=process.env.PORT || 4000

//middleware:
app.use(express.json())

app.use(cors())

connectDb()
 
app.get('/',(req,res)=>{
    res.send('API Working')
})

//api end point:
app.use('/api/food',foodRoutes)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

// Catch-all for React SPA
const path = require('path');
app.use(express.static(path.join(__dirname, 'Frontent/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Frontent', 'dist', 'index.html'));
});


app.listen(port,()=>{
    console.log(`Server listening on the port: http://localhost:${port}`)
})