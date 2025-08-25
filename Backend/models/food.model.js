const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please fill this name']
    },
    description:{
        type:String,
        required:[true,'Please fill this description']
    },
    price:{
        type:Number,
        required:[true]
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{timestamp:true})

const foodModel = mongoose.models.food || mongoose.model('Food',foodSchema)

module.exports = foodModel