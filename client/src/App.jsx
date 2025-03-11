import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

function App() {
 const logindata= useSelector((state)=>state.loginDatas.loginInfo)
 if(logindata){
  var token=logindata.token
 }

 console.log("token value",token);
 
 
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={token ? <Home/> : <Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/profile' element={token ? <Profile/> : <Login/>}/>



</Routes>
</BrowserRouter>
  )
}

export default App