import { useState,useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState(100)
  
  useEffect(() => {
    alert("Count Updated")
    setColor(color+10)
  }, [count])
  

  return (
    <>
      <NavBar color={'ABC '+color}/>
      <h2>Count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </>
  )
}

export default App
