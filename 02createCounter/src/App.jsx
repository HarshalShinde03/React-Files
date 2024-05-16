import { useState } from 'react'

import './App.css'


function App() {
  // let count = 10
  let [counter, setcounter] = useState(10)

  // const addVal = () =>{
  //   setcounter(counter+1)
  // }
  // const removeVal = () =>{
  //  if(counter>1){
  //   setcounter(counter-1)
  //  }
  // }

  
  return (
    <>
      {/* <h2>Jai Shree Ram🚩{counter}</h2>
      <button onClick={addVal}>Add Count {counter}</button>
      <br/>
      <button onClick={removeVal}>Remove Count {counter}</button> */}
      <HeaderButton/>
      <Header title='Hi Dinesh.'/>
    </>
  )
}

function HeaderButton(){
  let [val, setVal] = useState('My name is Harshal');
  function updateTitle(){
    setVal('My name is '+Math.random());
  }
  
  return <div>
    <button onClick={updateTitle}>Update title</button>
    <Header title= {val}/>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App