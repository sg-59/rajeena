const user=require('../Model/userSchema')
const bcrypt = require('bcrypt');
const argon2 = require('argon2');
const Signup=async(req,res)=>{
try{
    console.log("postman data",req.body);
    // req.body.password=await bcrypt.hash(req.body.password, 10)
    req.body.password = await argon2.hash(req.body.password);
const databaseData=await user.create({username:req.body.name,...req.body})
return res.status(200).json({type:"signup suceess",ok:databaseData})
}catch(err){
return res.status(500).json(err)
}
}



module.exports={Signup}