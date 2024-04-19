import React from 'react';
import Card from './Card';
import { useState,useEffect } from 'react';

const CardContainer = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetchData();
    })
  
    const fetchData = async() => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonData = await res.json()
        setUser(jsonData);
      } catch (e) {
        console.error(e)
      }
    }
  
    return (
    <>
        <div className='card-container bg-gray-400 rounded-lg flex flex-wrap justify-center'>
            {user.map((item,index)=>(
                <Card key={index} data={item}/>
            ))}
        </div>
    </>
  )
}

export default CardContainer