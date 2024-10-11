import React from 'react'

const MainPage = () => {
  return (
    <div className=' w-full h-screen flex flex-col font-extrabold justify-center items-center'>
        {/* Heading */}
        <div className='-mt-32 text-5xl bg-gradient-to-r from-pink-600 via-zinc-600 to-zinc-800 bg-clip-text text-transparent animate-gradient-move animate-slide-down '>
            Godown

        </div>
        <div className=' text-sm sm:text-md font-bold font-mono mt-4 animate-slide-in-right'>
          Search For Your Favorite Items inside the Godown
        </div>
        <div className='mt-4 animate-slideUp'>
          <button className=' bg-white p-2 w-80 rounded-full border shadow-lg shadow-pink-700 border-pink-600  text-pink-600'>Start Searching Now</button>
        </div>
    </div>
  )
}

export default MainPage