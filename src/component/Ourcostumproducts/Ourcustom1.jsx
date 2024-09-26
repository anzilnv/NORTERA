import React from 'react'
import item1 from '../assets/Screenshot 2024-08-24 172731.png'
import item2 from '../assets/Screenshot 2024-08-24 172805.png'

function Ourcustom1() {
  return (
    <div className='text-[#1b3d38] lg:pt-20'>
        <div>
            <div>
                <p className='pt-20 text-4xl lg:text-7xl'>Nortera offers an unparalleled range of frozen and canned vegetables, in different shapes and sizes and packaged in various forms to meet your needs.</p>
            </div>

            <div className='flex pt-48 lg:pt-96 text-4xl lg:text-7xl'>
                <span className='  lg:mr-5 lg:p-2 '> 1.</span>
                <h1 className='lg:mt-2' >CHOICE OF TECHNOLOGY</h1>
            </div>

            <div className='lg:grid grid-cols-2 gap-4 lg:mt-40 pt-28 px-2'>
                <div>
                    <img src={item1} alt="" />
                    <p className='text-4xl mt-10'>CANNED</p>
                    <p className='mt-5 text-2xl'>At Nortera, we have several canning facilities in Canada. Our facilities operate year-round, for both freshly harvested and out-of-season products.  </p>
                </div>
                <div className='pt-10 lg:pt-0'>
                    <img src={item2} alt="" />
                    <p className='text-4xl mt-10'>FROZEN</p>
                    <p className='mt-5 text-2xl'>With freezing facilities in Canada and the United States, we offer a range of exceptional quality vegetables with a wide choice of packaging.</p>

                    
                </div>

            </div>

            <hr className=' border-[#1b3d38] mt-20 p-6'></hr>
        </div>
    </div>
  )
}

export default Ourcustom1