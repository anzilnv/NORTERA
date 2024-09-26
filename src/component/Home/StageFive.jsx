import React from "react";
import { Link } from "react-router-dom";
import face from '../assets/icon/facebook (1).png'
import youtube from '../assets/icon/youtube (1).png'
import linked from '../assets/icon/linkedin (3).png'

const StageFive = () => {
  return (
    <div>
      <div className=" text-white py-10 ">
        <div className="text-7xl sm:text-[130px] font-semibold md:text-[155px] lg:text-[330px] ">
          NORTERA
        </div>
        <div className="  md:w-full lg:flex">
          <div className=" md:w-1/3 md:pl-8 pl-6 space-y-5 ">
            <p>
              <h2 className="text-3xl font-semibold">CANADA</h2>

              <h3 className="max-w-[200px] text-md">
                140, rue de l'Équinoxe Brossard, QC J4Z 0R4
              </h3>
            </p>
            <p>
              <h2 className="text-3xl font-semibold">United States</h2>

              <h3 className="max-w-[200px] text-md">
                100 Corporate Woods, Suite 210 Rochester, NY 14623
              </h3>
            </p>
          </div>

          <hr className="  w-full  lg:hidden "></hr>

          <div className=" pl-6 lg:grid grid-cols-3 w-2/3 lg:pl-16">
            <div className="lg:px-10">
              <ol className=" font-semibold text-xl space-y-5 ">
              <Link to="/ourCustomProducts"> <li className=" hover:underline cursor-pointer ">OUR CUSTOM PRODUCT</li></Link>
               <Link to="/OurBrands"> <li className=" hover:underline cursor-pointer ">OUR BRAND</li></Link>
               <Link to="/approuch"> <li className=" hover:underline cursor-pointer ">OUR APPROUCH</li></Link> 
               <Link to="/contact">  <li className=" hover:underline cursor-pointer ">CONTACT US</li></Link>
              </ol>
            </div>
            <div className="lg:px-10">
              <ol className=" font-semibold text-xl space-y-5 ">
              <Link to="/Jobs">  <li className=" hover:underline cursor-pointer "> WORK AT NORTER </li></Link> 
              <Link to="/"> <li className=" hover:underline cursor-pointer "> OUR OPEN POSITIONS </li></Link> 
              <Link to="/about"><li className=" hover:underline cursor-pointer ">ABOUT US</li></Link> 
              <Link to="/commit"> <li className=" hover:underline cursor-pointer ">OUR COMMITMENTS</li></Link> 
              </ol>
            </div>
            <div className="lg:px-10">
              <ol className=" text-base py-2  ">
               <Link> <li className=" hover:underline cursor-pointer ">Press Relations </li></Link>
                <Link to="/FAQ"><li className=" hover:underline cursor-pointer ">FAQ</li></Link>
                <Link> <li className=" hover:underline cursor-pointer ">Contact</li></Link>
                <Link> <li className=" hover:underline cursor-pointer ">Partners</li></Link>
                <Link>  <li className=" hover:underline cursor-pointer ">Conditions</li></Link>
                <Link> <li className=" hover:underline cursor-pointer ">Privacy Policy</li></Link>
                <li className=" hover:underline cursor-pointer ">
                  Accessibility
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="px-6">
          <hr className="  w-full mt-5 "></hr>
          <div className="flex justify-between items-center py-2 ">
            <div className="flex items-center gap-3">
              <img src={face} alt="" width={25} className="rounded-full cursor-pointer hover:animate-bounce " />
              <img src={linked} alt="" width={25} className="rounded-full cursor-pointer hover:animate-bounce"  />
              <img src={youtube} alt=""  width={25} className="cursor-pointer hover:animate-bounce " />
            </div>
            <div className="flex gap-3 text-xl text-gray-500 font-semibold">
              <h4 className="hover:text-white">FR</h4>
              <h4 className="hover:text-white">EN</h4>
              <h4 className="hover:text-white">ES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageFive;
