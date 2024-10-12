/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useContext} from 'react'
import { MyContext } from './Context.jsx';

const RecursiveComponent = (index:any , item:any) => {
    const {isOpenIndex} = useContext(MyContext);
    console.log("index",isOpenIndex);
    console.log(item)
  return (
    <>
        <div>
                {isOpenIndex===index && ( item.children.length>0)?
                <div className=" ml-2">
                     {
                      item.children.map((item:any,index:number)=>(
                        <div key={index}>
                          {item.name}
                        </div>
                      ))
                     }
                </div>:""}
                
              </div>
              <div>
                {isOpenIndex===index && ( item.items.length>0)?
                <div className=" ml-2">
                     {
                      item.children.map((item:any , index:number)=>(
                        <div key={index}>
                          {item.name}
                        </div>
                      ))
                     }
                </div>:""}
                
              </div>
           
   </>
  )
}

export default RecursiveComponent