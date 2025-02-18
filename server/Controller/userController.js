const user=require('../Model/userSchema')
const bcrypt = require('bcrypt');
const argon2 = require('argon2');
const router = require('../Router/userRouter');
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

const getDatafromDatabase=async(req,res)=>{
    try{
const a=await user.find()
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}

const getSingleDataFromdatabase=async(req,res)=>{
    
    
    try{
const a=await user.findById(req.params.userId)
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}

const getSingledatafromqueryindatabase=async(req,res)=>{
    console.log(req.query);
    
    try{
const a=await user.findOne({email:req.query.gmail})
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}

const deleteDatafromDatabase=async(req,res)=>{
    try{
await user.findByIdAndDelete(req.params.Id)
return res.status(200).json("deleted successfully")
    }catch(err){
return res.status(500).json(err)
    }
}

const deletedatabasefromquery=async(req,res)=>{
    try{
await user.findOneAndDelete({mobile:req.query.phone})
return res.status(200).json("deleteData from databse successfully")
    }catch(err){
return res.status(500).json(err)
    }
}

const updatedDataFromDatabase=async(req,res)=>{
    try{
const a=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}


module.exports={Signup,getDatafromDatabase,getSingleDataFromdatabase,getSingledatafromqueryindatabase,deleteDatafromDatabase,deletedatabasefromquery,updatedDataFromDatabase}