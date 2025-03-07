import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Signup from './Pages/Signup'
import Sample from './Pages/Sample'
import Hello from './Pages/Hello'
import Second from './Pages/Second'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'

function App() {
 const logindata= useSelector((state)=>state.loginInfos.loginInfo)
 console.log("final answer in login data from local storage",logindata);
 
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/sample' element={<Sample/>}/>
  <Route path='/hello' element={<Hello/>}/>
  <Route path='/second' element={<Second/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App