import React from 'react'
import imageapce from '../assets/dried-leaf.png'


function Ourcustom2() {

    const data =
        [
            {
                id: "1",
                img:'../assets/arow.png'
                
              
            },
            {
                id: "2",
                img:'../assets/image6.png'
                
              
            },

        ]
  return (
    <div className='text-[#1b3d38] '>
        <div>
            <div className='mx-10'>
            <div className='flex justify-start relative ' >
                <h1 className=' text-6xl w-[700px]'>2. SELECTION OF FOOD PRODUCTS AND THEIR CHARACTERISTIC</h1>
            </div>
            <div className='flex justify-between pt-12'>
                <p className='w-[700px] text-2xl absolute right-20 font-medium'>A wide range of vegetables and legumes are available in a variety of colors, shapes, and sizes, both frozen and canned. Looking for a specific product? Learn more about our out-of-season products.</p>
            </div>
            </div>
            <div className='h-screen'>

            </div>
            <div className='h-screen bg-[#1b3d38] grid grid-cols-2  text-white py-5 '>
                <div className='flex flex-col justify-between px-3'>
                <h1 className=' font-medium text-6xl w-1/2 '>2. CHOICE OF PACKAGING</h1>
                <p className='text-4xl '>Whether canned or frozen, we offer our customers a wide variety of packaging options to set themselves and their products apart.</p>
                </div>
                <div className='grid grid-cols-2 gap-2'> 
                    <div>
                        {data.map((d)=>(
                            <div key={d.id}>
                                    <img src={d.img} alt='' className='w-20 h-20'/>
                                </div>
                        ))}
                    </div>
                    <div>
                    {data.map((d)=>(
                            <div key={d.id}>
                                    <img src={d.img} alt='' className='w-20 h-20'/>
                                </div>
                        ))}
                    </div>

                </div>
                
            </div>  
            <div className='grid grid-cols-2 w-full h-[950px] p-8 pt-10 text-[#1b3d38] gap-5'>
            
                <div>
                        <img src={imageapce} alt="" className='h-[800px]'  />
                </div>
                <div className='px-7 pt-40   overflow-y-scroll'>
                        <div >
                            <h1 className='text-7xl font-semibold '>
                                4.   SHIPPED ANYWHERE FOR YOU  </h1>
                            <p>We offer containers adapted to the specific needs of each distribution channel as well as our customers’ specifications.</p>
                        </div>
                        <hr className=' border-[#1b3d38] mt-20 p-6'></hr>
                        <h3 className='text-3xl'>CASES</h3>
                        <hr className=' border-[#1b3d38] mt-[30px] p-6 '></hr>
                        <h3 className='text-3xl'>BAG-IN-A-BOX</h3>
                        <hr className=' border-[#1b3d38] mt-[30px] p-6 '></hr>
                        <h3 className='text-3xl'>TOTES</h3>
                        <hr className=' border-[#1b3d38] mt-[30px] p-6 '></hr>
                        <h3 className='text-3xl'>DISPLAY CASES</h3>
                        <hr className=' border-[#1b3d38] mt-[30px] p-6 '></hr>
                </div>
            </div>
            
            <hr className=' border-[#1b3d38] mt-20 p-6 '></hr>

        </div>
       
    </div>
  )
}


export default Ourcustom2