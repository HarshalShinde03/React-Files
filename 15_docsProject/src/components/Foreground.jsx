import React, { useRef } from 'react'
import { Card } from './Card'

export const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc : "This is the data that will be displayed",
            fileSize: "0.9mb",
            close: "true",
            tag:{ isOpen : true, tagTitle: "Download Now", tagColor:"green"}
        },
        {
            desc : "This is the data that will be displayed",
            fileSize: "0.9mb",
            close: "true",
            tag:{ isOpen : true, tagTitle: "Download Now", tagColor:"blue"}
        },
        {
            desc : "This is the data that will be displayed",
            fileSize: "0.9mb",
            close: "true",
            tag:{ isOpen : true, tagTitle: "Download Now", tagColor:"green"}
        },
    ]
  return (
    <>
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-8 p-4'>
    {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
    ))}
    </div>
    </>
  )
}
