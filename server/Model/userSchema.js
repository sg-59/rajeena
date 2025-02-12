const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    mobile:Number,
    password:String
},{timestamps:true})

module.exports=mongoose.model('gopikacollections',userSchema)