import React, { useState } from 'react'
import person1 from '../assets/person3.png'
import arrow from '../assets/arrow3.png'



function Jobs2() {
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

    const data = [
        {
            id: 1,
            title: "Quality Assurance",
            description: "Ensure our products and practices are of the requisite quality.",
            arrow: "See open positions"
        },
        {
            id: 2,
            title: "Information Technology",
            description: "Support our systems and information processing.",
            arrow: "See open positions"
        },
        {
            id: 3,
            title: "Sales and Marketing",
            description: "Be attentive to the expectations of our customers and of consumers.",
            arrow: "See open positions"
        },
        {
            id: 4,
            title: "Supply Chain and Logistics",
            description: "Supply and deliver goods.",
            arrow: "See open positions"
        },
        {
            id: 5,
            title: "Finance and Accounting",
            description: "Keep the numbers and finances at your fingertips.",
            arrow: "See open positions"
        },
        {
            id: 6,
            title: "Human Resources",
            description: "Help our employees grow with us!",
            arrow: "See open positions"
        },
        {
            id: 7,
            title: "Production and Operation",
            description: "Ensure the proper functioning of our production equipment and carry out the processing of food products.",
            arrow: "See open positions"
        },
        {
            id: 8,
            title: "Health and Safety",
            description: "Ensure compliance with good health and safety practices for our teams and sites.",
            arrow: "See open positions"
        },
        {
            id: 9,
            title: "Innovation and Development",
            description: "Improve the capacity and quality of our production.",
            arrow: "See open positions"
        },
        {
            id: 10,
            title: "Agriculture",
            description: "Plan and supervise the cultivation of our vegetables.",
            arrow: "See open positions"
        }
    ];

    return (
        <div className='w-full flex h-[800px] pt-20'>
            <div className='w-1/2 m-10'>
                <p className='uppercase text-6xl font-medium'>Our departments</p>
                <p className='text-2xl font-medium'>Join our dynamic teams and be part of a growing company.</p>
                <img src={person1} alt="Person" className='rounded-full mt-28 h-[420px]' />
            </div>
            <div className='w-1/2 m-10 overflow-y-scroll'>
                <ul>
                    {data.map((d) => (
                        <li key={d.id} className="mb-6">
                            <div onClick={() => toggleDropdown(d.id)}>
                                <hr className='border-[#1b3d38] mt-10'></hr>
                                <p className={`text-2xl font-medium uppercase mt-14`}>
                                    {d.title} </p>
                                {openItemId === d.id && (


                                    <div className='mt-10'>
                                        <p className='font-medium text-xl'>{d.description}</p>
                                        <div className='flex mt-4'>
                                            <img src={arrow} alt="Arrow" className='rounded-full h-10 mr-5' />
                                            <p className='mt-1 uppercase font-thin'>{d.arrow}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
                <hr className='border-[#1b3d38] mt-10'></hr>
            </div>
        </div>
    );
}

export default Jobs2;
