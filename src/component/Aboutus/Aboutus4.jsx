import React from 'react'
import image6 from '../assets/image6.png'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

function Aboutus4() {
    return (
        <div>
            <div className=' text-2xl sm:p-5 md:p-8 font-medium md:text-4xl'>
                <h1 >NORTERA IN
                    NUMBERS </h1>


            </div>
            <div className=' md:flex  lg:h-[800px] md:h-[650px] w-full px-4 '>

                <div className='   mt-20 md:w-1/3  pl-6  lg:h-[70vh]   md:flex    items-end     md:pl-2 md:mr-3 lg:pl-4  '>
                    <img src={image6} alt="" className='rounded-t-full sm:w-72 sm:h-76  md:mr-8 md:w-96 md:h-88  ' />
                </div>

                <div className=' md:w-1/3  md:h-[85vh] mt-20'>
                    <span className=' sm:text-2xl lg:text-3xl  '>Proudly rooted in the communities, our facilities are strategically located near our fields in several agricultural regions.</span>


                    <div className=' items-end  hidden md:flex'>
                        <button>
                            <Link to="/Jobs"><img src={arrow} alt="arrow" className='md:w-20 md:h-14 lg:w-12 lg:h-12  md:mt-[280px]  lg:mt-[370px] rounded-full' /></Link>
                        </button>
                        <div className='pl-5 md:text-20 lg:text-xl lg:mb-3'>SEE JOB OFFERS</div>
                    </div>

                </div>


                <div className='pt-20 lg:pt-10 px-5 grid grid-cols-2 md:grid md:grid-cols-1   md:flex-col md:w-1/3   p-5  lg:h-[85vh] lg:pl-16 '>
                    <div className='text-40  pt-5 md:text-[40px] lg:text-[65px] text-start  font-medium   lg:pt-10 '>5
                        <h3 className='md:text-xl font-medium'>agricultural regions</h3>
                    </div>
                    <div >
                        <span className='text-40 md:text-[40px] lg:text-[65px] text-start  font-medium  '>800</span>
                        <h3 className='lg:text-xl  font-medium '>AGRICULTURE PARTNERS</h3>
                    </div>



                    <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start  font-medium   lg:pt-10'>13
                        <h3 className='md:text-xl font-medium'>PLANTS IN NORTH AMERICA</h3>
                    </div>

                    <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start  font-medium   lg:pt-10'>3500
                        <h3 className='md:text-xl font-medium'>PERMENENT AND SEASONAL EMPLOYEES </h3>
                    </div>

                </div>

            </div>
            <div className='flex  items-end md:hidden pl-8 mt-10 mb-5'>
                <button>
                    <Link to=""><img src={arrow} alt="arrow" className='w-12 h-12  mt-5 md:mt-[430px]' /></Link>
                </button>
                <div className='pl-5 text-6 mb-3'>LEARN ABOUT OUR APPROUCH</div>


            </div>
            <hr className='border-[#1b3d38]'></hr>
            <div className="overflow-hidden whitespace-nowrap ">
                <Marquee direction='ri'>
                    <div className="text-[120px] font-semibold uppercase">
                        <span className="mx-4">For 25 years/</span>
                        <span className="mx-4">For 25 years/</span>
                        <span className="mx-4">For 25 years/</span>

                    </div></Marquee>
            </div>
        </div>
    )
}

export default Aboutus4