/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

function Ourapprouch3() {
    return (
        <div className='bg-sky-300 w-full h-[800px] sm:grid grid-cols-2 gap-2 px-4'>
            <div className=' text-[#1b3d38] py-10 '>
                <div className='flex flex-col justify-between px-3 h-full'>
                    <div>
                        <h1 className='font-medium text-[20px] xl:text-[50px] w-1/2 uppercase'>Rooted in our communities</h1>
                    </div>
                    <div className='flex w-full p-0'>
                        <div className='w-1/2'>
                            <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start font-medium lg:pt-10'>5
                                <h3 className='text-[12px] md:text-lg font-medium'>AGRICULTURE REGION</h3>
                            </div>
                            <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start font-medium lg:pt-10'>13
                                <h3 className='text-[12px] md:text-lg font-medium'>PLANTS IN NORTH AMERICA</h3>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start font-medium lg:pt-10'>800
                                <h3 className='text-[12px] md:text-lg font-medium'>AGRICULTURE PARTNERS</h3>
                            </div>
                            <div className='text-40 pt-5 md:text-[40px] lg:text-[65px] text-start font-medium lg:pt-10'>3500
                                <h3 className='text-[12px] md:text-lg font-medium uppercase'>permanent and seasonal employees</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling columns with marquee effect */}
            <div className='xl:grid grid-cols-2  h-[800px] gap-2'>
                {/* Left Column: Scroll Up */}
                <div className=' xl:h-[800px]  '>
                    <marquee  direction="up"  style={{ height: '100%', width: '100%' }}>
                        
                        <div className='bg-white w-[365px] h-[400px] mt-2 rounded-lg'></div>
                        <div className='bg-white w-[365px] h-[400px]  mt-2 rounded-lg'></div>
                        <div className='bg-white w-[365px] h-[400px]   mt-2 rounded-lg'></div>
                        <div className='bg-white w-[365px] h-[400px]   mt-2 rounded-lg'></div>
                        <div className='bg-white w-[365px] h-[400px]   mt-2 rounded-lg'></div>
                       
                    </marquee>
                </div>

                {/* Right Column: Scroll Down */}
                <div className='xl:h-[800px]'>
                    <marquee direction="down" scrollamount="5" style={{ height: '100%', width: '100%' }}>
                        <div className='bg-white   xl:w-[365px] xl:h-[400px] rounded-lg mt-2'></div>
                        <div className='bg-white   xl:w-[365px] xl:h-[400px] rounded-lg mt-2'></div>
                        <div className='bg-white   xl:w-[365px] xl:h-[400px] rounded-lg mt-2'></div>
                        <div className='bg-white   xl:w-[365px] xl:h-[400px] rounded-lg mt-2'></div>
                        <div className='bg-white   xl:w-[365px] xl:h-[400px] rounded-lg mt-2'></div>
                    </marquee>
                </div>
            </div>
        </div>
    );
}

export default Ourapprouch3;
