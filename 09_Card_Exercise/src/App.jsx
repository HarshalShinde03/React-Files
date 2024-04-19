import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [user, setuser] = useState([])

  const fetchData = async () =>{
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await res.json();
      setuser(data);
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <div id="container" className='flex flex-wrap m-auto justify-center'>
        {user.map((a)=>{
          return <div key={a.id} id="card" className='w-1/5 m-4 bg-gray-300 p-3.5 rounded-3xl'>
            <div id="img">
                <img width='100%' src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-2xl'/>
            </div>
            <div id="content" className='mt-3'>
                <h1><b>User ID :</b> {a.userId}</h1>
                <h2><b>ID :</b> {a.id}</h2>
                <h2><b>Title :</b> {a.title}</h2>
                <p><b>Body :</b> {a.body}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default App