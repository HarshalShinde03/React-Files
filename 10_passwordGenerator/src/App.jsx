import React from 'react'
import { useState,useCallback,useEffect } from 'react';
const App = () => {
  const [length, setlength] = useState(8);
  const [number, numberAllowed] = useState(false);
  const [character, characterAllowed] = useState(false);
  const [password, setpassword] = useState('');

  
  let passwordGenerator = useCallback(
    () => {
      let pass = '';
      let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(number) str += '0123456789'
      if(character) str += "!@#()$}%[&]*{~_-?/="

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setpassword(pass);
    },
    [length,number,character,setpassword],
  )
  
  useEffect(() => {
   passwordGenerator()
  
  }, [length,number,character])
  
  
  return (
    <>
      <div className='max-w-md bg-gray-700 rounded-lg text-orange-500 mx-auto my-20 px-4 py-6'>
        <h1 className='text-2xl text-white text-center py-2'>Password Generator</h1>
        <div className='flex rounded-lg mb-4'>
          <input 
          type="text" 
          value={password}
          className='rounded-lg px-3 py-1  w-full' 
          placeholder='Password'
          readOnly/>
          <button className='bg-blue-800 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex gap-x-6 text-sm py-2'>
          <div className='flex gap-x-2 items-center'>
            <input 
            type="range" 
            min={8} 
            max={35} 
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}/>
            <label >Length : {length}</label>
          </div>
          <div className='flex gap-x-2 items-center '>
            <input 
            type="checkbox" 
            defaultValue={number}
            onChange={()=>{
              numberAllowed((prev)=>!prev)
            }}/>
            <label >Number</label>
          </div>
          <div className='flex gap-x-2 items-center '>
            <input 
            type="checkbox" 
            defaultValue={character}
            onChange={()=>{
              characterAllowed((prev)=>!prev)
            }}/>
            <label >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App