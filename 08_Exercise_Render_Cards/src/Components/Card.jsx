import React from 'react'

const Card = ({data}) => {
  return (
    <div id="card" className='w-1/5 m-4 bg-white p-3.5 rounded-3xl' >
        <div id="img">
            <img width='100%' src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='rounded-3xl'/>
        </div>
        <div id="content" className='mt-6 py-2 '>
            <h2><b>User ID</b> : {data.userId}</h2>
            <h2><b>ID</b> : {data.id}</h2>
            <h2><b>Title</b> : {data.title}</h2>
            <h2><b>Body</b> : {data.body}</h2>
        </div>
    </div>
  )
}

export default Card