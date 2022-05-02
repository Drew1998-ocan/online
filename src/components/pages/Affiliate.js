import React from 'react'
import SectionFour from 'components/sections/SectionFour'
import SectionOne from 'components/sections/SectionOne'
import SectionThree from 'components/sections/SectionThree'
import SectionTwo from 'components/sections/SectionTwo'
import Button from 'components/button/Button'

const Affiliate = ({text}) => {
  return (
    <div>
      <h3>this is the affiliate page for 
          the ecommerce site
      </h3>
      <div className=' container mx-auto px-4 '>
      
      <div className=' mt-56'>
        <div>
        <div className='flex flex-row justify-center align-center'>

          <h1 className='text-xl text-orange-500 font-extrabold px-10 text-center'>YOUR POINTS</h1>
          <h1>:</h1>
          <h1 className='text-xl  font-bold px-10'>30</h1>
          <div><Button text = 'Convert Points '/></div>
          </div>
          
        </div>
      
      <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
      </div>   
    </div>
    </div>
  )
}

export default Affiliate
