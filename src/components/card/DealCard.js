import dress from 'images/upload-productImg-1616399188373.jpeg'


const DealCard = () => {
  return (
    <div className='m-20 hover:cursor-pointer hover:bg-gray-100 w-64 p-4'>
        <div>
            <img src= {dress} />
        </div>
        <h2 className='mt-2 font-bold  text-xl text-orange-500'>21 USD</h2>
        <h4 className='font-semibold '>Universal Car PU</h4>
        <h4>Leather High Quality</h4>
    </div>
  )
}

export default DealCard
