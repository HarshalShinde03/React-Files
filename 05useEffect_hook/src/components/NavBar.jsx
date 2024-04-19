import React, {useEffect} from 'react'

const NavBar = ({color}) => {
    useEffect(() => {
      alert("Every time I'll Run!!!")
    })

    useEffect(() => {
        alert("I will run only once!!! ")
    }, [])

    useEffect(() => {
      alert("Color increased")
    }, [color])
    
  return (
    <div>NavBar is here {color}</div>
  )
}

export default NavBar