import axios from 'axios'
import { display, haiOk } from '../Redux/userSlice';
import { storeloginInfo } from '../Redux/loginSlice';

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



export const loggedData=async(data,dispatch)=>{
    try{
const res=await axios.post(`http://localhost:3000/login/verifylogin`,data)
console.log("final answer in login",res.data);
if(res.data.status){
    dispatch(storeloginInfo(res.data))
    return  "login success"
}

    }catch(err){
console.log("error message in login status",err.response.data);
return err.response.data
    }
}

export const takeProfileData=async(id)=>{
    try{
const res=await axios.get(`http://localhost:3000/api/getSingleData/${id}`)
console.log("**********************",res.data);

return res.data

    }catch(err){

    }
}