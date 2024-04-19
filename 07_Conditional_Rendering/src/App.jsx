import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shwobtn, setshwobtn] = useState(false)

  return (
    <>

      {/* {shwobtn?<button className='border border-amber-500 px-3 py-2'>Toggle Me</button>:""} */}

      {shwobtn && <button className='border border-amber-500 px-3 py-2 mb-4'>Toggle Me</button>}

      <div className="card">
        <button onClick={() => setshwobtn(!shwobtn)}>
          count is {count}
        </button>
      </div>


    </>
  )
}

export default App
