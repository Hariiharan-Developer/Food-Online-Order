const foodModel = require('../models/food.model')
const fs = require('fs')

//add food item:

const addFood = async(req,res)=>{
   
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save()
        res.status(201).json({success:true,message:'food added'})
    } catch (error) {
        console.error('Error msg:',error.message)
        res.status(400).json({success:false ,message:'Error'})
    }
}

// all food list:
const listFood = async(req,res)=>{
       try{
        const foods = await foodModel.find()
        res.status(202).json({
            success:true,
            data:foods
        })
       }
       catch(error){
        console.log('Error message:', error.message)
        res.status(400).json({message:'Error'})
       }
}


//remove food item:
const removeFood =async(req,res)=>{
       try{
        const food =await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id)
        res.status(201).json({
            success:true,
            message:'Food Removed'
        })
       }
       catch(error){
        console.log('Error:',error.message)
        res.status(400).json({message:'Error',success:false})
       }
}
module.exports =
{
    addFood,
    listFood,
    removeFood
}