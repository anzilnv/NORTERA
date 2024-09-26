import React from 'react'
import person from '../assets/personcommit.png'

function Ourcommit1() {
  return (
  
                
            <div className='w-full flex h-[800px] py-20'>
                <div className='w-1/2 m-10'>
                    <img src={person} alt="" />

                </div>
                <div className='w-1/2 m-10 overflow-y-scroll transition duration-300 h-'>
                    <h1 className='text-7xl font-medium uppercase mt-20 '   >Have a positive social impact
                  </h1>
                    
                    <p className='text-xl'>We are committed to creating a positive economic and social impact for our employees and our communities.</p>
                    <div className=' '>

                        <div>
                            <hr className='border-[#1b3d38] mt-20   '></hr>
                            <p className='text-3xl mt-7 font-medium'>We Supporting the social and economic vitality of our communities</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                            <p className='text-3xl mt-8 font-medium uppercase'>Combating food insecurity</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Providing a safe and inclusive working environment</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                      
                      
                       
    
                        
                    </div>
                </div>


            </div>
           
      
  )
}

export default Ourcommit1