"use client"
import React,{useContext, useState} from 'react'
import toast , {Toaster} from 'react-hot-toast'
import {url} from '../lib/constant.ts'
import axios from 'axios'
import {ClipLoader} from 'react-spinners'
import Link from  'next/link'
import { MyContext } from '../components/Context.jsx';

const Page = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading , setIsLoading] = useState(false);
    const {session,setSession} = useContext(MyContext);

    
    


    const handleClick=async()=>{
        try {
            setIsLoading(true);
             const response = await axios.post(`${url}loginUser`,{
                email:email,
                password:password
             },{
                headers:{
                    "Content-type":"application/json"
                }
             });

             localStorage.setItem("token",response.data.token);
             setSession(response.data.token);
             toast.success(response.data.message);;

        } catch (error:any) {
            setIsLoading(false);
            toast.error(error.response.data.message)
        }
        finally{
            setIsLoading(false);
        }
    }

  return (
    <div>
        <Toaster/>
        <div className=' flex justify-center'>
            <div className='w-11/12  md:w-3/5 lg:w-2/5 border-none mt-20 rounded-md shadow-xl shadow-black bg-gradient-to-b p-8 from-orange-100 to-lightPink'>
               <div className=' text-4xl font-extrabold font-mono flex justify-center'>Login</div>
            
               <div className="flex justify-center mt-8 space-x-12">
                  <label className="font-bold font-mono " htmlFor="">Mail</label>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border-none p-2 rounded-md w-1/2 outline-none" type="email" />
               </div>
               <div className="flex justify-center mt-8 space-x-12">
                  <label className="font-bold font-mono " htmlFor="">Pass</label>
                  <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-none p-2 rounded-md w-1/2 outline-none" type="password" />
               </div> 

               <div className="flex justify-center mt-8">
                <button onClick={handleClick} className=" bg-black p-2 text-white font-mono rounded-md w-40">{isLoading?<ClipLoader size={10} color='white'/>:"Login"}</button>
               </div>
               <div className="flex justify-center mt-2">
                 <p className="text-sm ">Haven't Registered Yet? <Link href='/SignUp' className="text-blue-600 cursor-pointer">Click Here</Link></p>
               </div>

            </div>

        </div>

    </div>
  )
}

export default Page