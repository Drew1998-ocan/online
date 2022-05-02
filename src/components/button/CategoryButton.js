import React from 'react'

const CategoryButton = ({textButton}) => {
  return (
    <div className='mt-10'>
    <button className='bg-gray-300 border-none rounded-md py-3 px-8 text-gray-600 font-semibold text-2xl hover:text-white active:bg-orange-500 active:text-white hover:bg-orange-500'>{textButton}</button>
      
    </div>
  )
}

export default CategoryButton

