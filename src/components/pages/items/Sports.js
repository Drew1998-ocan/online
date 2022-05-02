import React from 'react'
import CategoryCard from 'components/card/CategoryCard'
import { Link } from 'react-router-dom'
import CategoryButton from 'components/button/CategoryButton'
const Sports = ({textButton}) => {
  return (
    <div className='pt-56 pb-5 px-20'>
      <h2 className='text-orange-500 font-bold p-3 text-4xl'>ALL CATEGORIES</h2>
            <span className='grid grid-cols-4'>
              <Link to = '/clothing'><CategoryButton textButton = 'Clothing'/></Link>
              <Link to = '/shoes'><CategoryButton textButton = 'Shoes'/></Link>
              <Link to = '/phone'><CategoryButton textButton = 'Phones'/></Link>
              <Link to = '/computers'><CategoryButton textButton = 'Computers'/></Link>
              <Link to = '/sports'><CategoryButton textButton = 'sports'/></Link>  
            </span>
        <div>

            <h4 className='text-orange-500 font-bold py-10 text-2xl mb-16'>PHONES</h4>
            <CategoryCard text = "phones"/>
        </div>
  
    </div>
  )
}

export default Sports
