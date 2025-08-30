const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
        
    },
    address:{
       firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: { type: String, required: true },
        phone: { type: String, required: true }
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    },
    status:{
        type: String,
        enum: ['Food Processing', 'Out for delivery', 'Delivered'], //  restrict to valid options
        default: 'Food Processing'
    }
},{timestamps:true})
const orderModel = mongoose.models.order || mongoose.model('Order',orderSchema)
module.exports = orderModel