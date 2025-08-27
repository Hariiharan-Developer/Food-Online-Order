const userModel = require('../models/user.model.js')

//add item to cart:
const addtoCart = async(req,res)=>{

    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId]=1
        }
        else{
            cartData[req.body.itemId] +=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.status(202).json({
            success:true,
            message:' item added succesfully'
        })
    }
    catch(err){
        console.log(err.message)
        re.status(400).json({
            succes:false,
            message:'error'
        })
    }
}


//remove item from user cart:
const removeFromCart =async(req,res)=>{

    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1

        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.status(202).json({
            success:true,
            message:'Remove from the cart'
        })
    }
    catch(err){
        console.error(err.message)
        res.status(400).json({
            succes:false,
            message:'error'
        })

    }

}

//fetch' user cart data:
const getCart = async(req,res)=>{

    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        res.status(202).json({
            success:true,
            cartData
        })

    }
    catch(err){
        console.error(err.message)
        res.status(404).json({
            success:false,
            message:'error'
        })
    }

}

module.exports =
{
    addtoCart,
    removeFromCart,
    getCart
    
}