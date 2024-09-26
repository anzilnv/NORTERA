import React from 'react'
import imge from '../assets/image12.png'
import Ourbrands1 from './Ourbrands1'
import bgimagek from '../assets/imagekkkkff.jpg'
import Ourbrands2 from './Ourbrands2'


function OurBrands() {
  return (
    <div>
        <div> <div className='text-white'>

<div className='  '>

  <div className='px-6'>
  <div style={{ backgroundImage: `url(${bgimagek})` }} className="w-92 h-[500px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
    <div className='flex-row-reverse py-16 '>
      <div className='font-semibold text-3xl sm:text-5xl md:7xl lg:text-[110px] ml-10 sm:ml-0  md:px-12 '>
        <h1 className='  custom-slide-in '>RECOGNIZED AND</h1>
        <hi className='  lg:ml-[500px] '>VALUED BRANDS</hi></div>
      <div className='flex sm:mt-20 md:ml-10'>
        <img src={imge} alt="" className=' h-44 mt-28 ml-5 sm:h-60 sm:mt-36 sm:ml-0 lg:h-[370px] rounded-[200px] ' />
        <p className='mt-5 flex text-[15px] justify-center sm:text-40 md:text-[20px] lg:text-end lg:text-4xl lg:px-96    font-semibold lg:flex lg:justify-end  lg:align-top'>QUALITY FRUITS AND VEGETABLES CONSUMERS AND FOOD SERVICE</p>
      </div>
    </div>
  </div>
  </div>

    <Ourbrands1/>
    <Ourbrands2/>
  
</div>
</div></div>
    </div>
  )
}

export default OurBrands