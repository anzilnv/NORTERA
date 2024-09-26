import React from 'react'
import arrow from '../assets/arrow3.png'
import div1mg from '../assets/Screenshot 2024-08-25 155115.png'
import Bgs from '../assets/OIG3.jpg'
import { Link } from 'react-router-dom'
const Aboutus5 = () => {
    return (
        <div>

            <div className='lg:grid grid-cols-2 gap-4  pt-28 px-2'>
                <div>
                    <img src={div1mg} alt="" className='h-[700px] w-[700px]' /></div>
                <div className='py-40 px-20'>
                    <p className='text-[60px] uppercase font-[600]' >Our story starts here</p>
                    <p className='text-xl'>Previously known as Aliments Carrière, the company was acquired by the multinational Bonduelle in 2007. After 15 years of innovation and expansion, Nortera was established in June 2022, thanks to an agreement with the Fonds de solidarité FTQ, the Caisse de dépôt et placement du Québec (CDPQ), and Bonduelle.</p>

                </div>

            </div>

            <div style={{ backgroundImage: `url(${Bgs})` }} className="text-white w-92 h-[300px] sm:h-[600px]  lg:w-full lg:h-[800px] bg-cover bg-center  relative  my-20 ">
                <div className='flex '>
                    <h1 className='p-10 text-6xl uppercase text-white w-[800px] font-[600]'>Be part of the Nortera adventure!</h1>

                    <div className=' flex flex-col absolute bottom-5 right-20 gap-3'>
                        <div className='flex'>
                            <Link to="/Jobs"><img src={arrow} alt="" className='rounded-full w-10 h-10 mr-4 ' /> </Link><h1 className='text-xl'>SEE JOB OFFERS</h1></div>
                        <div className='flex'><img src={arrow} alt="" className='rounded-full w-10 h-10 mr-4' /> <h1 className='text-xl'>WORK WITH US</h1></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutus5