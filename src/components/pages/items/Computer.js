import React from 'react'
import { Link } from 'react-router-dom'
import CategoryButton from 'components/button/CategoryButton'
import CategoryCard from 'components/card/CategoryCard'
const Computer = ({textButton}) => {
  return (
    <div className='pt-56 pb-5 px-20'>
      <span className='grid grid-cols-4'>
              <Link to = '/clothing'><CategoryButton textButton = 'Clothing'/></Link>
              <Link to = '/shoes'><CategoryButton textButton = 'Shoes'/></Link>
              <Link to = '/phone'><CategoryButton textButton = 'Phones'/></Link>
              <Link to = '/computers'><CategoryButton textButton = 'Computers'/></Link>
              <Link to = '/sports'><CategoryButton textButton = 'sports'/></Link>  
            </span>
            <div>
            <h4 className='text-orange-500 font-bold py-10 text-2xl mb-16 '>PHONES</h4>
            <CategoryCard />
            </div>
      
    </div>
  )
}

export default Computer

