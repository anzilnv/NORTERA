import React from 'react'
import image from '../assets/jjjjjjjj.avif'
import image2 from '../assets/kkkkkkk.png'
import arrow from '../assets/arrow2.png'
import { Link } from 'react-router-dom'

function Nextstage() {
    return (
        <div className="">
            <div className='pb-24  md:pb-0 md:flex md:h-full lg:h-[700px] ' >

                {/* <div className='flex'>
            <img src={image} alt="" className='w-[700px] h-[750px] absolute' />
            <img src={image2} alt="" className='w-[300px] h-[350px]  relative' /> */}


                <div class="    relative md:w-full  lg:h-full md:h-[500px]  hidden:h-[300px] flex-col mb-10 md:mb-0  mt-16 md:mt-0 ">

                    <img src={image} alt="Background" class="w-1/2 h-[280px] sm:h-[400px]  md:h-full  md:w-5/6 pl-8 " />
                    <img src={image2} alt="Foreground" class="absolute bottom-0 left-[150px] sm:left-[200px]  md:left-[270px] lg:left-[500px] md:w-2/5 md:h-3/5 h-2/3" />
                </div>
                <div className='  text-xl sm:text-2xl md:pt-32 lg:pt-0 items-center px-5 gap-5 md:gap-0 lg:flex   md:text-xl lg:text-2xl  md:w-4/6  md:px-5 lg:px-20 ' >
                    <p data-aos="fade-up" data-aos-duration="1500">At Nortera, we specialize in the processing and marketing of canned and frozen vegetables. We do everything possible to offer healthy and sustainable food.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className='  px-5  md:mt-5 lg:mt-20 '>
                <p className=' sm:text-[40px]  md:text-[45px] lg:text-[78px] text-[30px] hidden:sm:font-semibold sm:font-normal  '>
                    To contribute to the well-being of society through access to the richness of vegetables.
                </p>
            </div>
            <Link to="/about">
                <div className="mt-36 flex ">
                    <button className='pl-8 mb-2 '>
                        <img src={arrow} alt="" className='rounded-full w-12 h-12' />
                    </button>
                    <div  className='pl-5 text-xl mt-3'>Learn about our company</div>

                </div></Link>


            <div className="p-6">
                <div className="mt-4 border-t border-gray-800"></div>


            </div>
        </div>




    )
}
// 
export default Nextstage