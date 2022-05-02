import React from 'react'
import {FaGift} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {GiWorld} from "react-icons/gi"
import {RiSecurePaymentLine} from "react-icons/ri"
import {MdPhonelinkLock} from "react-icons/md"
import logo from "images/logoV2.png"
import {BsPersonFill} from "react-icons/bs"
import Search from 'components/header/Search'


const Footer = () => {
  return (
    <>
    <div className='py-20 px-20 flex flex-row '>
      <div className='basis-1/4'>
          <FaGift size="30px" className='text-gray-500 mb-3' />
          <h3 className='font-bold'>Great Value </h3>
          <p className='text-gray-400'>Millions of items to select Continuous promotions Personalized products. </p>
      </div>
      <div className='basis-1/4'>
          <GiWorld size="30px" className='text-gray-500 mb-3' />
          <h3 className='font-bold'>Worldwide Delivery  </h3>
          <p className='text-gray-400'>Supported more than 10 countries. Register to get $ 10 coupons.  </p>
      </div>
      <div className='basis-1/4'>
          <RiSecurePaymentLine size="30px" className='text-gray-500 mb-3' />
          <h3 className='font-bold'>Safe Payment </h3>
          <p className='text-gray-400'>Pay with popular and secure payment methods.</p>
      </div>
      <div className='basis-1/4'>
          <MdPhonelinkLock size="30px" className='text-gray-500 mb-3'/>
          <h3 className='font-bold'>Shop with Confidence  </h3>
          <p className='text-gray-400'>Pay with popular and secure payment methods.</p>
      </div>
    </div>
    {/* the second footer of the application */}
    <div className='py-10 border-t-2 flex flex-row space-x-20 px-20'>
        <div>
            <img src={logo} className = 'w-48'/>
            <Search/>
        </div>
        <div>
            <h3 className='font-bold text-lg'>About Us </h3>
            <div><h5 className='mt-5 hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Our Privacy Policy</h5></div>
        </div>
        <div >
            <h3 className='font-bold text-lg'>Become Our Affilliate </h3>
            <div className='mt-5 flex flex-row space-x-2'>
                <div className='pr-2'><BsPersonFill size="20px" className='text-gray-600'/></div>
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Register Now</h5></div>
            </div>
        </div>
        <div>
            <h3 className='font-bold text-lg '>Contact Us </h3>
            <ul>
                <li className='flex flex-row space-4'>
                    <p className='text-[#EB612A]'>Email us : </p> 
                    <a className='ml-2 hover:cursor-pointer hover:text-[#EB612A] text-gray-600' href="url">drew@gmail.com</a>
                </li>
                <li className='flex flex-row space-4'>
                    <p className='text-[#EB612A]'>Telephone : </p> 
                    <a className='ml-2 hover:cursor-pointer hover:text-[#EB612A] text-gray-600' href="url">+256 541 470 932</a>
                </li>
                <li className='flex flex-row space-4'>
                    <p className='text-[#EB612A]'>FaceBook : </p> 
                    <a className='ml-2 hover:cursor-pointer hover:text-[#EB612A] text-gray-600' href="url">Phlunky</a>
                </li>
            </ul> 
        </div>
    </div>
    <div className='py-10 border-t-2 flex flex-row justify-center space-x-10 px-20'>
        <div><h3 className='font-bold text-lg '>Follow Us On</h3></div>
        <div><a className='hover:cursor-pointer' href="url"><FaWhatsapp size="30px" className='text-green-600 mb-3 hover:text-green-800' /> </a></div>
        <div><a className='hover:cursor-pointer' href="url"><FaTwitter size="30px" className='text-sky-500 mb-3 hover:text-sky-700' /> </a></div>
        <div><a className='hover:cursor-pointer' href="url"><FaInstagram size="30px" className='hover:text-[#bc2a8d] text-[#cd486b] mb-3' /> </a></div>
        <div><a className='hover:cursor-pointer' href="url"><FaFacebookF size="30px" className='hover:text-[#8a3ab9] text-[#4c68d7] mb-3' /></a> </div>



    </div>
    </>
    
  )
}

export default Footer
