import React from 'react'
import person from '../assets/personcommit2.png'
function Ourcommit2() {
  return (
    <div>
             
             <div className='w-full flex h-[800px] my-20'>
               
                <div className='w-1/2 m-10 overflow-y-scroll transition duration-300 h-'>
                    <h1 className='text-7xl font-medium uppercase mt-20 '   >Preserve the environment</h1>
                    <p className='text-xl'>We support responsible agriculture and look for new ways to grow, process, and sell our products every day to conserve the environment.</p>
                    <div className=' '>

                        <div>
                            <hr className='border-[#1b3d38] mt-20   '></hr>
                            <p className='text-3xl mt-7 font-medium'>Integrating sustainable agriculture and protecting biodiversity</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                            <p className='text-3xl mt-8 font-medium uppercase'>Optimizing resource use in our plants</p>
                            <hr className=' border-[#1b3d38] mt-8  '></hr>
                        </div>
                        <div>
                           
                           <p className='text-3xl mt-8 font-medium uppercase'>Contributing to carbon neutrality</p>
                           <hr className=' border-[#1b3d38] mt-8  '></hr>
                       </div>
                       
                       
    
                        
                    </div>
                </div>
                <div className='w-1/2 m-10'>
                    <img src={person} alt="" />

                </div>


            </div>
    </div>
  )
}

export default Ourcommit2