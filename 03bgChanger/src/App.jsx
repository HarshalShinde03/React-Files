import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('Olive')
  return (
    <div className="w-full h-screen flex justify-center items-center" style={{backgroundColor:color}}>
      <div className='fixed bottom-10 bg-white px-3 py-2 rounded-3xl gap-3 flex justify-center shadow-lg'>
      {/* test */}
        <button onClick={()=>setcolor("Red")} className='outline-none px-4 py-2 rounded-full text-white ' style={{backgroundColor:"Red"}}>Red
        </button>
        <button onClick={()=>setcolor("Blue")}  className='outline-none px-4 py-2 rounded-full text-white ' style={{backgroundColor:"Blue"}}>Blue
        </button>
        <button onClick={()=>setcolor("Orange")} className='outline-none px-4 py-2 rounded-full text-white ' style={{backgroundColor:"Orange"}}>Orange
        </button>
        <button onClick={()=>setcolor("Green")} className='outline-none px-4 py-2 rounded-full text-white ' style={{backgroundColor:"Green"}}>Green
        </button>
      </div>
    </div>
  )
}

export default App