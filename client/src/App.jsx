import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Signup from './Pages/Signup'
import Sample from './Pages/Sample'
import Hello from './Pages/Hello'

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/sample' element={<Sample/>}/>
  <Route path='/hello' element={<Hello/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App