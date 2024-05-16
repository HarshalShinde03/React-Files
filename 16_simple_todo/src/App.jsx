import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })
  },[])


  return(
    <div>
      {todos.map(todo=><Todo title={todo.title} description={todo.description}/>)}
    </div>
  )

}

function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}
/*
  const [count, setCount] = useState(0)
  let counter = 4
  const [todos, setTodos] = useState([{
    id:1, 
    title: 'Learn React',
    description: 'learn react with the help of resoruces available on internet.'
  },
  {
    id:2, 
    title: 'Learn NodeJS',
    description: 'learn nodejs with the help of resoruces available on internet.'
  },
  {
    id:3, 
    title: 'Learn mongoDB',
    description: 'learn mongoDB with the help of resoruces available on internet.'
  }
  ])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo)=> {
        return (
          <Todo title={todo.title} description={todo.description}/>
        )
      })}
    </>
  )
}

function Todo({title,description}){
  return(
  <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <br />
  </div>
  )
}*/

export default App
