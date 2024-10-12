/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import React, { useContext, useState } from 'react'
import {MdSearch} from 'react-icons/md'
import axios from 'axios'
import {url} from '../lib/constant.ts'
import {MyContext} from '../components/Context.jsx'
import {ClipLoader} from 'react-spinners'
import toast , {Toaster} from 'react-hot-toast'
import Searched from '../components/Searched.tsx'

const Page = () => {
    const [query,setQuery] = useState("");
    const {searchResult , setSearchResult , searchLoading , setSearchLoading} = useContext(MyContext);
    const getSearchResults=async()=>{
         try{
           setSearchLoading(true);
           const response = await axios.get(`${url}getSearchResults?query=${query}`);
           console.log(response.data);
           setSearchResult(response.data);
           toast.success("Search Successfull")

         }
         catch(error){
            setSearchLoading(false);
            toast.error(error.response.data)
         }
         finally{
            setSearchLoading(false);
         }
    }
  return (
    <div>
        <Toaster/>
        <div className='flex justify-center mt-4 '>
            <div className=' bg-white rounded-full'>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search For Your Favorite Item' className=" p-2 rounded-full border-lightPink border-none outline-none" />
            <button onClick={getSearchResults} className=" bg-gradient-to-b from-orange-200 to-lightPink rounded-full p-1 mr-2 hover:bg-white font-bold"><MdSearch/></button>
            </div>

        </div>

        {
            !searchLoading?
            <div>
                {
                    searchResult.length>0?
                    <div className=" grid md:grid-cols-5 grid-cols-1">
                        {
                            searchResult.map((item:any,index:number)=>(
                               
                                <Searched key={index} item={item} index={index} />

                                
                            ))
                        }

                    </div>
                    :
                    <div className= " flex justify-center text-sm font-mono mt-20">
                        No items found with this query , search again
                    </div>
                }
            </div>
            :<div className= " flex justify-center text-sm font-mono mt-20">
                <ClipLoader size={20} color='black'/>
            </div>
        }
    </div>
  )
}

export default Page