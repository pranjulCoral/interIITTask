"use client"
import { createContext, useRef , useState} from 'react';


export const MyContext  = createContext();

export const MyProvider = ({children})=>{

    const homeView = useRef(null);
    const aboutView = useRef(null);
    const whyCAView = useRef(null);
    const responsibilityView = useRef(null);
    const incentiveView = useRef(null);
    const contactView = useRef(null);
    const FAQView = useRef(null);
    const [isModalOpen , setIsModalOpen] = useState(false);
    const handleModalClose = ()=>{
        setIsModalOpen(!isModalOpen)
    }


      
    const value = {
        homeView , aboutView , whyCAView , responsibilityView , incentiveView , FAQView , contactView , isModalOpen , handleModalClose ,setIsModalOpen 

    }

    return (
        <MyContext.Provider  value={value}>
         {children}
        </MyContext.Provider>
    )
}

