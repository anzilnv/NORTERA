import React from 'react'
import Bgs from '../assets/bannerimageabout.webp'
import imge from '../assets/smallimageabout.webp'
import Ourcommit1 from './Ourcommit1'
import Ourcommit2 from './Ourcommit2'
import Ourcommit3 from './Ourcommit3'

function Ourcommitments() {
    return (
        <div>
            <div className='px-4 text-white'>
                <div style={{ backgroundImage: `url(${Bgs})` }} className="w-92 h-[500px] sm:h-[800px]  lg:w-full lg:h-[1000px] bg-cover bg-center   ">
                    <div className='flex-row-reverse py-16 '>
                        <div className='font-semibold text-3xl sm:text-5xl md:7xl lg:text-[110px] ml-10 sm:ml-0  md:px-12 '>
                            <h1 className=' uppercase '>Commitments at the heart</h1>
                            <hi className='  lg:ml-[500px] uppercase '>of what we do</hi></div>
                        <div className='flex sm:mt-20 md:ml-10 lg:justify-between '>
                            <img src={imge} alt="" className=' h-44 mt-28 ml-5 sm:h-60 sm:mt-36 sm:ml-0 lg:h-[370px] rounded-full lg:w-72 shadow-lg ' />
                            <p className='mt-5 flex text-[15px] justify-center sm:text-40 md:text-[20px] font-semibold lg:flex lg:justify-end lg:align-top uppercase lg:w-[500px] lg:text-4xl lg:pt-40'>To contribute to the well-being of society.</p>
                        </div>
                    </div>
                </div>

                <div className='text-7xl mb-40 pt-20 text-[#1b3d38]'>
                    <h1 >At Nortera, we strive to have a positive and sustainable impact on communities, consumers, and the planet.  </h1>
                </div>
            </div>
            <Ourcommit1 />
            <Ourcommit2 />
            <Ourcommit3 />


        </div>
    )
}

export default Ourcommitments