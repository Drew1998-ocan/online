import React from 'react'
import Cart from '../button/Cart'
import Search from './Search'
import {BsPersonFill} from "react-icons/bs"
import Logo from 'images/logoV2.png';
import Login from 'components/login/Login';
import { Link } from 'react-router-dom';
// import logo from './images/logoV2.png'

const Header02 = () => {
  return (
    <div>
      <div className='bg-white pt-5 pb-5 flex justify-center shadow-md'>
        <Link to='/'><a className='hover:cursor-pointer' href=''><img className='w-48' src={Logo} /></a></Link>
         
          <Search/>
          <Cart/>
          <div className='items-center flex ml-10'>
                <div className='pr-2'><a href={Login}><BsPersonFill size="20px" className='text-gray-600'/></a></div>
                <div>
                  <h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Login</h5></div>
                <div className='px-5'><p>|</p></div> 
                {/* <div className='pr-2'><BsPersonFill size="20px" className='text-gray-600'/></div> */}
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Register</h5></div>
            </div>


      </div>
    </div>
  )
}

export default Header02
