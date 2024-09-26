import React from 'react'
import Marquee from 'react-fast-marquee'
import bgimage1 from '../assets/bgimage125.jpg'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'

function Jobs1() {
    return (
        <div className='text-white'>
            <div style={{ backgroundImage: `url(${bgimage1})` }} className="w-full h-[200px] sm:h-[500px]  lg:w-full lg:h-[700px] bg-cover bg-center  ">
                <div className='flex justify-between pt-10 px-5'><p className='text-3xl font-semibold max-w-72'>LOCATION IN NORTH AMERICA </p>
                   <Link to="/contact"><div className='flex '> <img src={arrow} alt="" className='w-10 h-10 rounded-full mr-3 ' /><p className='mt-2'> CONTACT US</p> </div></Link> 
                </div>
                <div className=' relative flex w-full justify-center h- items-center '>


                    <div className='flex flex-col'>
                        <Marquee direction='right'>
                            <div className="text-[80px] font-semibold  pt-28 uppercase">
                                <span className="mx-4">Brossard</span>
                                <span className="mx-4"> Bedford</span>
                                <span className="mx-4">Lethbridge </span>
                                <span className="mx-4"> Rochester </span>
                                <span className="mx-4">Fairwater </span>
                                <span className="mx-4">Lebanon </span>


                            </div></Marquee>
                        <Marquee direction='left'>
                            <div className="text-[80px] font-semibold pt-5  uppercase">
                                <span className="mx-4">Brossard</span>
                                <span className="mx-4"> Bedford</span>
                                <span className="mx-4">Lethbridge </span>
                                <span className="mx-4"> Rochester </span>
                                <span className="mx-4">Fairwater </span>
                                <span className="mx-4">Lebanon </span>

                            </div></Marquee>
                        <Marquee direction='right z-30 '>
                            <div className="text-[80px] font-semibold pt-5 uppercase">
                                <span className="mx-4">Brossard</span>
                                <span className="mx-4"> Bedford</span>
                                <span className="mx-4">Lethbridge </span>
                                <span className="mx-4"> Rochester </span>
                                <span className="mx-4">Fairwater </span>
                                <span className="mx-4">Lebanon </span>

                            </div></Marquee>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Jobs1