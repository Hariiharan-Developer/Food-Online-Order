const orderModel = require('../models/order.model.js')
const userModel = require('../models/user.model.js')
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order for frontend:
const placeOrder = async(req,res)=>{
    const frontend_url = 'http://localhost:5173'
 try{
    const newOrder = new orderModel({
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address
    })

    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
 
    const line_items = req.body.items.map((item)=>({
         price_data:{
            currency:'inr',
            product_data:{
                name:item.name
            },
            unit_amount:item.price*100
         },
         quantity:item.quantity
    }))

    line_items.push({
        price_data:{
            currency:'inr',
            product_data:{
                name:'Delivery Charge'
            },
            unit_amount:25
        },
        quantity:1
    })
    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:'payment',
        success_url:`${frontend_url}/verify?succes=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?succes=false&orderId=${newOrder._id}`,
       
    })
    res.json({
        success:true,
        session_url:session.url
    })
 }catch(err){
    console.error(err.message)
    res.status(400).json({msg:'error'})

 }

}



//temporary payment verification:
const verifyOrder = async (req,res)=>{
       const {orderId,succes} = req.body
       try{
            if(succes=='true'){
                await orderModel.findByIdndUpdate(orderId,{payment:true})
                res.json({success:true,message:'paid'})
            }
            else{
                await orderModel.findByIdAndDelete(orderId)
                res.json({success:true,message:'Not Paid'})
            }
       }
       catch(err){
        console.log(err.message)
        res.json({success:false,message:'error'})

       }
}

//user order for frontend:
const userOrders = async(req,res)=>{
try{
    const orders = await orderModel.find({userId:req.body.userId})
    res.status(200).json({success:true,data:orders})
}
catch(err){
 console.error(err.message)
 res.status({success:false,message:'eror'})
}
}

//list orders for admin panel:
const listOrders = async(req,res)=>{
    try{
           const orders = await orderModel.find({})
           res.status(202).json({
            success:true,
            data:orders
           })
    }
    catch(err){
             console.log(err.message)
             res.status(404).json({
                success:false,
                message:'error'
             })
    }

}

// api for updating order status:
const updatestatus = async (req,res)=>{
    try{
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.status(202).json({
            success:true,
            message:'status updated'
        })
      }

catch(err){
console.log(err.message)
res.status(400).json({
    success:false,
    message:'Error'
})
    }
}

module.exports ={placeOrder , verifyOrder, userOrders ,listOrders,updatestatus}