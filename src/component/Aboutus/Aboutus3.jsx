import React from 'react'
import Marquee from 'react-fast-marquee'
import bgimage1 from '../assets/OIG2.jpg'
// import arrow from '../assets/arrow3.png'

function Aboutus3() {
  return (
    <div className='text-white'>
    <div style={{ backgroundImage: `url(${bgimage1})` }} className="w-full h-[300px] sm:h-[500px]  lg:w-full lg:h-[700px] bg-cover bg-center  ">
        <div className='flex justify-between pt-10 px-5'><p className='text-3xl font-semibold max-w-72'>13 PLANTS IN NORTH AMERICA </p>
           
        </div>
        <div className=' relative flex-col  justify-center  items-center  pt-20 font-[600] uppercase'>
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

            <div className='flex flex-col '>
               </div>
        </div>
    </div>

</div>
  )
}

export default Aboutus3