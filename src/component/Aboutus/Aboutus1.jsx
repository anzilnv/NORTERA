import React from 'react'
import Carousel from 'react-multi-carousel'



function Aboutus1() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className='py-10 px-2'>
      <div className='text-7xl mb-40'>
        <h1 >Dedicated to the processing and marketing of canned and frozen vegetables and fruits, Nortera operates plants in Canada and the United States. </h1>
      </div>
      <hr className='border-[#2d474d] pt-10 '></hr>
      <div>
        <p className='text-4xl'>ORIGIN OF NORTERA</p>
        <div className=''>
        </div>
      </div>
      <Carousel responsive={responsive} className="w-[100%]  ">
        <div className=''>
          <span className='px-2  text-[85px] sm:text-[138px] md:text-[162px]  lg:text-[200px] xl:text-[315px] md:px-5 lg:px-0 font-bold flex'>NOR<h1 className='text-transparent  outline-text'>TERA</h1></span>

          <div className='flex justify-center items-center mb-40'>
            <p className='text-3xl font-[500] uppercase w-[700px]'>Our North American vegetables
              <p className='text-xl lowercase'>Our plants are located in close proximity to our five growing regions across Canada and the United States, for unparalleled freshness and exceptional vegetables.</p></p>
          </div>
        </div>
        <div className=''>
          <span className='px-2 text-[85px] sm:text-[138px] md:text-[162px]  lg:text-[300px] xl:text-[315px] md:px-5 lg:px-0 font-bold flex'><h1 className='text-transparent outline-text'>NOR</h1>TER <h1 className=' text-transparent outline-text'>A</h1></span>

          <div className='flex justify-center items-center mb-40'>
            <p className='text-3xl font-[500] uppercase w-[700px]'>Our connection to the land where our food is grown
              <p className='text-xl lowercase'>We take care of the land and the communities around our plants to ensure a healthy and sustainable food supply.</p></p>
          </div>
        </div>
        <div className=''>
          <span className='px-2 text-[85px] sm:text-[138px] md:text-[162px]  lg:text-[300px] xl:text-[315px] md:px-5 lg:px-0 font-bold flex'>NORT<h1 className='text-transparent outline-text'>ERA</h1></span>

          <div className='flex justify-center items-center mb-40'>
            <p className='text-3xl font-[500] uppercase w-[700px]'>Entering a new era
              <p className='text-xl lowercase'>Our plants are located in close proximity to our five growing regions across Canada and the United States, for unparalleled freshness and exceptional vegetables.</p></p>
          </div>
        </div>
      </Carousel>
      <hr className='border-[#2d474d] '></hr>
    </div>
  )
}

export default Aboutus1
