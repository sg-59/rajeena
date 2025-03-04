import React, { useEffect } from 'react'
import { helloapi } from '../Api/api'
import { useDispatch } from 'react-redux'

function Ok() {

    const dispatch=useDispatch()

    useEffect(()=>{
helloapi(dispatch)
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Ok
