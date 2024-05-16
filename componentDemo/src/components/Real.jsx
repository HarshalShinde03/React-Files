import React from 'react'
import { useEffect } from 'react'

function Real() {
    useEffect(() => {
        const ref = setInterval(()=>{
            console.log("Hello ")
        },1000);

        return ()=> clearInterval(ref)
    }, [])
  return (
    <div>Real</div>

  )
}

export default Real