
const Button = ({text}) => {
  return (
    <div>
      <button className = 'hover:cursor-pointer shadow-sm rounded bg-[#EB612A] hover:bg-[#D4D4D8] hover:text-black font-normal text-base text-white hover-button px-10 py-2 text-color-white'>{text}</button>
    </div>
  )
}

export default Button
