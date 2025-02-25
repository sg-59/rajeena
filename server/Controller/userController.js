const user=require('../Model/userSchema')
const argon2 = require('argon2');
const Signup=async(req,res)=>{

    const {username,email,mobile,password}=req.body
try{
    if(!username || !email || !mobile || !password){
        return res.status(401).json("must add all items")
    }
    console.log("third check",req.body);
    // req.body.password=await bcrypt.hash(req.body.password, 10)
    req.body.password = await argon2.hash(req.body.password);
const databaseData=await user.create(req.body)
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
    console.log(req.params.userId);
    
    try{
const a=await user.findById(req.params.userId)
return res.status(200).json({data:a})
    }catch(err){
return res.status(500).json(err)
    }
}

const getSingledatafromqueryindatabase=async(req,res)=>{
    console.log(req.query);
    
    try{
const a=await user.findOne({email:req.query.xyz})
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
    console.log("frendent values ..............",req.query.phone);
    
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
if(!a){
    return res.status(401).json("user is not found")
}
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}

const updatedatasinquery=async(req,res)=>{
    try{
const a=await user.findOneAndUpdate({email:req.query.gmail},{$set:req.body},{new:true})
return res.status(200).json(a)
    }catch(err){
return res.status(500).json(err)
    }
}


module.exports={Signup,getDatafromDatabase,getSingleDataFromdatabase,getSingledatafromqueryindatabase,deleteDatafromDatabase,deletedatabasefromquery,updatedDataFromDatabase,updatedatasinquery}