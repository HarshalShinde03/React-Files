import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // let count = 10
  let [counter, setcounter] = useState(10)

  const addVal = () =>{
    setcounter(counter+1)
  }
  const removeVal = () =>{
   if(counter>1){
    setcounter(counter-1)
   }
  }
  return (
    <>
      <h2>Jai Shree Ram🚩{counter}</h2>
      <button onClick={addVal}>Add Count {counter}</button>
      <br/>
      <button onClick={removeVal}>Remove Count {counter}</button>
    </>
  )
}

export default App