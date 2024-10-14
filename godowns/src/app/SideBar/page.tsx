
"use client"
import React, {useContext ,useEffect} from 'react'
import SideBarModal from '../components/SideBarModal.tsx';
import { MyContext } from '../components/Context.jsx';
import FetchItems from '../components/FetchItems.tsx';
import Login from '../Login/page.tsx'
import { IoMdArrowDropright } from "react-icons/io";

const Page = () => {
    
    const {isSideBarOpen , setIsSideBarOpen ,session} = useContext(MyContext);
    const {setSession} = useContext(MyContext);
    useEffect(()=>{
    
        const token = localStorage.getItem("token")?localStorage.getItem("token"):null;
        setSession(token);
      

    },[session]);
    
 
  return (
    <>
    {session?<div className="flex w-screen h-screen mb-2">
        {/* Click to open Sidebar */}
      {!isSideBarOpen?<div className='   flex items-center '>
        <div onClick={()=>setIsSideBarOpen(true)} className="bg-slate-700 p-4 rounded-tr-md rounded-br-md shadow-md cursor-pointer shadow-slate-700 text-white "><IoMdArrowDropright/></div>
        </div>:""}
        <div className={isSideBarOpen?' cursor-pointer w-2/5 md:w-1/5 h-full':' cursor-pointer hidden h-full'} >
        {/* <MdOutlineSegment color='black' size='40px' /> */}
        {isSideBarOpen?<SideBarModal/>:""}
        </div>
        {/* Images showing */}
        <div className={isSideBarOpen?'w-3/5 md:w-4/5 overflow-y-scroll ':'w-full overflow-y-scroll '}>
         
          <FetchItems/>
          

        </div>
       
    </div>:<Login/>
}
    </>
  )
}

export default Page