import React from 'react'
// import arrow from '../assets/arrow3.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Jobs6() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg-[#1b3d38] w-full overflow-hidden pb-20 px-5 text-white'>
            <div className='py-5'>
                <div className='flex justify-between  font-medium px-5'>
                    <div>
                        <h1 className='text-6xl uppercase'>Learn and grow</h1>
                    </div>

                </div>
            </div>

            <div className='pt-40 w-full flex'>
                <div className='w-1/3 text-xl '>Focus on developing skills by serving as a catalyst for both individual and collective growth.</div>



                <Carousel responsive={responsive} className="w-screen flex  overflow-x-scroll p-4">
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                ROOTED IN OUR COMMUNITIES
                            </h3>
                            <p class="text-gray-600 text-20">
                                We are committed to supporting the social and economic vitality of our communities: volunteering, sponsorship of events, donations to local organizations.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">


                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56 uppercase">
                                Focused on workplace safety
                            </h3>
                            <p class="text-gray-600 text-20">


                                Teams committed to a safe work environment and achieving ‘zero accidents.’
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">



                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                GFSI Certification
                            </h3>
                            <p class="text-gray-600 text-20"> Our factories meet the most stringent food safety standards.</p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">



                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">

                                Compliant and high quality
                            </h3>
                            <p class="text-gray-600 text-20">
                                We process vegetables that meet CFIA, USDA, and FDA standards.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">

                   

                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                Environment Management System

                            </h3>
                            <p class="text-gray-600 text-20 ">
                                An environmental management system (EMS) implemented at all our plants.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">

                        

                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                Waste Reduction

                            </h3>
                            <p class="text-gray-600 text-20">
                                Programs to recycle organic industrial waste at our sites.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">

                   
                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                Recyclable packaging

                            </h3>
                            <p class="text-gray-600 text-20">
                                Continuous improvement of the environmental performance of our packaging.
                            </p>
                        </div>
                    </div>
                    <div class="max-w-[360px] rounded-lg border border-gray-300 shadow-md p-6 bg-white h-[450px] flex-col justify-between">

                        

                        <div>
                            <h3 class="text-2xl font-semibold text-gray-800 mt-56">
                                Monitoring of consumption
                            </h3>
                            <p class="text-gray-600 text-20">

                                Continuous reporting on water, energy, and gas consumption.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}

export default Jobs6