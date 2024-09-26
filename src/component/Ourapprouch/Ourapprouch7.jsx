import React from 'react'
import image from '../assets/arrow3.png'
import { Link } from 'react-router-dom'

function Ourapprouch7() {
  return (
    <div>
        <div className='text-[#1b3d38]'>
        <div className='flex flex-col justify-center text-center items-center  align-middle px-[350px] py-56 '>
            <h1 className='text-7xl  font-semibold pb-10'>SEE HOW VEGETABLES ARE PRODUCED ACCORDING TO YOUR PREFERENCE </h1>
           <Link to="/ourCustomProducts"><img src={image} alt="" className='w-24 h-24 rounded-full  ' /></Link> 


        </div>
        <hr className=' border-[#1b3d38] mt-20 p-6 '></hr>
    </div>
    </div>
  )
}

export default Ourapprouch7