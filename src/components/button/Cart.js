import React from 'react'
import {BsCart4} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <button as={Link}
    to="/cart" className='
      m-5
      outline
      outline-orange-600
      hover:bg-[#EB612A]
       text-[#EB612A] hover:text-white 
       py-2 px-5 
       rounded-md
        flex space-x-4 
      outline-2'>
          <div><BsCart4 size="20px" /></div>
          <div><h5 >Your Cart</h5></div>

      </button>
    </div>
  )
}

export default Cart
