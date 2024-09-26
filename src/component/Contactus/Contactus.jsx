import React, { useState } from 'react'
import arrow from '../assets/arrow3.png'
import { Link } from 'react-router-dom'

function Contactus() {
  const [hovered, sethovered] = useState(false)
  const [hovered2, sethovered2] = useState(false)
  const [hovered3, sethovered3] = useState(false)
  const [hovered4, sethovered4] = useState(false)
  const [hovered5, sethovered5] = useState(false)



  const handlehover = () => {
    sethovered(true);
  }
  const handlehoverleave = () => {
    sethovered(false);
  }


  const hover = () => {
    sethovered2(true);
  }
  const leave = () => {
    sethovered2(false);
  }

  const hover3 = () => {
    sethovered3(true);
  }
  const leave3 = () => {
    sethovered3(false);
  }
  const hover4 = () => {
    sethovered4(true);
  }
  const leave4 = () => {
    sethovered4(false);
  }
  const hover5 = () => {
    sethovered5(true);
  }
  const leave5 = () => {
    sethovered5(false);
  }


  return (
    <div>
      <h1 className='text-[120px] mt-32 font-[600] '>CONTACT US</h1>
      <div className='grid grid-cols-2 p-2 gap-4'>

        <div className='w-full h-[250px] bg-white hover:bg-[#1b3d38] hover:rounded-[50px] hover:transition hover:duration-500 shadow-lg'
          onMouseEnter={handlehover} onMouseLeave={handlehoverleave} >
          {hovered ?
            (<div className='flex-col justify-between h-full relative text-white'>
              <h2 className=' text-4xl p-10 uppercase'>  Work with Nortera</h2>
              <p className='absolute bottom-16 left-12'>To collaborate with us, submit your request here</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16 absolute bottom-10 right-14  ' /></div>) :


            (<div className=' justify-between h-full relative text-[#1b3d38]'>
              <h2 className=' text-4xl p-10 uppercase'>Work with Nortera</h2>
              <p className='absolute bottom-16 left-12'>To collaborate with us, submit your request here</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16  absolute bottom-10 right-14 ' /></div>)}
        </div>
        <div className='w-full h-[250px] bg-white hover:bg-[#1b3d38] hover:rounded-[50px] hover:transition hover:duration-500 shadow-lg'
          onMouseEnter={hover} onMouseLeave={leave} >
          {hovered2 ?
            (<div className='flex-col justify-between h-full relative text-white'>
              <h2 className=' text-4xl p-10 uppercase'> Request for donations and sponsorships  </h2>
              <p className='absolute bottom-16 left-12'>Nortera cares about the community. Submit your donation and sponsorship request via the form.
              </p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16 absolute bottom-10 right-14  ' /></div>) :


            (<div className=' justify-between h-full relative text-[#1b3d38]'>
              <h2 className=' text-4xl p-10 uppercase '> Request for donations and sponsorships</h2>
              <p className='absolute bottom-16 left-12'>Nortera cares about the community. Submit your donation and sponsorship request via the form.
              </p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16  absolute bottom-10 right-14 ' /></div>)}
        </div>
      </div>
      <div className='grid grid-cols-2 p-2 gap-4'>

        <div className='w-full h-[250px] bg-white hover:bg-[#1b3d38] hover:rounded-[50px] hover:transition hover:duration-500 shadow-lg'
          onMouseEnter={hover3} onMouseLeave={leave3} >
          {hovered3 ?
            (<div className='flex-col justify-between h-full relative text-white'>
              <h2 className=' text-4xl p-10 uppercase'>  Work at Nortera </h2>
              <p className='absolute bottom-16 left-12'>Come grow with us. Check out our job openings now!</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16 absolute bottom-10 right-14  ' /></div>) :


            (<div className=' justify-between h-full relative text-[#1b3d38]'>
              <h2 className=' text-4xl p-10 uppercase '>Work at Nortera</h2>
              <p className='absolute bottom-16 left-12'>Come grow with us. Check out our job openings now! </p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16  absolute bottom-10 right-14 ' /></div>)}
        </div>
        <div className='w-full h-[250px] bg-white hover:bg-[#1b3d38] hover:rounded-[50px] hover:transition hover:duration-500 shadow-lg'
          onMouseEnter={hover4} onMouseLeave={leave4} >
          {hovered4 ?
            (<div className='flex-col justify-between h-full relative text-white'>
              <h2 className=' text-4xl p-10 uppercase'>  Customer Service </h2>
              <p className='absolute bottom-16 left-12'>If you have any comments about our products, please fill in the following form.</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16 absolute bottom-10 right-14  ' /></div>) :


            (<div className=' justify-between h-full relative text-[#1b3d38]'>
              <h2 className=' text-4xl p-10 uppercase '>Customer Service</h2>
              <p className='absolute bottom-16 left-12'>If you have any comments about our products, please fill in the following form.</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16  absolute bottom-10 right-14 ' /></div>)}
        </div>
      </div>

<div className='p-2'>
      <div className='w-full h-[250px] bg-[#d7e5e8] hover:bg-[#1b3d38] hover:rounded-[50px] hover:transition hover:duration-500 shadow-lg border border-[#b9c4c7] '
          onMouseEnter={hover5} onMouseLeave={leave5} >
          {hovered5 ?
            (<Link to="/FAQ"><div className='flex-col justify-between h-full relative text-white'>
              <h2 className=' text-4xl p-10 uppercase'>  Customer Service </h2>
              <p className='absolute bottom-16 left-12'>If you have any comments about our products, please fill in the following form.</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16 absolute bottom-10 right-14  ' /></div></Link>) :


            (<div className=' justify-between h-full relative text-[#1b3d38]'>
              <h2 className=' text-4xl p-10 uppercase '>Customer Service</h2>
              <p className='absolute bottom-16 left-12'>If you have any comments about our products, please fill in the following form.</p>
              <img src={arrow} alt="" className='rounded-full w-16 h-16  absolute bottom-10 right-14 ' /></div>)}
        </div>

</div>




    </div >

  )
}

export default Contactus