const express = require('express')
const cors =require('cors')


//app config:
const app = express()
const port=4000

//middleware:
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('API Working')
})

app.listen(port,()=>{
    console.log(`Server listening on the port: http://localhost:${port}`)
})