import React from 'react'
import { useState,useEffect,useCallback } from 'react'
const App = () => {
  
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState('')
  
  let passwordGenerator = useCallback(
    () => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if(numberAllowed) str += '0123456789'
      if(characterAllowed) str += '!@#$%^&*()_{}[]?/'

      for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);  
      }
      setpassword(pass)
    },
    [length,numberAllowed,characterAllowed],
  )
  
    const copyClipboard = useCallback(
      () =>{
        window.navigator.clipboard.writeText(password);
      },
      [password],
    )
    

  useEffect(() => {
    passwordGenerator()
  
  }, [length,numberAllowed,characterAllowed])
  

  return (
    <>
      <div className='max-w-md bg-gray-700 mx-auto py-4 px-4 rounded-lg my-20'>
        <h1 className='text-2xl text-white text-center mb-2'>Password Generator</h1>
        
        <div className='flex mb-4'>
          
          <input 
          type="text"
          value={password} text-white
          className='px-2 py-1 w-full rounded-lg text-orange-500 text-xl'
          placeholder='password'
          readOnly />

          <button onClick={copyClipboard} className='rounded-lg bg-blue-700 px-2 py-1 text-white shrink-0'>copy</button>
        </div>

        <div className='flex gap-x-4'>

          <div className='flex gap-x-2 text-white'>
            <input 
            type="range"
            value={length}
            min={8}
            max={35}
            className='cursor-pointer'  
            onChange={(e)=>{setlength(e.target.value)}} 
            />
            <label htmlFor="">Length : {length}</label>
          </div>

          <div className='flex gap-x-2 text-white'>
            <input 
            type="checkbox"
            value={numberAllowed}
            className='cursor-pointer'  
            onChange={ ()=>{
              setnumberAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="">Number</label>
          </div>

          <div className='flex gap-x-2  text-white'>
            <input 
            type="checkbox"
            value={characterAllowed}
            className='cursor-pointer'  
            onChange={ ()=>{
              setcharacterAllowed((prev)=>!prev)
            }} 
            />
            <label htmlFor="">Character</label>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App