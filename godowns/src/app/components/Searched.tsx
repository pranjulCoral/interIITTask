/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
const Searched = ({item}:{item:any,index:number}) => {
  return (
    <div className='flex justify-center ' >
        <div className=' bg-white w-1/2 mt-6  p-4 rounded-md shadow-xl shadow-black'>
            <img width={75} height={75}  src={item.image_url} alt="" />
            <div className=' text-sm font-medium font-mono'>{item.name}</div>

        </div>

    </div>
  )
}

export default Searched