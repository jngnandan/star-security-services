import React, { Component } from 'react'
import '../About/index.css'

export class About extends Component {
    render() {
        return (
            <div className='flex flex-col justify-start h-screen'>
                {/* Header Image */}
                <div>
                    <img className='w-screen' src='http://unsplash.it/1200/500?random&blur&gravity=center' alt='' />
                </div>

                {/* About Us */}
                <div className='p-10'>
                    <h1 className='text-4xl font-bold text-gray-800'>About Us</h1>
                    <p className='pt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, vero deserunt. Fugit assumenda necessitatibus iure eius repellendus suscipit ipsam, laboriosam ab nam odio quidem architecto perferendis modi perspiciatis est totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id architecto perspiciatis adipisci esse? Repellendus eius expedita, labore, quaerat dolorum sequi odit alias aut rerum eum impedit, autem error perspiciatis.</p>
                </div>

                {/* Company Logo */}
                <div className='px-10'>
                    <div className='my-2 h-68 bg-gray-200 flex flex-col justify-start py-4'>
                        <h1 className='text-center font-bold text-2xl py-8'>Logo</h1>
                        <h1 className='text-left px-6 text-2xl font-bold text-gray-800'>Our Mission</h1>

                        <p className='text-sm px-6 my-4'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium aliquid sunt iure accusantium modi doloribus nihil fuga culpa magnam vero ipsam, commodi inventore laboriosam illum praesentium in ut suscipit."</p>
                    </div>
                </div>

                {/* Our Business Model */}
                <div className='p-10'>
                    <h1 className='text-3xl font-bold text-gray-800'>Our Business Model</h1>
                    <p className='pt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, vero deserunt. Fugit assumenda necessitatibus iure eius repellendus suscipit ipsam, laboriosam ab nam odio quidem architecto perferendis modi perspiciatis est totam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium id architecto perspiciatis adipisci esse? Repellendus eius expedita, labore, quaerat dolorum sequi odit alias aut rerum eum impedit, autem error perspiciatis.</p>
                </div>

                {/* Security Services */}
                <div className='p-10'>
                    <h1 className='text-3xl font-bold text-gray-500'>Our Services</h1>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-bold'>Physical Security</h2>
                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-bold'>Cash Security</h2>
                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-bold'>Risk Management</h2>
                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-bold'>Virtual Guarding</h2>
                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='bg-image mt-5 p-4 flex flex-col justify-between'>
                        <h2 className='text-white text-2xl font-bold'>Crowd Management</h2>
                        <p className='text-white py-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    </div>
                </div>

                {/* Contact us */}
                <div className='p-10 bg-gray-200 h-300 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-bold text-gray-800 text-center'>Contact Us</h1>
                    <p className='w-100 py-4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                    <button className='text-left pl-4 border border-gray-500 hover:text-white hover:border-white py-3 w-32 text-start shadow mt-4 text-gray-700 font-bold'>Contact Us</button>
                </div>

                {/* Find Positions */}
                <div className='p-10 bg-black h-300 flex flex-col justify-center items-center'>

                    <img className='rounded-full mb-16 mt-4' src='http://unsplash.it/200/200?random&blur&gravity=center' alt='' />

                    <div>
                        <h1 className='text-2xl font-bold text-white text-left'>Teamwork unites us. Strength defines us.</h1>
                        <p className='w-100 py-4 text-left text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                        <p className='w-100 py-4 text-left text-white'>Find out what positions are available in your area.</p>

                        <button className='text-left pl-4 border border-white hover:text-gray-500 hover:border-gray-500 py-3 w-36 text-start shadow mt-4 text-white font-bold'>Find positions</button>

                    </div>
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

export default About