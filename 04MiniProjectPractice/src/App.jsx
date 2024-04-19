import React from 'react'
import { useState } from 'react'


const App = () => {
  const [color, setColor] = useState('Olive')
  
  return (
    <>
      <div className='w-full h-screen flex justify-center' style={{backgroundColor:color}}>
        {/* Test */}
        <div className='fixed bottom-12 flex px-4 py-3 bg-white rounded-full gap-3 '>
          <button onClick={()=>{setColor('Red')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Red'}}>Red</button>
          <button onClick={()=>{setColor('Green')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Green'}}>Green</button>
          <button onClick={()=>{setColor('Orange')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Orange'}}>Orange</button>
          <button onClick={()=>{setColor('Aqua')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Aqua'}}>Aqua</button>
          <button onClick={()=>{setColor('Salmon')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Salmon'}}>Salmon</button>
          <button onClick={()=>{setColor('Grey')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Grey'}}>Grey</button>
          <button onClick={()=>{setColor('Orchid')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Orchid'}}>Orchid</button>
          <button onClick={()=>{setColor('Gold')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Gold'}}>Gold</button>
          <button onClick={()=>{setColor('Purple')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Purple'}}>Purple</button>
          <button onClick={()=>{setColor('LightGreen')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'LightGreen'}}>LightGreen</button>
          <button onClick={()=>{setColor('Pink')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Pink'}}>Pink</button>
          <button onClick={()=>{setColor('Blue')}} className='px-3 py-2 rounded-full' style={{backgroundColor:'Blue'}}>Blue</button>
        </div>
      </div>
    </> 
  )
}

export default App