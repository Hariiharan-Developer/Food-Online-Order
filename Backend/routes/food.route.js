const express = require('express')
const {addFood , listFood,removeFood}=require('../controllers/food.controller')
const multer = require('multer')

const foodRouter = express.Router()


//Image Storage Engine:
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cd)=>{
       return cd(null,`${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post('/add',upload.single('image'), addFood)
foodRouter.get('/list',listFood)
foodRouter.delete('/remove',removeFood)
module.exports = foodRouter