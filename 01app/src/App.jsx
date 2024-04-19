import React from 'react'
import { useState } from 'react'
function App() {
  const [a, seta] = useState(69)
  return (
    <div className='main'>
      <div className="main1">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga illum et consequatur minus, voluptas, totam sint voluptates enim, adipisci eveniet quasi corporis labore.
        </div>
        <div>
          This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita.
        </div>
      </div>
      <h1>{a}</h1>
      <button id='btn' onClick={()=>seta(a+1)}>Click Me</button>
    </div>
  )
}

export default App