import React from 'react'
import dress from 'images/upload-productImg-1609677726767.jpeg'
import {HiOutlineArrowRight} from "react-icons/hi"
// import DealCard from 'components/card/DealCard'
import logo from 'images/logov2-black.png'

const SectionTwo = () => {
  return (
    <div className='px-20 mt-10'>
      <div className='flex flex-row space-x-2'>
          <div className='bg-red-700 basis-1/4 px-5 py-5'>
            <h2 className = 'text-white font-bold text-3xl'>Flash Sale</h2>
            <h4 className='text-white font-semibold text-medium'>Up to 50% Off</h4>
            <h2 className = 'mt-5 text-white font-bold text-3xl'>ONLY AT</h2>
            <img className='mb-10 mt-5' src = {logo}/>
            <button className='mt-5 hover:bg-purple-100 py-1 px-4 bg-white text-red-800 rounded-full flex items-center 
             '>
                 <h5 className='font-medium text-sm'>Veiw</h5>
                 <HiOutlineArrowRight size="12px" className='ml-2 text-red-800'/>
             </button>
          </div>
          <div classname='basis-3/4'>
              <div className='flex flex-row'>
              <div className='hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
        <div>
            <img src= {dress} />
        </div>
        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
        <h4 className='font-semibold '>Universal Car PU</h4>
        <h4>Leather High Quality</h4>
    </div>
    <div className='hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
        <div>
            <img src= {dress} />
        </div>
        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
        <h4 className='font-semibold '>Universal Car PU</h4>
        <h4>Leather High Quality</h4>
    </div>
    <div className='hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
        <div>
            <img src= {dress} />
        </div>
        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
        <h4 className='font-semibold '>Universal Car PU</h4>
        <h4>Leather High Quality</h4>
    </div>

              </div>
          </div>

      </div>
    </div>
  )
}

export default SectionTwo
