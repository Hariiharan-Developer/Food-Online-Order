const express = require('express')
const cors =require('cors')
const dotenv = require('dotenv').config()
const connectDb = require('./config/db')


//app config:
const app = express()
const port=4000

//middleware:
app.use(express.json())
app.use(cors())

connectDb()
app.get('/',(req,res)=>{
    res.send('API Working')
})

app.listen(port,()=>{
    console.log(`Server listening on the port: http://localhost:${port}`)
})