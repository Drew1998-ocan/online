import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs"
import {MdLocationPin} from "react-icons/md"
import { useForm } from "react-hook-form";


const Header = () => {
      //handling the events
      const { register, handleSubmit, formState: { errors } } = useForm();
      //handling the submit events
      const onSubmit = data => console.log(data);
  
  return (
    <div>
        <div className='justify-center align-middle flex space-x-10 py-3 px-10 bg-gray-200'>
            <div className='flex mt-2'>
                <div className='pr-2 pl-16  '><FaHome size="20px" className='text-gray-600 '/></div>
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Phluky Home</h5></div>     
            </div>
            <div className='items-center flex'>
                <div className='pr-2'><BsPersonFill size="20px" className='text-gray-600'/></div>
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Login</h5></div>
                <div className='px-5'><p>|</p></div> 
                {/* <div className='pr-2'><BsPersonFill size="20px" className='text-gray-600'/></div> */}
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Register</h5></div>
            </div>
            <div className='items-center flex pl-40'>
               
                <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Choose Language</h5></div>
                <div className='pl-2 pt-1'><FaChevronDown size="13px" className='text-gray-600'/></div>
                 
            </div>
            <div className='items-center flex ml-10'>
            <div className='pr-2'><MdLocationPin size="20px" className='text-gray-600'/></div>
            <div>
            <select className=' focus:outline-none focus:border-none border-none bg-gray-200' {...register("country", {required : "the country is required"})}>
                        <option>--choose country--</option>
                        <option>Uganda</option>
                        <option>Algeria</option>
                        <option>USA</option>
                        <option>Tanzania</option>
                        <option>Kenya</option>
                        <option>Rwanda</option>
                    <div>{errors.country && <span  className='text-red-400'>yoursountry is required</span>}</div>
                       
                    </select>
           
            </div>
               {/* <div><h5 className='hover:cursor-pointer hover:text-[#EB612A] text-gray-600'>Choose Country</h5></div> */}
               {/* <div className='pl-2 pt-1'><FaChevronDown size="13px" className='text-gray-600'/></div> */}
                
           </div>
        </div>
    </div>
  )
}

export default Header
