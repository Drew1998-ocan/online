import React from 'react'

const GrayButton = ({text}) => {
  return (
    <div>
      <div>
      <button className = 'hover:cursor-pointer hover:bg-[#EB612A] hover:text-white text-black shadow-sm rounded-md bg-[#D4D4D8] hover-button px-10 py-2 font-normal '>{text}</button>
    </div>
    </div>
  )
}

export default GrayButton
