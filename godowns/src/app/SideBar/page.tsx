
"use client"
import React, {useContext ,useEffect} from 'react'
import SideBarModal from '../components/SideBarModal.tsx';
import { MyContext } from '../components/Context.jsx';
import FetchItems from '../components/FetchItems.tsx';
import Login from '../Login/page.tsx'

const Page = () => {
    
    const {isSideBarOpen , setIsSideBarOpen ,session} = useContext(MyContext);
    const {setSession} = useContext(MyContext);
    useEffect(()=>{
    
        const token = localStorage.getItem("token")?localStorage.getItem("token"):null;
        setSession(token);
      

    },[]);
    
   
  return (
    <>
    {session?<div className="flex w-screen h-screen">
        {/* Click to open Sidebar */}
        <div className=' cursor-pointer w-2/5 md:w-1/5 h-full' onClick={()=>setIsSideBarOpen(true)}>
        {/* <MdOutlineSegment color='black' size='40px' /> */}
        {isSideBarOpen?<SideBarModal/>:""}
        </div>
        {/* Images showing */}
        <div className='w-3/5 md:w-4/5 overflow-y-scroll mb-4'>
          <FetchItems/>

        </div>
       
    </div>:<Login/>
}
    </>
  )
}

export default Page