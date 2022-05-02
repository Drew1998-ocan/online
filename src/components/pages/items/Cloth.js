import CategoryCard from 'components/card/CategoryCard'
import React from 'react'
import { Link } from 'react-router-dom'
import CategoryButton from 'components/button/CategoryButton'

const Cloth = () => {
  return (
    <div className='py-5 px-20 pt-56'>
         <span className='grid grid-cols-4'>
              <Link to = '/clothing'><CategoryButton textButton = 'Clothing'/></Link>
              <Link to = '/shoes'><CategoryButton textButton = 'Shoes'/></Link>
              <Link to = '/phone'><CategoryButton textButton = 'Phones'/></Link>
              <Link to = '/computers'><CategoryButton textButton = 'Computers'/></Link>
              <Link to = '/sports'><CategoryButton textButton = 'sports'/></Link>  
            </span>
    <div className='men py-16'>
        <h2 className='text-orange-500 font-bold p-3 text-2xl mb-16 '>MEN'S CLOTHING</h2>
    <CategoryCard />
    </div>
    <div className='women py-16'>
    <h2 className='text-orange-500 font-bold p-3 text-2xl mb-16 '>WOMEN'S CLOTHING</h2>
    <CategoryCard  />
    </div>
    <div className='children py-16'>
    <h2 className='text-orange-500 font-bold p-3 text-2xl mb-16'>CHILDREN'S CLOTHING</h2>
    <CategoryCard  />
    </div>
  
</div>
  )
}

export default Cloth
