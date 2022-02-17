import React, { Component } from 'react'
import '../Home/index.css'

export class Home extends Component {
    render() {
        const imgage1 = 'src/Images/security-guard.jpeg'
        return (
            <div className='flex flex-col justify-start'>
                {/* Header */}
                <div>
                    <img src='http://unsplash.it/1200/600?random&blur&gravity=center' alt='' />
                </div>

                {/* Second ribbon */}
                <div className='bg-gray-600 p-10'>
                    <div className='h-30'>
                        <h1 className='text-2xl font-bold text-white'>Explore our services</h1>
                        <p className='pt-3 text-white'>We offer business solutions and security services for a complex world.</p>
                        <button className='bg-blue-500 hover:bg-gray-500 hover:text-black py-3 px-6 shadow mt-4 text-white font-bold'>Request a quote</button>
                    </div>

                    <div className='h-30 mt-8'>
                        <h1 className='text-2xl font-bold text-white'>Now Hiring</h1>
                        <p className='pt-3 text-white'>We offer business solutions and security services for a complex world.</p>
                        <button className='bg-blue-500 hover:bg-gray-500 hover:text-black py-3 px-6 shadow mt-4 text-white font-bold'>Apply Now</button>
                    </div>
                </div>

                {/* Our Serices */}
                <div className='p-10'>
                    <h1 className='text-2xl font-bold text-gray-500'>Products and Services</h1>
                    <h1 className='text-2xl font-bold text-gray-800'>Our Expertise</h1>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-medium'>Security Services</h2>

                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image2 mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-medium'>Cash Services</h2>

                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image3 mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-medium'>Cash Services</h2>

                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>

                {/* Why Star Security */}
                <div className='p-10 bg-whySection'>
                    <h1 className='text-2xl font-bold text-gray-500'>Why Star Security</h1>
                    <h1 className='text-2xl font-bold text-gray-800'>We have highly qualified Security staff in the private security industy.</h1>

                    <div className='h-2 bg-blue-500 w-28 my-6 mt-8'></div>
                    <p className='text-xl text-gray-800'>Our <span className='font-bold'>122,000 dedicated and highly trained professionals</span> serve clients across 45 countries.</p>

                    <div className='h-2 bg-blue-500 w-28 my-6'></div>
                    <p className='text-xl text-gray-800'><span className='font-bold'>We are a partner of choice</span> for private companies, governments, humanitarian organizations and multinationals globally.</p>

                    <div className='h-2 bg-blue-500 w-28 my-6'></div>
                    <p className='text-xl text-gray-800'><span className='font-bold'>We are a partner of choice</span> for private companies, governments, humanitarian organizations and multinationals globally.</p>
                </div>

                {/* Testimonials */}
                <div className='p-10'>
                    <h1 className='text-2xl font-bold text-gray-500'>Testimonials</h1>
                    <h1 className='text-2xl font-bold text-gray-800'>Here is what some of our clients have said about working with us.</h1>

                    {/* Company Quotation */}
                    <div className='my-2 border border-gray-500 h-72 flex flex-col justify-center items-center'>
                        <h1 className='text-center font-bold text-2xl py-6'>Logo</h1>
                        <p className='text-sm text-center px-6'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium aliquid sunt iure accusantium modi doloribus nihil fuga culpa magnam vero ipsam, commodi inventore laboriosam illum praesentium in ut suscipit."</p>

                        <div className='py-4'>
                            <p className='font-bold '>Global Product Officer</p>
                            <p className='italic text-center'>Red Cross</p>
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className='p-10 bg-gray-700 address-image'>
                    <h1 className='text-2xl font-bold text-white'>Our Address</h1>
                    <p className='py-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequuntur repellendus aliquid expedita tempora quo doloremque voluptates eum.</p>
                    <button className='bg-blue-500 hover:bg-gray-500 hover:text-black py-3 px-6 shadow mt-4 text-white font-bold'>Contact Us</button>
                </div>



            </div>

        )
    }
}

export default Home