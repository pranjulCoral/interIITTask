/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React,{useContext,useState} from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {MyContext} from './Context.jsx'
import MobileNavbar from './MobileNavbar.tsx'
import Link from 'next/link';


const Navbar = () => {
    const [isClicked,setIsClicked] = useState<boolean>(false);
    const {   setIsModalOpen } = useContext(MyContext);
  return (
    <>
    <div className="flex justify-between ">
    
    <div className="text-center">
      {/* Navbar Heading Here */}
      <h1 className="text-2xl p-4  text-center font-extrabold font-mono">Godowns</h1>
    </div>
    {/* Other Pages Login/Signup , Home, Search Page,SideBar + ItemsShowingPage  */}
    <div className=' hidden cursor-pointer justify-evenly space-x-12 mr-4 p-4 font-semibold font-mono lg:flex '>
        <Link href='/MainPage'>Home</Link>
        <Link href="/SideBar">Items</Link>
        <Link href='/Search'>Search</Link>
        <h1 className=' border rounded-md pl-2 pr-2 bg-white cursor-pointer text-pink-600 border-pink-600'>Signup</h1>


    </div>
    <div id='hamburger-for-mobile-responsive' className=' lg:hidden mr-2 sm:mr-4 md:mr-8 cursor-pointer pt-2'>

<div onClick={()=>
 {
   setIsClicked(!isClicked)
   setIsModalOpen(true)}}>
{isClicked?
  <RxCross2 color='white' size='40px'  />
  
:
<MdOutlineSegment color='black' size='40px' />}
{isClicked?<MobileNavbar/>:""}
</div>


</div>
  </div>
  <div className=' border border-b border-black opacity-20'/>
  </>
  
  )
}

export default Navbar