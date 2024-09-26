import React from 'react'
import upimage from '../assets/Screenshot 2024-08-31 123605.png'
import farm from '../assets/imagefarm.jpg'
import farmup from '../assets/Screenshot 2024-08-31 125833.png'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'

function Ourapprouch4() {
  return (
    <div className='py-20 text-[#1b3d38] xl:px-10 '>
      <div className='flex justify-end px-20'>
        <img src={upimage} alt="" className='h-[375px] w-80 ' />
      </div>
      <div className="h-[1200px] flex">

        <div className=" flex-1">
          <p className="uppercase xl:text-8xl font-sans font-medium  xl:w-[900px]">
            From rich and bountiful lands
          </p>
          <div className='relative h-[670px]'>
            <img src={farm} alt="" className="h-[670px] w-[650px] absolute" />
            <img src={farmup} alt="" className="absolute h-[500px] bottom-0 left-[550px]" /></div>
        </div>

        <div className='flex mt-[350px] justify-start items-start text-start  w-[450px]' >
          <div>
            <p className='text-2xl'>Our northern regions offer exceptional product quality and yields. </p>
            <hr className='mt-20 border-t border-gray-900'></hr>
            <p className='text-2xl uppercase font-thin mt-10'>The North American leader in organic vegetables</p>
            <hr className='mt-7 border-t border-gray-900'></hr>
            <p className='text-2xl uppercase font-thin mt-10'>Sensible use of pesticides</p>
            <hr className='mt-7 border-t border-gray-900'></hr>
            <p className='text-2xl uppercase font-thin mt-10'>Alternative cultivation methods that respect biodiversity</p>
            <hr className='mt-7 border-t border-gray-900'></hr>
            <p className='text-2xl uppercase font-thin mt-10'>An agronomic charter</p>
            <hr className='mt-7 border-t border-gray-900'></hr>
            <p className='text-2xl uppercase font-thin mt-10'>Optimizing water use</p>
            <hr className='mt-7 border-t border-gray-900'></hr>
            <Link to="/commit"><div className='flex mt-10'>
              <img src={arrow} alt="" className='w-10 h-10 rounded-full mr-3' />
              <h3 className=' text-xl mt-1 uppercase font-extralight'>See our commitments</h3>
            </div></Link>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Ourapprouch4