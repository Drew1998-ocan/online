import React from 'react'
import hair from 'images/hair.jpeg'
import About from 'components/pages/About'

const CategoryCard = () => {
  return (
    <>
        <div  className='hover:cursor-pointer hover:text-orange-500 bg-zinc-200 hover:bg-gray-200 rounded-md p-3 shadow-md w-72 flex flex-col justify-center'>
           <img className='rounded-md' src={hair}/>
           <h4 className='hover:cursor-pointer hover:text-orange-500 py-5 text-sm text-center'>name of the item</h4>
           <div className='flex flex-row justify-around text-lg font-semibold'>
             <h2 className='hover:text-black'>BUY</h2>
             <h2 className='hover:text-black'>Add to Cart</h2>
           </div>
            
        </div>
    </>
  )
}

export default CategoryCard
