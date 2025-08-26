const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Pleaser enter name'],
        
    },
    
    email:{
        type:String,
        required:[true, 'Pleaser enter email'],
        unique:true
    },
    
    password:{
        type:String,
        required:[true, 'Pleaser enter password'],
        
    },
    cartData:{
        type:Object,
        default:{},

    }
    
},{minimize:false},{timestap:true})

const userModel = mongoose.models.User || mongoose.model('User',userSchema)
module.exports = userModel