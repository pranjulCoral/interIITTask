 import React, { useContext } from 'react'
 import { MyContext } from './Context.jsx';
 import Image from 'next/image'
 import {ClipLoader} from 'react-spinners'
 
 const FetchItems = () => {
  const {fetchedItem , setFetchedItem , isLoading} = useContext(MyContext);
   return (
     <>{!isLoading?<div className=' w-full h-full'>
      <div className="flex justify-center text-xl md:text-3xl font-bold font-mono mt-2 underline underline-offset-2">
        Items in Godown

      </div>
        

        {fetchedItem?
        <div className=" ml-4 mr-4  ">
        <div className='bg-white bg-opacity-70  rounded-md shadow-xl shadow-black mt-4  '>
          <div className='  p-2 flex justify-center  space-x-12 ' >
            <img width={350} height={350} src={fetchedItem.image_url} className=' rounded-md border border-lightPink shadow-md shadow-black'/>     
          </div>
          <div className=' border border-b border-black ml-4  mr-4 mt-2'/>
       
          <div className=' lg:flex justify-around font-bold font-mono p-2'>
            <div>
              <label htmlFor="">Name:{fetchedItem.name}</label>
            </div>
         <div>
              <label htmlFor="">Price:{fetchedItem.price}</label>
            </div>
           
         <div>
              <label htmlFor="">Category:{fetchedItem.category}</label>
            </div>

            <div>
           <label htmlFor="">Status:{fetchedItem.status}</label>
         </div>
         


          </div>

        
         <div>
          
        
         </div>
         
      </div>
        
        </div>
        :<div className=' flex justify-center items-center mt-40 text-sm'>No Items Selected</div>}
     </div>:<div className=' flex justify-center mt-20'>
     <ClipLoader size={40} color="black" />
   </div>}
   </>
     
   )
 }
 
 export default FetchItems