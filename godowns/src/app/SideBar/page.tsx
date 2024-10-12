"use client"
import React, { useState,useContext} from 'react'
import {MdOutlineSegment} from 'react-icons/md'
import SideBarModal from '../components/SideBarModal.tsx';
import { MyContext } from '../components/Context.jsx';
import FetchItems from '../components/FetchItems.tsx';

const page = () => {
    
    const {isSideBarOpen , setIsSideBarOpen} = useContext(MyContext);
   
  return (
    <div className="flex w-screen h-screen">
        {/* Click to open Sidebar */}
        <div className=' cursor-pointer w-2/5 md:w-1/5 h-full' onClick={()=>setIsSideBarOpen(true)}>
        {/* <MdOutlineSegment color='black' size='40px' /> */}
        {isSideBarOpen?<SideBarModal/>:""}
        </div>
        {/* Images showing */}
        <div className='w-3/5 md:w-4/5'>
          <FetchItems/>

        </div>
       
    </div>
  )
}

export default page