import React from 'react'
import logo from 'images/logoV2.png'

const Login = () => {
  return (
    <div className='bg-white p-20 mx-56 rounded-lg mt-16 mb-16 flex flex-column place-content-center'>
        <div>
        </div>
        <div>
            <div ><img  className= 'w-60 mb-12' src={logo}/></div>
        
            <h4 className='text-center text-3xl mb-6'>Login to the PhLUKY affiliate Programme </h4>
            <p className='text-center text-xl'>Enter your details below
            </p>

            <form className='justify-self-center '>
                <input className='rounded-md mt-16 w-full p-3 border-2 focus:outline-none focus:border-orange-400 border-slate-300' type="text " placeholder = 'email'/><br/>
                <input className='rounded-md mt-3 w-full p-3 border-2  focus:outline-none focus:border-orange-400 border-slate-300' type="password" placeholder = 'password'/><br/>
                <input className='rounded-md mt-10 px-8 py-2 text-base font-semibold hover:bg-orange-500 text-white bg-orange-600' type="submit" value = 'submit'/>
            </form>
        </div>
    </div>
  )
}

export default Login
