import React from 'react'
import Shoes from '../items/Shoes'
import Phones from '../items/Phones'
import Computer from '../items/Computer'
import Cloth from '../items/Cloth'
import { Link, Route, Router } from 'react-router-dom'
import CategoryButton from 'components/button/CategoryButton'


const Category = ({textButton}) => {
  return (
    
    <div className='px-10 py-5'>

        <div className='mt-56'>
            <h2 className='text-orange-500 font-bold p-3 text-4xl'>ALL CATEGORIES</h2>
            <span className='grid grid-cols-4'>
              <Link to = '/clothing'><CategoryButton textButton = 'Clothing'/></Link>
              <Link to = '/shoes'><CategoryButton textButton = 'Shoes'/></Link>
              <Link to = '/phone'><CategoryButton textButton = 'Phones'/></Link>
              <Link to = '/computers'><CategoryButton textButton = 'Computers'/></Link>
              <Link to = '/sports'><CategoryButton textButton = 'sports'/></Link>  
            </span>

            

        </div>
        
      
    </div>
    
  )
}

export default Category
