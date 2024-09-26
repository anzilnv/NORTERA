import React from 'react'
import image from '../assets/1234.png'

const Ourapprouch1 = () => {
  return (
    <div className='text-[#1b3d38] px-3 lg:px-6 '>
      <div>
        <div className='mt-10'>
          <span className='text-[28px] md:text-[40px] xl:text-[75px]'>An unparalleled product offering thanks to our expertise from the northern regions of North America.     </span>
        </div>
        <div className=' pt-10 lg:pt-20 xl:pt-40 '>
          <div className='lg:pl-[500px] md:w-full '>
            <p className=' text-xl sm:text-2xl md:text-5xl font-semibold xl:text-6xl  uppercase '>Diverse agricultural <br/>areas</p>
            <img src={image} alt="" className='xl:h-[700px] flex justify-center w-full md:pt-10' />
            <div className='lg:grid grid-cols-2 pt-5 md:text-xl lg:text-[15px] xl:text-2xl pb-20'>
              <div className='font-thin  '> 
                <ol className='list-decimal px-6' >
                  <li className='p-1'>Central canada</li>
                  <li className='p-1'>Eastern canada</li>
                  <li className='p-1'>Western canada</li>
                  <li className='p-1'>Northeast united states</li>
                  <li className='p-1'>Midwestern united states</li>
                  </ol>
              </div>
              <div className='pt-4 lg:pt-0 md:text-2xl lg:text-[18px]'>
                <p>To guarantee a varied supply of vegetables, we grow in strategic agricultural areas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0">
        <hr className="mt-4 border-t border-gray-800"></hr>
      </div>
    
    </div>
  )
}

export default Ourapprouch1