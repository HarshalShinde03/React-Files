// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// function App() {

//   const [id, setId] = useState(1)

//   function changeId(){
//     setId(id + 1)
//   }

//   return (
//     <>
//       <button onClick={changeId}>1</button>
//       <button onClick={changeId}>2</button>
//       <button onClick={changeId}>3</button>
//       <button onClick={changeId}>4</button>
//       <Todo id={id}/>
//     </>
//   )
// }

// function Todo({id}){

//   const [todos, setTodos] = useState({})


//   useEffect(()=>{
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(function(res){
//       setTodos(res.data.todo);
//     })
//   },[id])
//   console.log(todos);
//   return <div>
//     <h1>{todos.title}</h1>
//     <h4>{todos.description}</h4>
//   </div>
// }
// export default App


import React from 'react'
import { useState } from 'react';

const App = () => {

  // useCallback --> function
  // useMemo --> string/number
  const [counter, setCounter] = useState(0);
  const [val, setVal] = useState(1);
  return (
    <div>
      <input type="text"  onChange={(e)=>setVal(parseInt(e.target.value))}/>
      {console.log(val)}
      <br/>
      Sum is {(val * (val+1))/2}
      <br />

      <button onClick={function(){
        setCounter(counter + 1)
      }}>Counter ({counter})</button>
    </div>
  )
}

export default App