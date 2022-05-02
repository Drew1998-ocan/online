import React from 'react'
import {FaTimes} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import { Link } from "react-router-dom"

const Header03 = () => {

  return (
    <div className='w-full '>
      <nav className=' m-auto align-middle'>
        <div></div>

        <ul className='px-32 pb-5 shadow-md bg-white flex flex-row justify-around'>
          <Link to='/category'>
          <li className='flex  items-center bg-orange-600 hover:bg-orange-500 hover:cursor-pointer p-3 text-white font-semibold text-lg'> Shop By Category</li>
          </Link>
          <Link to='/about' >
          <li className='mt-4 hover:text-orange-600 hover:cursor-pointer'>About US</li>

          </Link>
          <Link to='/affiliate'>
          <li className='mt-4 hover:text-orange-600 hover:cursor-pointer'>Become An Affiliate</li>

          </Link>
          <Link to='/' >
          <li className=' hover:text-white flex  items-center bg-orange-600 hover:bg-orange-500 hover:cursor-pointer p-3 text-white font-semibold text-lg'>Home</li>
          
          </Link>
        </ul>
        {/* <button><FaTimes className=''/></button> */}
      </nav>
      {/* <button><FaBars className=''/></button> */}
    </div>
  )
}

export default Header03
