import React from 'react'

import div1mg from '../assets/Screenshot 2024-08-25 155115.png'
import div2mg from '../assets/Screenshot 2024-08-25 155356.png'
import arrow from '../assets/arrow4.png'

const Ourbrands1 = () => {
    return (
        <div>
            <div className='text-[#1b3d38] lg:pt-20 lg:px-4' >
                <div>
                    <div>
                        <p className='pt-20 lg:pt-10 text-4xl lg:text-7xl '>Nortera processes vegetables for its own brands as well as a wide range of private labels in North America. </p>
                    </div>


                    <div className='lg:grid grid-cols-2 gap-4 lg:mt-40 pt-28 px-2'>
                        <div>
                            <img src={div1mg} alt="" className='h-[700px] w-[700px]' />/</div>
                        <div className='py-40 px-20'>


                            <p className='text-7xl mt-10 font-mono'>ARCTIC GARDENS</p>
                            <p className=' text-xl mt-5'> As the leading brand of frozen vegetables in Québec, Arctic Gardens offers unparalleled quality and freshness. </p>
                            <div className='flex mt-10 gap-5'>
                                <div className='bg-white w-10 rounded-full mt-8'>
                                    <img src={arrow} alt="" className='w-10 h-10' />
                                </div>
                                <p className='pt-9'>DISCOVER OUR CONSUMER PRODUCTS</p>
                            </div>
                            <div className='flex mt-0 gap-5'><div className='bg-white w-10 rounded-full mt-8'>
                                <img src={arrow} alt="" className='w-10 h-10' /></div>
                                <p className='pt-9'>DISCOVER OUR FOOD SERVICE PRODUCTS</p></div>
                        </div>
                    </div>

                    <div className='lg:grid grid-cols-2 gap-4 lg:mt-40 lg:pt-0 px-2'>

                        <div className='py-40 px-20'>


                            <p className='text-7xl mt-10 font-mono'>DEL MONTE</p>
                            
                            <p className=' text-xl mt-5'> Del Monte grows and preserves the best Mother Nature has to offer. Tasty, juicy, and nutritious fruits, preserved according to the highest quality standards.  </p>
                            <p className='font-thin italic  mt-5 text-2xl'>Del Monte is licensed by Nortera in Canada only.</p>
                            <div className='flex mt-5 gap-5'>
                                <div className='bg-white w-10 rounded-full mt-8'>
                                    <img src={arrow} alt="" className='w-10 h-10' />
                                </div>
                                <p className='pt-9'>DISCOVER OUR CONSUMER PRODUCTS</p>
                            </div>
                        
                        </div>
                        <div>
                            <img src={div2mg} alt="" className='h-[700px] w-[700px]' />
                        </div>
                    </div>
                </div>

                <hr className=' border-[#1b3d38] mt-20 p-6'></hr>
            </div>
        </div>

    )
}

export default Ourbrands1