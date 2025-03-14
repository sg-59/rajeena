import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { takeProfileData } from '../Api/api';
import { Link } from 'react-router';

function Profile() {
    const logindata= useSelector((state)=>state.loginDatas.loginInfo)

    const [data,setData]=useState()

    if(logindata){
     var id=logindata.userId
    }
console.log("final id",id);

    useEffect(()=>{
takeProfileData(id).then((data)=>{
    setData(data)
})
    },[])
console.log("////////////////////////////////",data);

  return (
    <div>
        <h2>This is a profile page</h2>
        <h4>name : {data?.username}</h4>
        <h4>email : {data?.email}</h4>
        <h4>mobile : {data?.mobile}</h4>
      <Link to={'/update'}><button>Update data</button></Link>  
    </div>
  )
}

export default Profile