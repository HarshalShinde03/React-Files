import { useState } from 'react'
import Navbar from './Components/Navbar';
import CardContainer from './Components/CardContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='mb-14'></div>
      <CardContainer/>
    </div>
  )
}

export default App
