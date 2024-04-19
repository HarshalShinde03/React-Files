import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-slate-700 text-white py-2'>
        <div id="logo" className='font-bold text-xl mx-3'>
            iTask
        </div>
        <div className='flex gap-6 mx-5 '>
            <div className='cursor-pointer hover:font-bold'>Home</div>
            <div className='cursor-pointer hover:font-bold'>Your Task</div>
        </div>
    </div>
  )
}

export default NavBar