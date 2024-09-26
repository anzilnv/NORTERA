import React from 'react'
import img1231 from '../assets/1231.png'
import img1233 from '../assets/1233.png'

function Ourapprouch2() {
  return (
    <div className='px-6 py-10 flex flex-col gap-10'>
        <div className='sm:flex xs:flex-col text-[#1b3d38] justify-between xl:px-16 w-full   '>
            <p className='text-2xl font-[550] sm:text-[20px] xl:text-[30px] lg:text-3xl uppercase xl:w-1/2 xl:pr-32 lg:font-medium'>Local vegetables processed just a stone’s throw away from the fields</p>
            <div className='lg:w-1/2 xs:pt-8 sm:pt-0'>
            <p className='text-[18px] flex justify-start lg:w-[500px] '>This proximity testifies to the freshness and quality of our products</p></div>
        </div>
        <div className='grid grid-cols-3  '>
            <div>
                <img src={img1231} alt="" className='rounded-full'/>
            </div>
            <div className='bg-[#1b3d38] rounded-full flex justify-center items-center lg:text-4xl text-center'>
                <h1 className=''>90KM <br/><p className='lg:text-2xl'>(About 45 minutes)</p></h1>

            </div>
            <div>
                <img src={img1233} alt="" className='rounded-full'/>
            </div>

        </div>
    </div>
  )
}

export default Ourapprouch2