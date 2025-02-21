const user=require('../Model/userSchema')
const argon=require('argon2')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()

const loginInfo=async(req,res)=>{
    try{
const finUser=await user.findOne({email:req.body.email})

console.log("find user",finUser);


if(!finUser){
    return res.status(401).json("email not found")
}


    if (await argon.verify(finUser.password, req.body.password)) {
        const genereateToken=await jwt.sign({id:finUser._id},process.env.secKey,{expiresIn:"1d"})
    return res.status(200).json({token:genereateToken,userId:finUser._id})
    } else {
     return res.status(401).json("email password does'nt match")
    }

    }catch(err){
return res.status(500).json(err)
    }
}

module.exports={loginInfo}