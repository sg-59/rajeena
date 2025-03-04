import axios from 'axios'
import { display, haiOk } from '../Redux/userSlice';

export const signupInfo=async(data)=>{
    console.log("second check",data);
    
try{
const response=await axios.post('http://localhost:3000/api/postdata',data)
console.log("fourth check",response);
return response.data.type

}catch(err){
console.log(err);

}
}


export const sampleApi=async(dispatch)=>{
    try{
const res=await axios.get('http://localhost:3000/api/getData')
console.log("final data",res.data);
dispatch(display(res.data))
return res.data

    }catch(err){
console.log(err);

    }
}

export const helloapi=async(dispatch)=>{
    try{
const res=await axios.get('https://jsonplaceholder.typicode.com/users')
dispatch(haiOk(res.data))
    }catch(err){

    }
}

