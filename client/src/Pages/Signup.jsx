import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { signupInfo } from '../Api/api';

function Signup() {

    const [data,setData]=useState({
        username:String,
        email:String,
        mobile:Number,
        password:String

    })

    const [res,setRes]=useState('Create an account')

    function handlechange(event){
const {name,value}=event.target
setData({...data,[name]:value})
    }

    function display(){
        console.log("first check",data);
      signupInfo(data).then((data)=>{
setRes(data)
      })
    }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
    <div className='mask gradient-custom-3'></div>
    <MDBCard className='m-5' style={{maxWidth: '600px'}}>
      <MDBCardBody className='px-5'>
        <h2 className="text-uppercase text-center mb-5">{res}</h2>
        <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' name='username' type='text' onChange={handlechange}/>
        <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' name="email" type='email' onChange={handlechange}/>
        <MDBInput wrapperClass='mb-4' label='Your Mobile' size='lg' id='form2' name='mobile' type='number' onChange={handlechange}/>
        <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' name='password' type='password' onChange={handlechange}/>

        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={display}>Register</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  )
}

export default Signup