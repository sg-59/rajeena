import React, { useEffect, useState } from 'react'
import { sampleApi } from '../Api/api'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'

function Sample() {

    const dispatch=useDispatch()

    const [data,setData]=useState([])

    useEffect(()=>{
sampleApi(dispatch).then((response)=>{
setData(response)
})
    },[])

  return (
    <div>
        {data.map((li)=>(
            <>
            <h3>{li.username}</h3>
            <h3>{li.email}</h3>
            <h3>{li.mobile}</h3>
            </>
        ))}
        <Link to={'/hello'}>Hello page</Link>
    </div>
  )
}

export default Sample