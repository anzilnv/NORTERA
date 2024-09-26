import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Jobs from './component/jobs/Jobs';
import Header from './component/Header/Header';
import StageFive from './component/Home/StageFive';
import Banner from './component/Home/Banner';
import Ourcustomproducts from './component/Ourcostumproducts/Ourcustomproducts';
import OurBrands from './component/Ourbrands/OurBrands';
import Ourapprouch from './component/Ourapprouch/Ourapprouch';
import Aboutus from './component/Aboutus/Aboutus';
import Contactus from './component/Contactus/Contactus';
import FAQ from './component/FAQ/FAQ';
import LOading from './component/Header/LOading';
import Ourcommitments from './component/Ourcommint/Ourcommitments';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);                                          // Set loading to true whenever the route changes


    
    const timer = setTimeout(() => {                            // Simulate loading delay
      setLoading(false);
    }, 1000);                                                   // You can adjust this delay as per your needs

    return () => clearTimeout(timer);                            // Cleanup timer on component unmount
  }, [location]);                                                // Trigger when the route (location) changes

  return (
    <div className="bg-[#dbe7e8] text-[#1b3d38]">
      {loading ? (
        <LOading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/ourCustomProducts" element={<Ourcustomproducts />} />
            <Route path="/OurBrands" element={<OurBrands />} />
            <Route path="/approuch" element={<Ourapprouch />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/commit" element={<Ourcommitments />} />
          </Routes>
          <div className="bg-[#1b3d38]">
            <StageFive />
          </div>
        </>
      )}
    </div>
  );
};

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
