import React, { useState } from 'react'


function FAQ() {
    const [openItemId, setOpenItemId] = useState(false);

    const toggleDropdown = () => {
        if (openItemId) {
            setOpenItemId(false);
        } else {
            setOpenItemId(true);
        }
    };
    return (
        <div className='p-4'>
            <h1 className='text-8xl pt-20 pb-10 font-[600]  custom-slide-in'>FAQ</h1>
            <hr className='border-[#1b3d38] '></hr>
            <div className='w-full flex pt-20' >
                <div className='w-1/3 '>
                    <h1 className='text-6xl font-mono'>OUR BRANDS</h1>
                </div>
                <div className='w-1/2 '>
                    <div onClick={() => toggleDropdown()}>
                        <hr className='border-[#1b3d38] mt-12'></hr>
                        <p className={`text-2xl font-medium uppercase mt-14`}> Do you offer discount coupons? </p>
                        {openItemId && (
                            <div className='mt-10'>
                                <p className='font-medium text-xl'>Yes! For Arctic Gardens and Del Monte products. You can find them on online coupon platforms or in stores.</p>

                            </div>
                        )}
                    </div><div onClick={() => toggleDropdown()}>
                        <hr className='border-[#1b3d38] mt-12'></hr>
                        <p className={`text-2xl font-medium uppercase mt-14`}> Do you offer discount coupons? </p>
                        {openItemId && (
                            <div className='mt-10'>
                                <p className='font-medium text-xl'>Yes! For Arctic Gardens and Del Monte products. You can find them on online coupon platforms or in stores.</p>

                            </div>
                        )}
                          <hr className='border-[#1b3d38] mt-12'></hr>
                    </div>
                </div>

            </div>


            <div className='w-full flex pt-32 ' >
                <div className='w-1/3 '>
                    <h1 className='text-6xl font-mono'>OUR BRANDS</h1>
                </div>
                <div className='w-1/2 '>
                    <div onClick={() => toggleDropdown()}>
                        <hr className='border-[#1b3d38] mt-12'></hr>
                        <p className={`text-2xl font-medium uppercase mt-14`}> Do you offer discount coupons? </p>
                        {openItemId && (
                            <div className='mt-10'>
                                <p className='font-medium text-xl'>Yes! For Arctic Gardens and Del Monte products. You can find them on online coupon platforms or in stores.</p>

                            </div>
                        )}
                    </div><div onClick={() => toggleDropdown()}>
                        <hr className='border-[#1b3d38] mt-12'></hr>
                        <p className={`text-2xl font-medium uppercase mt-14`}> Do you offer discount coupons? </p>
                        {openItemId && (
                            <div className='mt-10'>
                                <p className='font-medium text-xl'>Yes! For Arctic Gardens and Del Monte products. You can find them on online coupon platforms or in stores.</p>

                            </div>
                        )}
                        <hr className='border-[#1b3d38] mt-12 mb-32'></hr>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FAQ