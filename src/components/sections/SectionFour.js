import React from 'react'
import dress from 'images/hair.jpeg'
import {FaHandPointRight} from "react-icons/fa"

const SectionFour = () => {
  return (
    <div className='px-20 py-10 '>
      <div className=' bg-white py-5 px-5 rounded-md'>
      <div >
          <div className='flex flex-row'>
          <div>
                <FaHandPointRight size="30px" className='mr-5 text-orange-600' />
            </div>
            <div className='mb-5'>
                <h2 className='text-xl font-bold'>TODAY'S DEAL</h2>
            </div>

          </div>
            
            <div className='px-5 flex flex-row justify-evenly'>
                <div className='basis-1/3'>
                    {
                        [... Array(10).keys()] .map((x,index) =>
                        <div className=' hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
                        <div>
                            <img src= {dress} />
                        </div>
                        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
                        <h4 className='font-semibold '>Universal Car PU</h4>
                        <h4>Leather High Quality</h4>
                    </div>

                         )

                    }
                </div>
                <div className='basis-1/3'>
                {
                        [... Array(10).keys()] .map((x,index) =>
                        <div className=' hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
                        <div>
                            <img src= {dress} />
                        </div>
                        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
                        <h4 className='font-semibold '>Universal Car PU</h4>
                        <h4>Leather High Quality</h4>
                    </div>

                         )

                    }
                </div>
                <div className='basis-1/3'>
                {
                        [... Array(10).keys()] .map((x,index) =>
                        <div className=' hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
                        <div>
                            <img src= {dress} />
                        </div>
                        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
                        <h4 className='font-semibold '>Universal Car PU</h4>
                        <h4>Leather High Quality</h4>
                    </div>

                         )

                    }
                </div>
                
            </div>

        </div>
      </div>
    </div>
  )
}

export default SectionFour
