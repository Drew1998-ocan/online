
import {HiOutlineArrowRight} from "react-icons/hi"
// import logo from ".src/images/shoe.png"


const Card02 = ({title, image}) => {
  return (
    <div className='p-2 flex px-5 h-28 w-80 bg-gradient-to-r from-orange-500 spacing-x-4 to-purple-400'>
        <div className=' basis-1/2'>
            <h4 className='font-semibold text-white'>{title}</h4>
            <button className='mt-5 hover:bg-purple-100 py-1 px-4 bg-white text-purple-600 rounded-full flex items-center 
             '>
                 <h5 className='font-medium text-sm'>Veiw</h5>
                 <HiOutlineArrowRight size="12px" className='ml-2 purple-600'/>
             </button>
        </div>
        <div className=' h-24 w-32 items-center basis-1/2 p-8 '>
            <img classname='object-fill w-4 mb-8' src = {image} />
        </div>
      
    </div>
  )
}

export default Card02
