import React, { useEffect } from 'react'

const ViewUsers = () => {
    const fetchUser=async()=>{
        const resdata=await fetch("http://localhost:3002/users",{
            method:"GET"
        })
        const userjson=await resdata.json()
    }
    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <div>
      <h1>List of users</h1>
    </div>
  )
}

export default ViewUsers
