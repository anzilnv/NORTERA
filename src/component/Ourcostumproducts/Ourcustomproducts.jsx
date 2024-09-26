import React from 'react'
import Bgs from '../assets/ourcustombanner.avif'
import imge from '../assets/Screenshot 2024-08-24 162857.png'
import Ourcustom1 from './Ourcustom1'
import Ourcustom2 from './Ourcustom2'
import Ourcustum3 from './Ourcustum3'
import Ourcustum4 from './Ourcustum4'




const Ourcustomproducts = () => {
  return (
    <div className='text-white'>

      <div className='  '>
      
        <div className='px-4'>
        <div style={{ backgroundImage: `url(${Bgs})` }} className="w-92 h-[500px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
          <div className='flex-row-reverse py-16 '>
            <div className='font-semibold text-3xl sm:text-5xl md:7xl lg:text-[110px] ml-10 sm:ml-0  md:px-12  '>
              <h1 className='  custom-slide-in '>OUR CUSTOM</h1>
              <hi className='  lg:ml-[700px]  '>PRODUCTS</hi></div>
            <div className='flex sm:mt-20 md:ml-10'>
              <img src={imge} alt="" className=' h-44 mt-28 ml-5 sm:h-60 sm:mt-36 sm:ml-0 lg:h-[370px] rounded-full  custom-slide-in ' />
              <p className='mt-5 flex text-[15px] justify-center sm:text-40 md:text-[20px] font-semibold lg:flex lg:justify-end lg:align-top'>PROCESSOD AND PACKAGED TO STAND OUT</p>
            </div>
          </div>
        </div>
        </div>

        <Ourcustom1 />
        <Ourcustom2/>
        <Ourcustum3/>
        <Ourcustum4/>
     
      </div>
    </div>

  )
}

export default Ourcustomproducts