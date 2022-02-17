
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <ul class="px-4 flex flex-row justify-between items-center bg-gray-200 h-16 pt-1.5">
                    <div>
                        <p>Logo</p>
                    </div>

                    <div>
                        <Link className='px-4' to="/">Home</Link>
                        <Link className='px-4' to="/about">About</Link>
                        <Link className='px-4' to="/careers">Careers</Link>
                        <Link className='px-4' to="/services">Services</Link>
                        <Link className='px-4' to="/contactus">Contact Us</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Header