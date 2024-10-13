"use client"
import React,{useEffect,useContext} from "react";
import Main from "./MainPage/page.tsx";
import { MyContext } from "./components/Context.jsx";

export default function Home() {
  const {setSession} = useContext(MyContext);
  useEffect(()=>{
   const token = localStorage.getItem("token")?localStorage.getItem("token"):null;
    setSession(token)
  })

  return (
    <div>
      <Main/>
 
   </div>
  );
}
