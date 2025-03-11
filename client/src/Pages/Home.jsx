import React from 'react'
import { useDispatch } from 'react-redux'
import { removedatas } from '../Redux/loginSlice'
import { Link } from 'react-router'

function Home() {

  const dispatch=useDispatch()

  function logoutData(){
dispatch(removedatas())
  }

  return (
    <div>
        <h3>Welcome to Home page</h3>
       <Link to={'/profile'}><button>Profile page</button></Link>
        <button onClick={logoutData}>Logout</button>
    </div>
  )
}

export default Home