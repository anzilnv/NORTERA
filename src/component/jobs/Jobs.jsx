import React from 'react'
import imge from '../assets/person2.png'
import bgimagek from '../assets/images.jpg'
import arrow from '../assets/arrow3.png'
import Jobs1 from './Jobs1'
import Jobs3 from './Jobs3'
import Jobs2 from './Jobs2'
import Jobs4 from './Jobs4'
import Jobs5 from './Jobs5'
import Jobs6 from './Jobs6'
import Jobs7 from './Jobs7'
import Jobs8 from './Jobs8'

function Jobs() {
  return (
    <div>


      <div className='px-4 text-white'>
        <div style={{ backgroundImage: `url(${bgimagek})` }} className="w-92 h-[500px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
          <div className='flex-row-reverse py-16 '>
            <div className='font-semibold text-3xl sm:text-5xl md:7xl xl:text-[110px] lg:text-[70px]  ml-10 sm:ml-0  sm:px-10 md:px-20  xl:mt-16'>
              <h1 className='ml-20  uppercase sm:flex pt-10 custom-slide-in'>WORKING</h1>
              <hi className='  lg:ml-[650px] '>AT NORTERA</hi></div>
            <div className='flex sm:mt-20 md:ml-32'>
              <img src={imge} alt="" className=' h-48 w-40 mt-28 xl:mt-40 ml-5 sm:h-72 sm:w-56   sm:mt-56  sm:ml-10 md:ml-5 xl:w-72 xl:h-[400px] 2xl:ml-20 rounded-[200px] 2xl:mt-32  ' />
              <div className='ml-60 mt-80'>
                <p className='mt-5 flex text-[15px] justify-center sm:text-40 md:text-[20px]  lg:text-end lg:text-6xl lg:w-[150px ]   font-semibold lg:flex lg:justify-end  lg:align-top uppercase'>Come grow with us</p>
                <div className='flex p-4'>
                  <img src={arrow} alt="" className='rounded-full lg:w-16 lg:h-16 mr-5' />
                  <p className='text-xl font-mono font-semibold lg:pt-4'>SEE YOUR JOB OFFERS</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-7xl py-20 text-[#1b3d38]'><p>Join our team so that we can all grow and develop in a stimulating work environment.</p></div>
      </div>
      <Jobs1 />
      <Jobs2 />
      <Jobs3 />
      <Jobs4 />
      <Jobs5 />
      <Jobs6 />
      <Jobs7 />
      <Jobs8 />


    </div>
  )
}

export default Jobs