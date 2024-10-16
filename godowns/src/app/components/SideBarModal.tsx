/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "../lib/constant.ts";
import { MdOutlineArrowDropDown ,MdOutlineArrowDropUp , MdFileCopy  } from "react-icons/md";
import { MyContext } from "./Context.jsx";
import {ClipLoader} from 'react-spinners'

const RecursiveComponent = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFetchedItem ,setIsLoading} = useContext(MyContext);

  return (
    <div className=" ">
      {/* Parent Item */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 flex space-x-2 cursor-pointer"
      >
        <div>
          {isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
        </div>
        <div>{item.name}</div>
      </div>

      {/* Nested Children */}
      {isOpen && item.children && item.children.length > 0 && (
        <div className="ml-4">
          {item.children.map((child: any, index: any) => (
            <RecursiveComponent key={index} item={child} />
          ))}
        </div>
      )}

      {/* Nested Items */}
      {isOpen && item.items && item.items.length > 0 && (
        <div className="ml-4">
          {item.items.map((subItem: any, index: any) => (
            <div key={index} onClick={
              async()=>{
                try{
                  setIsLoading(true);
                  const response = await axios.get(`${url}getItemById?id=${subItem.item_id}`);
                  setFetchedItem(response.data);
                }
                catch(error:any){
                  setIsLoading(false);
                  console.log(error);
                }
                finally{
                  setIsLoading(false);
                }
              }
            } className=" flex p-2 space-x-2 ">
            
            <div>
             <MdFileCopy/>
            </div>
            <div key={index} className="">
              {subItem.name}
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default function SideBarModal() {
  const [godownData , setGodownData ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGodown = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${url}/getSubGodown`);
        console.log(response.data);
        setGodownData(response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      finally{
        setIsLoading(false)
      }
    };
    fetchGodown();
  }, []);
  const {isSideBarOpen,setIsSideBarOpen} = useContext(MyContext);

  const handleClick=()=>{
    setIsSideBarOpen(false);
    console.log(isSideBarOpen)
    console.log("Hi")
  }

  return (
    <div className={isSideBarOpen?"bg-slate-800 h-screen overflow-y-scroll mb-2 animate-slide-in-left":"bg-slate-800 h-screen overflow-y-scroll mb-2 animate-slide-in-right"}>
      <div className=" flex justify-between text-white font-bold ">
        <div className="text-xl ml-2">Contents</div>
         <button onClick={handleClick} className="mr-2">&times;</button>
      </div>
            <div className="border border-b border-slate-500 mt-2" />


     {!isLoading? <div className="text-white  ">
        {godownData.map((item: any, index: any) => (
          <React.Fragment key={index}>
            <RecursiveComponent item={item} />
            <div className="border border-b border-slate-500" />
          </React.Fragment>
        ))}
      </div>:     
      <div className="flex justify-center mt-20">
        <ClipLoader size={20} color="white"/>
      </div>
}
      
    </div>
  );
};
