import  React , {useContext , useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MyContext } from './Context.jsx';
import Link from 'next/link'



const style = {
  position: 'absolute',
  top: '0vh',
  left: '30vw',
  width: '70vw',   // Full width of the viewport
  height: '100vh',  // Full height of the viewport
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal() {
  const {isModalOpen  , handleModalOpen} = useContext(MyContext);
  const { session,setSession } = useContext(MyContext);
  const logoutUser=()=>{
    localStorage.removeItem("token");
    setSession(null);
    
  }
  useEffect(()=>{
    const token = localStorage.getItem("token")?localStorage.getItem("token"):null;
    setSession(token);
  },[session])


  return (
    <div>
      <Modal
      className=" "
        open={isModalOpen}
        onClose={handleModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=' text-lightOrange shadow-xl shadow-lightOrange bg-gradient-to-b  from-white to-lightPink to-border-l-2 border-darkOrange bg-opacity-95 animate-slide-in-right'>
         
          <div id='main-components' className=' cursor-pointer mt-12 flex flex-col h-full font-bold text-md'>
            <div className=' space-y-6'>
          <ul>
          <Link href="/MainPage"    className='  text-black '>HOME</Link>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

          </ul>
       <ul> <Link href="/SideBar"   className=' text-black '>ITEMS</Link>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

       </ul>
        <ul><Link href='/Search'  className=' text-black '>SEARCH</Link>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

        </ul>

       <ul>   {session?<button onClick={logoutUser} className=' border rounded-md pl-2 pr-2 bg-white cursor-pointer text-pink-600 border-pink-600 ' >Logout</button>:<Link  href={'/SignUp'} className=' border rounded-md pl-2 pr-2 bg-white cursor-pointer text-pink-600 border-pink-600 '>Signup</Link>} 

    <div  className=" border border-black border-b opacity-50 mt-2"  />

       </ul> 

      </div>
          
        

      </div>
        </Box>
      </Modal>
    </div>
  );
}