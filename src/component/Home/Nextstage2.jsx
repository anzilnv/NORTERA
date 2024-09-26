import React from 'react'
import Marquee from 'react-fast-marquee'
import image4 from '../assets/images4.jpg'
import image5 from '../assets/images5.jpg'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'




function Nextstage2() {
  return (
    <div >
      <div data-aos="fade-up" data-aos-duration="1500" className="overflow-hidden whitespace-nowrap">
        <Marquee direction='ri'>
          <div className="text-[120px] font-semibold">
            <span className="mx-4">OUR FOOD /</span>
            <span className="mx-4">OUR FOOD / </span>
            <span className="mx-4">OUR FOOD /</span>

          </div></Marquee>
      </div>
      <div className='w-full  lg:flex h-screen md:h-full md:pl-8 md:mt-40 :px-10 text-white px-5 space-y-5 lg:space-y-0 md:gap-5 '>
        {/* <div style={{ backgroundImage: `url(${image5})` }} className="w-1/2 h-screen bg-cover bg-center">
  
      </div>
      <div style={{ backgroundImage: `url(${image4})` }} className="w-1/2 h-screen bg-cover bg-center">
  
      </div> */}

        <div style={{ backgroundImage: `url(${image5})` }} className=' md:py-10 px-3  lg:px-5 h-1/2 lg:w-1/2 bg-[#1b3d38]  text-center  hover:rounded-[100px] cursor-pointer transition-all duration-500 hover:shadow-xl '>
          <span className='   md:pt-40 lg:mr-1 text-xl sm:text-3xl md:text-6xl font-medium flex  justify-center  item-center align-middle '>OUR CUSTOM PRODUCTS</span>
          <div className=' text-[15px] sm:px-10    flex  justify-center  item-center align-middle md:text-xl md:px-40 '>
            <p >With over 260 products and two processing technologies, Nortera helps its customers stand out.</p>
          </div>
          <div className='  sm:pt-40 flex justify-center pt-10  '>
            <Link to="/ourCustomProducts"><img src={arrow} alt='' className=' sm:w-16 sm:h-16  md:w-28 md:h-28 w-10 h-10 rounded-full' /></Link></div>
        </div>
        <div style={{ backgroundImage: `url(${image4})` }} className=' py-10 px-3 lg:px-5 lg:w-1/2  h-1/2 bg-[#e7c597] ml- text-center hover:rounded-[100px] cursor-pointer transition-all duration-500 hover:shadow-xl  '>
          <span className=' px-5 text-3xl md:pt-40 md:text-6xl font-medium flex  justify-center  item-center align-middle '>OUR BRANDS</span>
          <div className='text-[15px] px-5 sm:px-10 flex  justify-center  item-center align-middle md:text-xl md:px-40 '>
            <p>Our brands offer consumers'favorite vegetables,legumes and fruits.</p>
          </div>
          <div className=' sm:pt-607  flex justify-center lg:pt-[250px] pt-10 '>
            <Link to="/OurBrands"><img src={arrow} alt='' className='sm:w-16 sm:h-16    md:w-28 md:h-28 w-10 h-10 rounded-full' /></Link></div>


        </div>


      </div>

      <div className="p-6">
        <div className="mt-4 border-t border-gray-800"></div>
      </div>


    </div>

  )
}

export default Nextstage2