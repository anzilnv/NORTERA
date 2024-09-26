import React, { useState } from 'react'
import person1 from '../assets/person5.png'
import arrow from '../assets/arrow3.png'

function Jobs4() {

    const [openItemId, setOpenItemId] = useState(null);

    const toggleDropdown = (id) => {
        // If the clicked item is already open, close it by setting the openItemId to null
        if (openItemId === id) {
            setOpenItemId(null);
        } else {
            // Otherwise, open the clicked item
            setOpenItemId(id);
        }
    };
    const data =[
        {
            id: 1,
            title:"Head Offices",
            description:"Nortera's head office is in Brossard, Quebec, and the U.S. head office is in Rochester, New York."

        },   {
            id: 2,
            title:"Our Plants",
            description:"Plants in Quebec, Ontario, Alberta, New York, Wisconsin and Pennsylvania."

        }
      

    ]

    return (
      
                <div className='w-full flex pt-40'>
                    <div className='w-1/2 m-10'>
                        <p className='uppercase text-6xl font-medium'>Our Workplaces</p>
                        <p className=' text-2xl font-medium '>Discover the locations of our sites: 2 head offices and 13 plants in North America.</p>
                        <img src={person1} alt="" className='rounded-full mt-28 h-[420px]' />

                    </div>
                    <div className='w-1/2 m-10 overflow-y-scroll'>
                <ul>
                    {data.map((d) => (
                        <li key={d.id} className="mb-6">
                            <div onClick={() => toggleDropdown(d.id)}>
                                <hr className='border-[#1b3d38] mt-12'></hr>
                                <p className={`text-2xl font-medium uppercase mt-14`}>
                                    {d.title} </p>
                                {openItemId === d.id && (


                                    <div className='mt-10'>
                                        <p className='font-medium text-xl'>{d.description}</p>
                                        <div className='flex mt-4'>
                                            <img src={arrow} alt="Arrow" className='rounded-full h-10 mr-5' />
                                            <p className='mt-1 uppercase font-thin'>contact us </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                <hr className='border-[#1b3d38] mt-14'></hr>
            </div>



                </div>
     
    )
}

export default Jobs4