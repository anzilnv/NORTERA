import React from 'react'
import Bgs from '../assets/bannerimageabout.webp'
import imge from '../assets/smallimageabout.webp'
import Aboutus1 from './Aboutus1'
import Aboutus2 from './Aboutus2'
import Aboutus3 from './Aboutus3'
import Aboutus4 from './Aboutus4'
import Aboutus5 from './Aboutus5'


function Aboutus() {
  return (
    <div className='p-4'>
      <div className='px-4 text-white'>
        <div style={{ backgroundImage: `url(${Bgs})` }} className="w-92 h-[550px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
          <div className='flex-row-reverse py-16 '>
            <div className='font-semibold text-3xl sm:text-5xl md:7xl xl:text-[110px] lg:text-[70px]  ml-10 sm:ml-0  sm:px-10 md:px-20  xl:mt-16 '>
                <h1 className='uppercase  custom-slide-in sm:flex pt-10  '>ABOUT</h1>
              <hi className='  lg:ml-[700px] '>NORTERA</hi></div>

            <div className='flex sm:mt-20 md:ml-10 lg:justify-between '>
              <img src={imge} alt="" className=' h-48 w-40 mt-28 xl:mt-40 ml-5 sm:h-72 sm:w-56   sm:mt-56  sm:ml-10 md:ml-5 xl:w-72 xl:h-[400px] 2xl:ml-20 rounded-[200px] 2xl:mt-32 ' />
              <p className='mt-5 flex text-[15px] justify-center sm:text-[25px] sm:p-12 md:text-[20px] xl:text-end xl:text-5xl xl:ml-40 xl:mt-60  2xl:ml-[25rem] lg:mt-32    font-semibold lg:flex lg:justify-end  lg: uppercase'>The North American leader in processed vegetables</p>
            </div>
          </div>
        </div>
      </div>

      <Aboutus1 />
      <Aboutus2 />
      <Aboutus3 />
      <Aboutus4 />
      <Aboutus5 />
    </div>
  )
}

export default Aboutus