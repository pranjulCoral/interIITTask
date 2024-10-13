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
    const [session,setSession] = useState(null);
    const [isSideBarOpen , setIsSideBarOpen] = useState(true);
  const [isOpenIndex , setIsOpenIndex] = useState(null);
  const [fetchedItem, setFetchedItem] = useState(null);
  const [searchResult ,setSearchResult] = useState([]);
  const [searchLoading , setSearchLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const FAQView = useRef(null);
    const [isModalOpen , setIsModalOpen] = useState(false);
    const handleModalClose = ()=>{
        setIsModalOpen(!isModalOpen)
    }
    


      
    const value = {
        isSideBarOpen,setIsSideBarOpen,homeView ,fetchedItem ,isLoading,setIsLoading, setFetchedItem, aboutView , whyCAView , responsibilityView , incentiveView , FAQView , contactView , isModalOpen , handleModalClose ,setIsModalOpen,isOpenIndex , setIsOpenIndex,
        searchLoading, setSearchLoading , searchResult , setSearchResult , session ,setSession

    }

    return (
        <MyContext.Provider  value={value}>
         {children}
        </MyContext.Provider>
    )
}

