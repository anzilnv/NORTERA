import React, { useState } from 'react'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'

function Ourcustum4() {
    const [hovered, sethovered] = useState(false)
    const [hovered2, sethovered2] = useState(false)

    const handlehover = () => {
        sethovered(true);
    }
    const handleleave = () => {
        sethovered(false);
    }

    const hover = () => {
        sethovered2(true);
    }
    const leave = () => {
        sethovered2(false);
    }


    return (
        <div className=''>
            <div>
                <div className='flex justify-between text-[#1b3d38] font-medium px-5'>
                    <div><h1 className='text-4xl'>DID YOU KNOW?</h1></div>
                    <Link to="/FAQ">
                    <div className='flex'>
                        <img src={arrow} alt="" className='w-10 h-10 rounded-full mr-3' />
                        <h3 className=' text-xl mt-1'>SEE ALL QUESTION</h3>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 h-[500px] w-full  gap-2 px-5 py-6'>

                <div className={` hover:bg-[#1b3d38]  hover:rounded-[50px] border bg-white  hover:transition hover:duration-300`}
                    onMouseEnter={handlehover}
                    onMouseLeave={handleleave}
                >


                    {hovered ?
                        (<Link to="/FAQ"><div className='flex flex-col justify-between items-end h-full'>
                            <h2 className='text-white text-4xl p-10' >Yes we offer products such as canned sauces ,soups and more!</h2>
                            <div className='flex '>  <h2 className=''>DETAILED ANSWER</h2><img src={arrow} alt="" className='rounded-full w-16 h-16 m-10 ' /></div>
                        </div></Link>)
                        :
                        (<div className='flex flex-col justify-between items-end h-full'>
                            <h2 className='text-[#1b3d38] text-4xl p-10 '>Does Nortera offer products other than fruits,vegetables and legumes?</h2>
                            <img src={arrow} alt="" className='rounded-full  w-16 h-16 m-10 ' /></div>)}

                </div>

                <div className='  hover:bg-[#1b3d38] hover:rounded-[50px] border bg-white hover:transition hover:duration-300'

                    onMouseEnter={hover}
                    onMouseLeave={leave}>

                    {hovered2 ? (
                      <Link to="/FAQ">
                       <div className='flex flex-col justify-between h-full'>
                            <h2 className='text-white text-4xl p-10 '>See your FAQ for more information</h2>
                            <img src={arrow} alt="" className='rounded-full w-16 h-16 m-10  ' /></div></Link> ) :

                (<div className='flex flex-col justify-between  h-full'>
                    <h2 className='text-[#1b3d38] text-4xl p-10 '>Do you offer organic products? </h2>
                    <img src={arrow} alt="" className='rounded-full w-16 h-16 m-10' />
                </div>)}
            </div>


        </div>
        </div >
    )
}

export default Ourcustum4