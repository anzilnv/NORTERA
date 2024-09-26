import React from 'react'
import image from '../assets/download.png'
import { Link } from 'react-router-dom'

function Ourcustum3() {
  return (
    <div className='text-[#1b3d38]'>
        <div className='flex flex-col justify-center text-center items-center  align-middle px-[350px] py-56 '>
            <h1 className='text-7xl  font-semibold '>WANT TO CREATE YOUR OWN CUSTOM PRODUCT?</h1>
            <Link to="/contact"><img src={image} alt="" className='w-24 h-24 rounded-full ' /></Link>


        </div>
        <hr className=' border-[#1b3d38] mt-20 p-6 '></hr>
    </div>
  )
}

export default Ourcustum3