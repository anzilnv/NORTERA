import React from 'react'
import person from '../assets/personscommit3.png'

function Ourcommit3() {
  return (
    <div>
                   <div className='w-full flex h-[800px] my-20'>
                <div className='w-1/2 m-10'>
                    <img src={person} alt="" className='' />

                </div>
                <div className='w-1/2 m-10 overflow-y-scroll transition duration-300 h-'>
                    <h1 className='text-7xl font-medium uppercase mt-20 '   >Sound and ethical governance</h1>
                    <p className='text-xl'>We are committed to conducting our business in an ethical manner that promotes sound practices and builds trust among our stakeholders.</p>
                    <div className=' '>

                        <div>
                            <hr className='border-[#1b3d38] mt-20   '></hr>
                            <p className='text-3xl mt-7 font-medium uppercase' >Ethical business practices</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                            <p className='text-3xl mt-8 font-medium uppercase'>Responsibility of the Board of Directors and ESG leadership</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>ESG Reporting and Disclosure</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                     
                      
                       
    
                        
                    </div>
                </div>


            </div>
    </div>
  )
}

export default Ourcommit3