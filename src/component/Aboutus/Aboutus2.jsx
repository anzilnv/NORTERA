import React from 'react'
import upimage from '../assets/Screenshot 2024-08-31 123605.png'
import farm from '../assets/imagefarm.jpg'
import farmup from '../assets/Screenshot 2024-08-31 125833.png'
// import arrow from '../assets/arrow3.png'

function Aboutus2() {
    return (
        <div className=' text-[#1b3d38] px-6 '>
            <p className='text-[40px]'>OUR MISSION</p>

            <div className='flex justify-end px-20'>
                <img src={upimage} alt="" className='h-[375px] w-80' />
            </div>
            <div className="h-[1200px] flex">

                <div className=" flex-1">
                    <p className="uppercase text-8xl font-sans font-medium w-[900px] ">
                        From rich and bountiful lands
                    </p>
                    <div className='relative h-[670px]'>
                        <img src={farm} alt="" className="h-[670px] w-[650px] absolute" />
                        <img src={farmup} alt="" className="absolute h-[500px] bottom-0 left-[550px]" /></div>
                </div>

                <div className='flex flex-col mt-[350px] justify-start items-start text-start  w-[450px]' >
                    <p className='text-[23px]'>At Nortera, we take care of the land so that it can supply us with vegetables of exceptional quality. We cultivate all the richness and freshness of our North American soil.</p>

                    <p className='text-[23px] pt-2'>Our deep-rooted agility and know-how allow us to offer vegetable products that are always available in abundance. Our mission? To contribute to the well-being of society through access to the richness of vegetables.</p>
                </div>
            </div>
       
        </div >
    )
}

export default Aboutus2