import React from 'react'
import arrow from '../assets/arrow3.png'


function Ourfood() {

  return (
    <div className='bg-[#d7e5e8]'>
      <div className=' lg:flex h-[200px] md:h-full md:pl-8   mt-7 px-10 text-white  md:gap-5 bg-[#d7e5e8] '>
        {/* <div style={{ backgroundImage: `url(${image5})` }} className="w-1/2 h-screen bg-cover bg-center">
  
      </div>
      <div style={{ backgroundImage: `url(${image4})` }} className="w-1/2 h-screen bg-cover bg-center">
  
      </div> */}
        <div className='py-10 px-3  lg:px-5 h-1/2 lg:w-1/2 bg-[#1b3d38]  text-center  hover:rounded-[100px] cursor-pointer '>
          <span className='    text-3xl md:text-6xl lg:text-[30px] font-medium flex  justify-center  item-center align-middle '>OUR CUSTOM PRODUCTS</span>
          <div className=' text-[20px] px-10    flex  justify-center  item-center align-middle md:text-xl md:px-40 '>
            <p >With over 260 products and two processing technologies, Nortera helps its customers stand out.</p>
          </div>
          <div className='  sm:pt-40 flex justify-center lg:pt-40'><img src={arrow} alt='' className=' sm:w-16 sm:h-16  md:w-28 md:h-28 w-10 h-10 rounded-full' /></div>
        </div>
        <div className=' py-10 px-3 lg:px-5 lg:w-1/2  h-1/2 bg-[#e7c597] ml- text-center hover:rounded-[100px] cursor-pointer'>
          <span className=' px-5 text-3xl md:pt-40 md:text-6xl lg:text-[30px] font-medium flex  justify-center  item-center align-middle '>OUR BRANDS</span>
          <div className='text-[20px] px-10 flex  justify-center  item-center align-middle md:text-xl md:px-40 '>
            <p>Our brands offer consumers'favorite vegetables,legumes and fruits.</p>
          </div>
          <div className=' sm:pt-40 flex justify-center lg:pt-[250px] lg:pt-50'><img src={arrow} alt='' className='sm:w-16 sm:h-16    md:w-28 md:h-28 w-10 h-10 rounded-full' /></div>


        </div>


      </div>
      \</div>

  )
}

export default Ourfood