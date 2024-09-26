import React from 'react'
import bgimage1 from '../assets/bgimage123.jpeg'
import Marquee from 'react-fast-marquee'

function OUrapprouch6() {
  return (
    <div style={{ backgroundImage: `url(${bgimage1})` }} className="w-full h-[200px] sm:h-[500px]  lg:w-full lg:h-[700px] bg-cover bg-center  mt-20 p-2">
       <p className='text-3xl font-semibold max-w-72'>Warehouses near food retailers</p>
       <div className=' relative flex-col  justify-center  items-center  pt-20 font-[600] uppercase '>
            <Marquee direction='right' className=''>
                <div>
                <span className="mx-4  text-[80px]">Brossard</span>
                        <span className="mx-4 text-[80px]"> Bedford</span>
                        <span className="mx-4 text-[80px]">Lethbridge </span>
                        <span className="mx-4 text-[80px]"> Rochester </span>
                        <span className="mx-4 text-[80px]">Fairwater </span>
                        <span className="mx-4 text-[80px]">Lebanon </span>


                </div>
            </Marquee>
            <Marquee direction='left'>
                <div>
                <span className="mx-4  text-[80px]">Brossard</span>
                        <span className="mx-4 text-[80px] "> Bedford</span>
                        <span className="mx-4 text-[80px]">Lethbridge </span>
                        <span className="mx-4 text-[80px]"> Rochester </span>
                        <span className="mx-4 text-[80px]">Fairwater </span>
                        <span className="mx-4 text-[80px]">Lebanon </span>
                </div>
            </Marquee>
            <Marquee direction='right'>
                <div>
                <span className="mx-4  text-[80px]">Brossard</span>
                        <span className="mx-4 text-[80px]"> Bedford</span>
                        <span className="mx-4 text-[80px]">Lethbridge </span>
                        <span className="mx-4 text-[80px]"> Rochester </span>
                        <span className="mx-4 text-[80px]">Fairwater </span>
                        <span className="mx-4 text-[80px]">Lebanon </span>
                </div>
            </Marquee>

         
        
        <div className='text-[#1b3d38] bg-sky-300 rounded-full z-30 w-[470px] top-10 right-1/3 h-[470px] flex justify-center items-center  text-4xl text-center absolute '>
          <h1 className=''>6hours</h1>

        </div></div>
        </div>
      
   


  )
}

export default OUrapprouch6