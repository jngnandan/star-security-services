import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className='flex flex-col h-screen'>
                <div className='p-10'>
                    {/* Services */}
                    <div className='xl:w-4/5'>
                        <h1 className='text-4xl font-bold text-gray-800'>Services</h1>
                        <p className='py-3 text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem explicabo soluta repudiandae architecto inventore accusantium modi sednerium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto! Quam eveniet iusto, explicabo dignissimos, voluptatibus optio laudantium quas magni iure dolore maxime</p>
                        <button className='bg-blue-500 hover:bg-black hover:text-white py-3 px-6 shadow mt-4 text-white font-bold mb-3'>Request a quote</button>
                    </div>

                    {/* Services */}
                    <div className='flex flex-wrap my-6'>
                        <div className='md:w-2/4 border border-gray-500 p-8 my-4 mt-0 mb-0'>
                            <h1 className='text-2xl font-bold text-gray-800'>Door Supervison</h1>

                            <div className='bg-image bg-blend-multiply bg-gray-500 my-4 flex flex-col justify-between'>

                            </div>
                            {/* <img className='py-4' src='http://unsplash.it/330/220?random&blur&gravity=center' alt='' /> */}
                            <p className='py-2 text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem explicabo soluta</p>
                            <button className='text-left pl-4 border border-gray-500 hover:text-black hover:border-black py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Learn more</button>
                        </div>

                        <div className=' md:w-2/4 border border-gray-500 p-8 my-4 mt-0 mb-0'>
                            <h1 className='text-2xl font-bold text-gray-800'>Event Security</h1>

                            <div className='bg-image2 bg-blend-multiply bg-gray-500 my-4 flex flex-col justify-between '>

                            </div>                            <p className='py-2 text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem explicabo soluta</p>
                            <button className='text-left pl-4 border border-gray-500 hover:text-black hover:border-black py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Learn more</button>
                        </div>

                        <div className='   md:w-2/4 border border-gray-500 p-8 my-4 mt-0 mb-0'>
                            <h1 className='text-2xl font-bold text-gray-800'>CCTV Survilance</h1>

                            <div className='bg-image3 bg-blend-multiply bg-gray-500 my-4 flex flex-col justify-between'>

                            </div>                            <p className='py-2 text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem explicabo soluta</p>
                            <button className='text-left pl-4 border border-gray-500 hover:text-black hover:border-black py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Learn more</button>
                        </div>

                        <div className='   md:w-2/4 border border-gray-500 p-8 my-4 mt-0 mb-0'>
                            <h1 className='text-2xl font-bold text-gray-800'>Carporate Security</h1>

                            <div className='bg-image4 bg-blend-multiply bg-gray-500 my-3 flex flex-col justify-between'>

                            </div>                            <p className='py-2 text-gray-800 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate autem explicabo soluta</p>
                            <button className='text-left pl-4 border border-gray-500 hover:text-black hover:border-black py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Learn more</button>
                        </div>


                    </div>
                </div>

                {/* Request a quote */}
                <div className='p-10 bg-whySection flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold text-gray-800 text-center'>Request a quote</h1>

                    <p className='text-xl text-gray-800 my-2 text-center'>Discover how our Cash Management solutions can support your daily operations, and protect your business.</p>
                    <p className='text-xl text-gray-800 my-2 text-center'>Call us now to find out more at <span className='font-bold'>1-855-GO-GARDA (464 2732)</span></p>
                    <button className='bg-blue-500 hover:bg-black hover:text-white py-3 px-6 shadow mt-4 text-white font-bold'>Request a quote</button>
                </div>

                <div className='p-10 bg-white flex flex-col justify-left items-left xl:w-4/5'>
                    <h1 className='text-3xl font-bold text-gray-800 text-left'>The Star Security difference</h1>

                    <p className='text-gray-800 my-2 text-left'>GardaWorld is the largest privately owned security services company in the world. We offer first-rate security solutions and professionals to protect your people, assets and reputation globally.

                        Our 122,000 highly trained, dedicated professionals serve clients in North America, Africa and the Middle East, including Fortune 500 companies and governments.
                        <br />

                        <ul className='list-disc pl-4 mt-3'>
                            <li>We transport more than $8 billion every day.</li>
                            <li>Our five guiding principles help our employees act ethically and honestly at all times: respect for the law, confidentiality, integrity, fairness and loyalty.</li>
                            <li>We are a true one-stop shop for security, and our wide range of services allows us to offer complete, customized solutions backed by world-class customer service.</li>
                        </ul>
                    </p>
                </div>

                {/* Contact us */}
                <div className='p-10 bg-gray-200 h-300 flex flex-col justify-start'>
                    <h1 className='text-3xl font-bold text-gray-800 text-start'>Careers</h1>
                    <p className='w-100 py-4 text-start text-sm xl:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis omnis excepturi nisi debitis molestias, fugiat explicabo! Enim quisquam voluptatibus dignissimos aspernatur dolore. Corporis, reprehenderit assumenda aperiam voluptate ut quibusdam.</p>
                    <button className='text-left pl-4 border border-gray-500 hover:text-black hover:border-black py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Discover</button>
                </div>

                {/* Footer */}
                <footer className='bg-gray-800 h-60 p-10'>
                    <h1 className='text-2xl font-bold text-gray-400 pl-3 mb-3'>Follow Us</h1>
                    <div className='flex flex-row justify-start items-center'>
                        <div className='m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </div>
                        <div className='m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </div>
                        <div className='m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </div>
                        <div className='m-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gray" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-row justify-start text-gray-500 py-8'>
                        <p className='w-60 text-center'>Terms & Conditions</p>
                        <p className='w-60 text-center'> About Us</p>
                        <p className='w-60 text-center'>About Us</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Services