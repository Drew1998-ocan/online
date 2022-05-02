import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='m-5 flex'>
      <input className='pointer-events-auto rounded-tl-md rounded-bl-md border-none px-2 bg-gray-200 focus:outline-none' type = "text" value = "" placeholder='search your product'/>
      <button className='bg-[#EB612A] py-2 px-8 rounded-tr-md rounded-br-md'>
        <FaSearch size="20px" className='text-white hover:cursor-pointer'/>
      </button>
    </div>

  )
}

export default Search
