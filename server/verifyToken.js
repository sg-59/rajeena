const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()
function verifyJwtToken(req,res,next){
    console.log(req.headers.accesstoken);

    const token=req.headers.accesstoken
    
    try{
        if(token){
            console.log("hello I am verifyToken");
jwt.verify(token,process.env.secKey,(err,data)=>{
if(err) return res.status(401).json("token not authenticated")

    console.log("final answer in ",data);
    if(req.params.userId==data.id){
        next()
    }else{
        return res.status(401).json("token and login person are difrent")
    }
  
})
          
        }else{
            return res.status(401).json("token is not found")
        }
    
        

    }catch(err){

    }

}


module.exports=verifyJwtToken
