import React from 'react'
import image6 from '../assets/home3.jpg'
import arrow from '../assets/arrow2.png'
import { Link } from 'react-router-dom'

function Stage3() {
    return (
        <div >
            <div className=' text-2xl sm:p-5 md:p-8 font-medium md:text-4xl'>
                <h1  data-aos="fade-up"  data-aos-duration="1500">NORTERA IN
                    NUMBERS </h1>

         
            </div>
            <div  data-aos="fade-up"  data-aos-duration="1500"className=' md:flex  lg:h-[800px] md:h-[650px] w-full px-4 '>

                <div className='   mt-20 md:w-1/3  pl-6  lg:h-[70vh]   md:flex    items-end     md:pl-2 md:mr-3 lg:pl-4  '>
                    <img  data-aos="fade-up"  data-aos-duration="1500" src={image6} alt="" className='rounded-t-full sm:w-72 2xl:-mb-20 sm:h-76  md:mr-8 md:w-96 md:h-96  ' />
                </div>

                <div className=' md:w-1/3  md:h-[85vh] mt-20'>
                    <span className=' sm:text-2xl lg:text-3xl  '>With facilities in Canada and the United States, Nortera processes and markets over 450,000 tons of frozen and canned vegetables per year</span>


                    <div className=' items-end  hidden md:flex'>
                        <button>
                           <Link to="/approuch"><img src={arrow} alt="arrow" className='md:w-20 md:h-14 lg:w-20 lg:h-20  md:mt-[280px]  lg:mt-[370px]' /></Link> 
                        </button>
                        <div className='pl-5 md:text-20 lg:text-xl lg:mb-6'>LEARN ABOUT OUR APPROUCH</div>
                    </div>

                </div>


                <div className='pt-20 lg:pt-10 px-5 grid grid-cols-2 md:grid md:grid-cols-1   md:flex-col md:w-1/3   p-5  lg:h-[85vh] lg:pl-16 '>

                    <div >
                        <span className='text-40 md:text-[40px] lg:text-[65px] text-start  font-medium  '>800</span>
                        <h3 className='lg:text-xl  font-medium '>AGRICULTURE PARTNERS</h3>
                    </div>

                    <div className='text-40  sm:pt-5 md:text-[40px] lg:text-[65px] text-start  font-medium   lg:pt-10 '>120500
                        <h3 className='md:text-xl font-medium'>ACERS OF LAND CULTIVATED</h3>
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
                    <Link to="/approuch"><img src={arrow} alt="arrow" className='w-12 h-12  mt-5 md:mt-[430px]' /></Link>
                </button>
                <div className='pl-5 text-6 mb-3'>LEARN ABOUT OUR APPROUCH</div>


            </div>
        </div >
    )
}

export default Stage3