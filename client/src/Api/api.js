import axios from 'axios'

export const signupInfo=async(data)=>{
    console.log("second check",data);
    
try{
const response=await axios.post('http://localhost:3000/api/postdata',data)
console.log("fourth check",response);
return response.data.type

}catch(err){

}
}