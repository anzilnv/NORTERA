import React from 'react'
import bannerimage from '../assets/homeimage.avif'
import Nextstage from './Nextstage'
import Nextstage2 from './Nextstage2'
import Stage3 from './Stage3'
import Stage4 from './Stage4'

// import nortera from '../assets/nortera.png'

function Banner() {
  return (
   
    <div>
      <div className='flex flex-col-reverse md:flex-row w-full mb-24 lg:mb-0'>
        <div className='px-12 flex items-end pt-5g lg:w-1/2 lg:px-8'>
          <p data-aos="fade-down"  data-aos-duration="1000"className="text-2xl md:text-3xl lg:text-[30px] font-[600]  ">THE NORTH AMERICAN LEADER IN READY-TO-COOK VEGETABLES</p>
        </div>
        <div className="sm:w-full lg:w-1/2 flex md:justify-end lg: justify-center lg:px-0 px-11 lg:mr-8 ">
          <img data-aos="fade-up" data-aos-duration="1000"src={bannerimage} alt='' className='flex rounded-full  md:rounded-full md:w-[550px] lg:w-[600px] md:h-[300px] lg:h-[350px]' /></div>
      </div>
        <span data-aos="fade-up" data-aos-duration="1500" className='px-2 text-7xl sm:text-[130px] md:text-[155px]  lg:text-[300px] xl:text-[300px] md:px-5 lg:px-0 font-semibold flex'>NOR<h1 data-aos="fade-down"  data-aos-duration="1500">TERA</h1></span>
      <div className='flex'>
      </div>
      <Nextstage />
      <Nextstage2 />
      <Stage3 />
      <Stage4 />
    </div>
  )
}

export default Banner