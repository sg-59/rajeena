import React, { useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

  import {styled} from "styled-components"
import { loggedData } from '../Api/api';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';

  const Main=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
  `
  const Sub=styled.div`
  width: 70%;
  height: 70vh;
  `

function Login() {

  const dispatch=useDispatch()

  const [data,setData]=useState({
    email:"",
    password:""
  })
  

  const [response,setResponse]=useState('')

  function handlechange(event){
    const {name,value}=event.target
    setData({...data,[name]:value})

  }

  function display(){
  loggedData(data,dispatch).then((data)=>{
    console.log("data rrached in login page",data);
    setResponse(data)
  })
  }

  return (
    <Main>
      <Sub>
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
<h5>{response}</h5>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' name='email' size="lg" onChange={handlechange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' name='password' size="lg" onChange={handlechange}/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <Link to={'/signup'}>Create an account?</Link>
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={display}>Sign in</MDBBtn>

     

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </Sub>
    </Main>
  )
}

export default Login
