import React from 'react'
import main from 'images/kikuu-static-image-pc-banner-hot.webp'
import logo from 'images/logoV2.png'
import Button from 'components/button/Button'
import GrayButton from 'components/button/GrayButton'
import {MdPhonelinkLock} from "react-icons/md"
import {FaTruckMoving} from "react-icons/fa"
import {RiSecurePaymentLine} from "react-icons/ri"
import {GiWorld} from "react-icons/gi"
import Card02 from 'components/card/Card02'
import men from 'images/shoe.png'
import women from 'images/wshoe.png'
import menc from 'images/mshirt.png'
import womenc from 'images/womenclothe.png'
import { Link } from 'react-router-dom'


// const box = [... Array(10).keys()] .map((x,index) => )

const SectionOne = ({text, title, image}) => {
  return (
    <div className='mt-20  px-20 flex flex-row '>
        <div className='basis-3/4'>
            <div>
                <a classname = 'cursor-pointer' href=''><img className='' src={main}/></a>
            </div>
            <div className='mt-5 flex flex-row space-x-2'>
                <Card02 title ='Men shoe' image={men}/>
                <Card02 title ='Women shoe' image={women}/>
            </div>
            <div className='mt-5 flex flex-row space-x-2'>
                <Card02 title ='Men clothe' image={menc}/>
                <Card02 title ='Women clothe' image={womenc}/>
            </div>
        </div>
        <div className=' bg-white flex flex-col align-middle py-8 px-8 basis-1/4 ml-5'>
            <div className=' content-center'>
                <div><img className='align-center' src={logo}/></div>
                <div><h2 className='mt-5 font-bold text-center'>WELCOME TO PHLUKY ONLINE SHOPPING MALL</h2></div>  
            </div>
            <div className='mt-5 flex flex-row space-x-2'>
                <Link to = '/login'><Button text= 'Login'/></Link>
                <Link to = '/register'> <GrayButton text='Register'/></Link>
            </div>
            <div className='bg-gray-100 mt-5  p-5'>
                <div className='flex flex-row space-x-4 justify-center'>
                    <div className=''>
                        <FaTruckMoving size="25px" className='text-[#96b1e4] mt-2'/>
                    </div>
                    <div className='basis-3/4'>
                        <h3 className='font-semibold text-sm'>Great Value</h3>
                        <p className='text-xs'>continuous promotions.</p>
                    </div> 
                </div>

                <div className='mt-5 flex flex-row space-x-4 justify-center'>
                    <div className=''>
                        <GiWorld size="25px" className='text-[#96b1e4] mt-2'/>
                    </div>
                    <div className='basis-3/4'>
                        <h3 className='font-semibold text-sm'>Worldwide Delivery</h3>
                        <p className='text-xs'>continuous promotions.</p>
                    </div> 
                </div>

                <div className='mt-5 flex flex-row space-x-4 justify-center'>
                    <div className=''>
                        <RiSecurePaymentLine size="25px" className='text-[#96b1e4] mt-2'/>
                    </div>
                    <div className='basis-3/4'>
                        <h3 className='font-semibold text-sm'>Safe Payment</h3>
                        <p className='text-xs'>Popular and secure payment methods.</p>
                    </div> 
                </div>

                <div className='mt-5 flex flex-row space-x-4 justify-center'>
                    <div className=''>
                        <MdPhonelinkLock size="25px" className='text-[#96b1e4] mt-2'/>
                    </div>
                    <div className='basis-3/4'>
                        <h3 className='font-semibold text-sm'>Shop with Confidence</h3>
                        <p className='text-xs'>Protect your purchase and delivery.</p>
                    </div> 
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default SectionOne
