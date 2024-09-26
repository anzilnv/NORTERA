import React, { useState } from 'react';
import logo from '../assets/logonorteraremoved.png'
import contactus from '../assets/download.png'
import Ourfood from '../Home/Ourfood';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, sethovered] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlehover = () => {
    sethovered(true);
  }
  const handleleave = () => {
    sethovered(false);
  }
  return (
    <Headroom className='  '>
      <nav className={` h-24 w-[100%] ${hovered ? " bg-white  h-[700px] tansition duration-300 z-40" : " bg-[#d7e5e8]"} relative `}>
        <div className="container  flex justify-between px-6 items-center absolute space-y-8">

          <div className="flex items-center mt-7">
            <div className="w-8 h-8 ">

              <Link to="/"><img src={logo} alt="Logo" className= 'hover:animate-spin' /></Link>
            </div>
          </div>


          <div className="  flex-col">
            <div className='hidden md:flex space-x-10 group-hover:block  '>
              <Link className="text-[#2d474d] font-medium relative"
                onMouseEnter={handlehover}
                onMouseLeave={handleleave}>
                OUR FOOD +
   
              </Link>
              <Link to="/approuch" className="text-[#2d474d] font-medium">OUR APPROACH</Link>
              <Link to="/Jobs" className="text-[#2d474d] font-medium ">JOBS</Link>
              <Link to="" className="text-[#2d474d] font-medium "
                onMouseEnter={handlehover}
                onMouseLeave={handleleave}>WHO WE ARE +

              </Link>
            </div>

          </div>


         <div className="hidden md:flex items-center space-x-4 ">
            <Link to="/contact"> CONTACT US</Link>
            <div className="flex ">

            <Link to="/contact"> <img src={contactus} alt="Email" className="w-7 h-7 rounded-full" /></Link>


            </div>
          </div>


          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#2d474d] transition ease-in-out delay-150   hover:scale-125 duration-500">

              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        
      {isOpen && (
        <div className="md:hidden mt-4 space-y-6 text-2xl flex-col bg-white py-32  px-10">
          <div className="block text-[#2d474d] font-medium hover:bg-gray-200 hover:rounded-lg w-1/3 ">OUR FOOD +</div>
          <div className="block text-[#2d474d] font-medium hover:bg-gray-200 hover:rounded-lg w-1/3">OUR APPROACH</div>
          <div className="block text-[#2d474d] font-medium hover:bg-gray-200 hover:rounded-lg w-1/3">JOBS</div>
          <div className="block text-[#2d474d] font-medium hover:bg-gray-200 hover:rounded-lg w-1/3">WHO WE ARE +</div>
          <div className="block text-[#2d474d] font-medium hover:bg-gray-200 hover:rounded-lg w-1/3">CONTACT US</div>
          
        

          <hr className="  w-full mt-5  "></hr>
        </div>
      )}


        <div>
          {hovered && (
          <div className='py-20 transition-all duration-1000'>
              <Ourfood/>
          </div>
          )}
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
