import React, { useState } from 'react'
import person1 from '../assets/person4.png'
import arrow from '../assets/arrow3.png'


function Jobs3() {

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
                title:"Supervisor",
                description:"Supervise and mentor employees in a safe environment."

            },   {
                id: 2,
                title:"Operator",
                description:"Operate equipment and keep your work environment clean and safe."

            },
            {
                id: 3,
                title:"Line Associate",
                description:"Perform general tasks on the frozen food packaging line."

            },
            {
                id: 4,
                title:"Forklist Operator",
                description:"Operate a forklift to move products safely from one department to another."

            },
            {
                id: 5,
                title:"Mechanic",
                description:"Perform preventive maintenance and repairs on production and packaging equipment."

            },
            {
                id: 6,
                title:"Quality Control Technician",
                description:"Provide support for product quality control and laboratory analysis."

            }

        ]

    


    return (
       
            <div className='w-full flex h-[800px] pt-28'>
                <div className='w-1/2 m-10'>
                    <p className='uppercase text-6xl font-medium'>Jobs in our plants</p>
                    <p className=' text-2xl font-medium '>A wide range of possibilities awaits you at our vegetable processing plants.

                    </p>
                    <img src={person1} alt="" className='rounded-full mt-28 h-[420px]' />

                </div>
                <div className='w-1/2 m-10 overflow-y-scroll '>
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
                                            <p className='mt-1 uppercase font-thin'>see open options</p>
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

export default Jobs3