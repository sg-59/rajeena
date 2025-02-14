const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routerpage=require('./Router/userRouter')
dotenv.config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.mongoUrl).then(()=>{
    console.log("data base are connected");
    
}).catch((err)=>{
    console.log(err.message);
    
})  


app.use('/api',routerpage)

app.listen(3000,()=>{
    console.log("port 3000 is connected");
    
})

