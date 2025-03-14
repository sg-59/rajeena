import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { takeProfileData, updateDataformDatabase } from '../Api/api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Update() {

  const Data=useSelector((state)=>state.loginDatas.loginInfo)
  const [state, setState] = useState({
    username: '',
    email: '',
    mobile: '',
    password: ''
  });

  const navigate=useNavigate()

if(Data){
    var id=Data.userId
}
  

    useEffect(()=>{
        takeProfileData(id).then((data) => {
            setState({
              username: data.username || '',
              email: data.email || '',
              mobile: data.mobile || '',
              password: undefined
            });
        })
    },[])
    

console.log("state vale",state);

    function handlechange(e){
        const { name, value } = e.target;
        setState({
          ...state,
          [name]: value
    });
    }

    function display(){
console.log("final answer",state);
updateDataformDatabase(id,state,navigate)
    }

  return (
     <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
     <div className='mask gradient-custom-3'></div>
     <MDBCard className='m-5' style={{maxWidth: '600px'}}>
       <MDBCardBody className='px-5'>
         <h2 className="text-uppercase text-center mb-5">update page</h2>
         <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' value={state.username} id='form1' name='username' type='text' onChange={handlechange}/>
         <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' value={state.email} id='form2' name="email" type='email' onChange={handlechange}/>
         <MDBInput wrapperClass='mb-4' label='Your Mobile' size='lg' value={state.mobile} id='form3' name='mobile' type='number' onChange={handlechange}/>
         <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' name='password' type='password' onChange={handlechange}/>
 
         <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={display}>Update</MDBBtn>
       </MDBCardBody>
     </MDBCard>
   </MDBContainer>
  )
}

export default Update
