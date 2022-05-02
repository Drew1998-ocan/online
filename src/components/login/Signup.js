import React from 'react'
import logo from 'images/logoV2.png' 
import { useForm } from "react-hook-form";
// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

const Signup = () => {
    //handling the events
    const { register, handleSubmit, formState: { errors } } = useForm();
    //handling the submit events
    const onSubmit = data => console.log(data);

  return (
    <div className='bg-white py-56  px-20 mx-56 rounded-lg  mb-16 flex flex-column place-content-center'>
        <></>
        <div  className='' >
            <div><img  className= 'items-center w-60 mb-12' src={logo}/></div>
        
            <h4 className='text-center text-3xl mb-6'>SignUp to the PhLUKY affiliate Programme </h4>
            <p className='text-center text-xl'>Enter your details below
            </p>
            <form onSubmit={handleSubmit(onSubmit)} >
                
                <input {...register("firstName" ,{required : true})}  className='rounded-md mt-4 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300'  placeholder='First Name'/>
                {errors.firstName && <div  className='text-red-400'>required</div>}
                <input {...register("secondName" ,{required : true})} className=' rounded-md mt-4 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300'  placeholder='Last Name'/>
                {errors.secondName && <div className='text-red-400'>required</div>}

                <br/>
                <input {...register("email" ,{required : true})} className='rounded-md mt-4 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300' type="text " placeholder = 'email'/><br/>
                {errors.email && <span  className='text-red-400'>required</span>}

                <input {...register("password" ,{required : true})} className='rounded-md mt-4 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300' type="password" placeholder = 'password'/><br/>
                {errors.password && <span  className='text-red-400'>required</span>}

                <div>
                    <select className='rounded-md p-3 mt-4 w-full border-2 border-slate-300' {...register("country", {required : "the country is required"})}>
                        <option>--choose country--</option>
                        <option>Uganda</option>
                        <option>Algeria</option>
                        <option>USA</option>
                        <option>Tanzania</option>
                        <option>Kenya</option>
                        <option>Rwanda</option>
                    <div>{errors.country && <span  className='text-red-400'>yoursountry is required</span>}</div>
                       
                    </select>
                <input className='rounded-md mt-4 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300'  placeholder='Phone Number' type="tel"/>
                </div>
                <input {...register("website" ,{required : true})}  className='rounded-md mt-4  w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300'  placeholder='website or social media'/>
                <input className='rounded-md mt-10 px-8 py-2 text-base font-semibold hover:bg-orange-500 text-white bg-orange-600' type="submit" value = 'submit'/>




            </form>
        </div>
      
    </div>
  )
}

export default Signup
