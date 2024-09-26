import React from 'react'
import image7 from '../assets/home4.avif'
import arrow from '../assets/arrow3.png'
import person from '../assets/person.png'
import { Link } from 'react-router-dom'
function Stage4() {
    return (
        <div className=' bg-current' >
        <div className='w-full h-full md:mt-20 text-[#dbe7e8] flex flex-col-reverse md:flex-row '>
            
            <div className=' p-[20px] sm:p-[40px] md:w-1/2 lg:p-36 '>
                <h1  data-aos="fade-up"  data-aos-duration="1500" className='text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold '>JOIN OUR TEAM</h1>
                <p  data-aos="fade-up"  data-aos-duration="1500"className='sm:text-[20px] md:text-xl '>Come grow with us. Learn more about our operations, production, and corporate job openings!</p>
                
                <div className=''>
                <Link to="/Jobs"><div className='mt-5 flex justify-start  md:mt-11 '>
                    <button className=''>
                      <img src={arrow} alt="arrow" className='w-10 h-10  rounded-full hover:' />
                    </button>
                    <div className='text-4 pl-3  md:pl-5 md:text-7 mt-1'>WORK AT NORTERA</div>
                    </div></Link>
                    <div className=' mt-5 md:mt-10'>
                    <img src={person} alt="" className='md:w-1/2 md:h-1/2 w-32 h-40' />
                    </div>


                </div>
            </div>
            <div className='md:w-1/2'> 
                <div className='   mt-10 md:flex  lg:justify-end lg:items-center md:items-start md:mr-8 lg:h-screen '>
                    <img src={image7} alt="" className='md:w-5/6     w-3/4 ml-10' />
                </div>
            </div>

       

        </div>
        <div className="px-6">
        <div className="mt-4 border-t border-white"></div>
      </div>
        
        </div>
    )
}

export default Stage4