import React from 'react'
import dress from 'images/upload-productImg-1616399188373.jpeg'
import {FaHandPointRight} from "react-icons/fa"

const SectionThree = () => {
  return (
    <div className='pl-20 pr-20 mt-16'>
        <div className='flex flex-row'>
            <div>
                <FaHandPointRight size="30px" className='mr-5 text-orange-600' />
            </div>
            <div className='mb-5'>
                <h2 className='text-xl font-bold'>PHLUKY PICKS OF THE WEEK</h2>
            </div>

        </div>

        {/* the spreading and using of the mapping method */}

          <div className='flex flex-row space-x-4 '>
              <div className='basis-1/3'>{
              [... Array(4).keys()] .map((x,index) =>

<div className=' hover:cursor-pointer mt-3 h-48 w-auto p-2 hover:shadow-lg rounded-md shadow-sm bg-white'>
  <div className='flex flex-row '>
    <div 
    className='basis-1/2'><h3>women's Clothing</h3></div>
    <div className='flex flex-row basis-1/2 text-gray-500 ml-10 justify-end'><h3 className='justify-end'>View All</h3></div>
  </div>
  <div className="flex flex-row space-x-2 mt-8">
    <div className='basis-1/3 h-12 bg-red-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-green-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-blue-500'>
      <img src = {dress}/>
    </div>
  </div>
</div>
         

           )
           }
              </div>
              <div className='basis-1/3'>
              {
              [... Array(4).keys()] .map((x,index) =>

<div className=' hover:cursor-pointer mt-3 h-48 w-auto p-2 hover:shadow-lg rounded-md shadow-sm bg-white'>
  <div className='flex flex-row '>
    <div 
    className='basis-1/2'><h3>women's Clothing</h3></div>
    <div className='flex flex-row basis-1/2 text-gray-500 ml-10 justify-end'><h3 className='justify-end'>View All</h3></div>
  </div>
  <div className="flex flex-row space-x-2 mt-8">
    <div className='basis-1/3 h-12 bg-red-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-green-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-blue-500'>
      <img src = {dress}/>
    </div>
  </div>
</div>
         

           )
           }
              </div>
              <div className='basis-1/3'>
              {
              [... Array(4).keys()] .map((x,index) =>

<div className=' hover:cursor-pointer mt-3 h-48 w-auto p-2 hover:shadow-xl rounded-md shadow-sm bg-white'>
  <div className='flex flex-row '>
    <div 
    className='basis-1/2'><h3>women's Clothing</h3></div>
    <div className='flex flex-row basis-1/2 text-gray-500 ml-10 justify-end'><h3 className='justify-end'>View All</h3></div>
  </div>
  <div className="flex flex-row space-x-2 mt-8">
    <div className='basis-1/3 h-12 bg-red-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-green-500'>
      <img src = {dress}/>
    </div>
    <div className='basis-1/3 h-12 bg-blue-500'>
      <img src = {dress}/>
    </div>
  </div>
</div>
         

           )
           }
              </div>
          </div>
          
      
    </div>
  )
}

export default SectionThree
