  import React from 'react'
  import { FaFileAlt } from "react-icons/fa";
  import { LuDownload } from "react-icons/lu";
  import { IoIosClose } from "react-icons/io";
  import { motion } from "framer-motion"

  export const Card = ({data, reference}) => {
    return (
      <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className='relative w-52 h-64 rounded-[45px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden'>
          <FaFileAlt />
          <p className='mt-5'>{data.desc}</p>
          <div className='footer absolute bottom-0 w-full left-0'>
              <div className='flex justify-between py-3 px-6'>
                  <h5>{data.fileSize}</h5>
                  <span className='bg-zinc-800 rounded-full p-2 flex justify-center items-center'>
                  {data.close ? <IoIosClose/> : <LuDownload/>}
                  </span>
              </div>
              {data.tag.isOpen && (<div className={`tag flex items-center justify-center w-full ${data.tag.tagColor === "blue"? "bg-blue-600" : "bg-green-600"} py-4`}>
                  <h3 className='text-sm '>{data.tag.tagTitle}</h3>
              </div>)}
          </div>
      </motion.div>
    )
  }
