import { BrowserRouter,Routes, Route,useNavigate } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import React, { Suspense } from 'react'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy(()=>import('./components/Dashboard'))


function App() {

  return (
    <div>
      {/* <div>
        <button onClick={()=>{
          window.location.href = '/'
        }}>Landing page</button>
        <button onClick={()=>{
          window.location.href = '/dashboard'
        }}>Dashboard</button>
      </div>   */}

      

      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path = "/Dashboard"  element={
          <Suspense fallback={"Loading...."}>
            <Dashboard/>
          </Suspense>
          }  />
          <Route path = "/"  element={<Suspense fallback={"Loading...."}>
            <Landing/>
          </Suspense>}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{
          navigate('/')
        }}>Landing page</button>
        <button onClick={()=>{
          navigate('/dashboard')
        }}>Dashboard</button>
      </div>
  )
}


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Dashboard from './components/Dashboard';
// import Landing from './components/Landing';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/landing" element={<Landing />} /> */}
//         {/* Optionally, add a default route */}
//         <Route path="/" element={<Landing />} />
//         {/* Optionally, add a 404 page */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

