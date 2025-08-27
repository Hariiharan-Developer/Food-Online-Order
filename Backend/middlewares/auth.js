const jwt =require('jsonwebtoken')

const authMiddleware = async (req,res,next)=>{
   const {token}=req.headers
   if (!token){
    return res.status(400).json({
        success:false,
        message:'Not Authorized Login again'
    })
   }
   try{
    const token_decod = jwt.verify(token,process.env.JWT_SECRET)
    req.body.userId = token_decod.id;
    next();
   }
   catch(err){
    console.error(err.message)
    res.status(404).json({
        succes:false,
        message:'error'
    })

   }

}

module.exports =authMiddleware