// import { useContext, useState } from 'react'
// import './App.css'
// import { CountContext } from './context'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <CountContext.Provider value = {count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </>
//   )
// }

// function Count({setCount}){
//   const count = useContext(CountContext);
//   return <div>
//     {count}
//     <Buttons setCount={setCount}/> 
//   </div>
// }
  
// function Buttons({ setCount }){
//   const count = useContext(CountContext);
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Increase</button>


//     <button onClick={()=>{
//       setCount(count-1)
//     }}>Decrease</button>
//   </div>
// }

// export default App


// import React from 'react'
import React from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';


function App() {

  return (
    <>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
    </>
  )
}

function Count(){
  console.log("renderrr")
  return <div>
    <CountRerender/>
    <Buttons/> 
  </div>
}
  
function CountRerender(){
  const count =useRecoilValue(countAtom);
  return <div>
    {count}
    {count % 2 == 0 ? 'it is even' : ''}
  </div>
}

function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>


    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
