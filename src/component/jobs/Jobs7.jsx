import React from 'react'
// import person1 from '../assets/person3.png'
// import arrow from '../assets/arrow3.png'
import person from '../assets/person6.png'

function Jobs7() {

    return (
        <div>
            <div className='w-full flex h-screen'>
                <div className='w-1/2 m-10'>
                    <img src={person} alt="" />

                </div>
                <div className='w-1/2 m-10 overflow-y-scroll transition duration-300 h-'>
                    <h1 className='text-7xl font-medium uppercase mt-20 '   >Values that we hold dear</h1>
                    <p className='text-xl'>We make our employee’s well-being a priority. That’s why all our actions are based on our fundamental values.</p>
                    <div className=' '>

                        <div>
                            <hr className='border-[#1b3d38] mt-20   '></hr>
                            <p className='text-3xl mt-7 font-medium'>SIMPILICITY</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                            <p className='text-3xl mt-8 font-medium uppercase'>Excellence</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Integrity</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                       <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Openness</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                       <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Trust</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                       <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Equity</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                       <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Mindful of people</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                      
                       
    
                        
                    </div>
                </div>


            </div>
           
        </div>
    )
}

export default Jobs7