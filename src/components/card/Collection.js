import React from 'react'
import dress from 'images/upload-productImg-1616399188373.jpeg'

const Collection = () => {
  return (
    
<div className='mt-20 h-48 w-96 p-2 hover:shadow-lg rounded-md shadow-sm bg-white'>
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

export default Collection
