import React from "react";
import bannerimage from '../assets/images.jpg'

const NorteraBanner = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="relative h-56 md:h-64 lg:h-72">
          <img
            src={bannerimage}
            alt="Vegetables"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="text-center">
              <p className="text-white text-xs md:text-sm">THE NORTH AMERICAN LEADER IN</p>
              <p className="text-white text-xs md:text-sm font-bold">READY-TO-COOK VEGETABLES</p>
              <h1 className="text-white text-2xl md:text-4xl font-bold mt-2">NORTERA</h1>
            </div>
          </div>
    </div>
  );
};

export default NorteraBanner;
