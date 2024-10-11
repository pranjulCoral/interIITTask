import  React , {useContext} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MyContext } from './Context.jsx';


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
  const {isModalOpen , setIsModalOpen , handleModalOpen} = useContext(MyContext)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <div    className='  text-black '>HOME</div>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

          </ul>
       <ul> <div   className=' text-black '>ITEMS</div>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

       </ul>
        <ul><div   className=' text-black '>SEARCH</div>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

        </ul>

       <ul><div    className=' text-black '>SIGNUP</div>
    <div  className=" border border-black border-b opacity-50 mt-2"  />

       </ul> 

      </div>
          
        

      </div>
        </Box>
      </Modal>
    </div>
  );
}