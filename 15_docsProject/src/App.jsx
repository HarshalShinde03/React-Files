import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Background } from './components/Background'
import { Foreground } from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-zinc-800 w-full h-screen relative'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
