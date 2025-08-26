const userModel = require ('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const validator =require('validator')

//login user:
const loginUser = async(req,res)=>{
    const {email,password}=req.body
    try{
      const user = await userModel.findOne({email})

      if(!user){
        return res.json({
            success:false,
            message:'User does not exist'
        })
      }
      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch){
        return res.status(400).json({
            success:false,
            message:'Invalid Credantials'
        })
      }
      const token = createToken(user._id)
      res.status(200).json({
        success:true,
        token
      })
    }
    catch(err){
     console.log(err.message)
     res.status(400).json('error')
    }
   
}



const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register
const registerUser = async(req,res)=>{

    const {name,password,email}=req.body
    try{
        //Checking user already exist:
      const exists = await userModel.findOne({ email });
      if (exists) {
        return res.status(200).json({
          success: true,
          message: "user already exist",
        });
      }
      // validating email format & starong password:
      if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,
            message:'Please enter valid email'
        })
      }

      if(password.length<8){
        return res.status(400).json({
            success:false,
            message:'Password required 8 character'
        })
      }
      //Bcyrpt : hashing User password:
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt)

      //New User:
      const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
      })
      const user = await newUser.save()
      const token = createToken(user._id)
      res.status(202).json({
        success:true,
        message:'Token Created',
        token:token
      })
    }

    catch(err){
      res.status(400).json({
        success:false,
        message:'Error'
      })
      console.error(err.message)
    }
}

module.exports =
{
    loginUser,
    registerUser
}