import React from 'react'
import imge from '../assets/cornimage.jpg'
import bgimagek from '../assets/jjjjjjjj.avif'
import Ourapprouch1 from './Ourapprouch1'
import Ourapprouch2 from './Ourapprouch2'
import Ourapprouch3 from './Ourapprouch3'
import Ourapprouch4 from './Ourapprouch4'
import Ourapprouch5 from './Ourapprouch5'
import OUrapprouch6 from './OUrapprouch6'
import Ourapprouch7 from './Ourapprouch7'



function Ourapprouch() {
  return (
    <div className='p-2'>
      <div>
        <div>
          <div className='text-white'>

            <div className='   '>

              <div className='px-2  lg:px-6'>
                <div style={{ backgroundImage: `url(${bgimagek})` }} className="w-92 h-[550px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
                  <div className='flex-row-reverse py-5 lg:py-16 '>
                    <div className='font-semibold text-3xl sm:text-5xl md:7xl xl:text-[110px] lg:text-[70px]  ml-10 sm:ml-0  sm:px-10 md:px-20  xl:mt-16 '>
                      <h1 className=' uppercase  custom-slide-in sm:flex pt-10'>our<h1>approuch</h1> </h1>

                    </div>
                    <div className='flex sm:mt-20 md:ml-10'>
                      <img src={imge} alt="" className=' h-48 w-40 mt-28 xl:mt-40 ml-5 sm:h-72 sm:w-56   sm:mt-56  sm:ml-10 md:ml-5 xl:w-72 xl:h-[400px] 2xl:ml-20 rounded-[200px] 2xl:mt-32 ' />
                      <p className='mt-5 flex text-[15px] justify-center sm:text-[25px] sm:p-12 md:text-[20px] xl:text-end xl:text-5xl xl:ml-40 xl:mt-60 2xl:ml-[25rem] lg:mt-32    font-semibold lg:flex lg:justify-end  lg: uppercase'>Unique expertise</p>
                    </div>
                  </div>
                </div>
              </div>

              <Ourapprouch1 />
              <Ourapprouch2 />
              <Ourapprouch3 />
              <Ourapprouch4 />
              <Ourapprouch5 />
              <OUrapprouch6 />
              <Ourapprouch7 />



            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Ourapprouch