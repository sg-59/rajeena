import React from 'react'
import { useSelector } from 'react-redux';

function Second() {
    const reduxData=useSelector((state)=>state.userInfo.userData)

    console.log("redux data",reduxData);
  return (
    <div>
    {reduxData?.map((li)=>(
        <>
        <h3>{li.username}</h3>
        </>
    ))}
</div>
  )
}

export default Second