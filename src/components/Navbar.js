import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import fliqpayLogo from '../images/fliqpay-logo.png'

const Navbar = () => {
    return (
        <nav className="bg-white flex justify-center items-center w-screen h-20 fixed z-20">
            <div className="flex justify-between items-center w-3/5 h-full">
                <div className="">
                    <Link to="/" className="font-bold text-2xl flex items-center">
                        <img src={fliqpayLogo} alt="Fliqpay Logo" className="h-9 mr-1.5" />
                        <h1 className="">pay</h1>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-11/12 h-0.5 bg-gray-200 mb-3 relative">
                        <div className="w-4/12 h-0.5 bg-gradient-to-r from-purple-700 to-gray-500 mb-3 absolute top-0 left-0" />
                        <div className="h-2 w-2 bg-gray-500 rounded-lg absolute -top-0.5 left-1/3" />
                    </div>
                    <ul className="flex">
                        <li className="mr-20 font-medium text-sm">
                            <NavLink exact to="/">
                                Amount
                            </NavLink>
                        </li>
                        <li className="mr-20 font-medium text-sm">
                            <NavLink exact to="/recipient">
                                Recipient
                            </NavLink>
                        </li>
                        <li className="mr-20 font-medium text-sm">
                            <NavLink exact to="/review">
                                Review
                            </NavLink>
                        </li>
                        <li className="font-medium text-sm">
                            <NavLink exact to="/review">
                                Pay
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <VscChromeClose className="text-2xl text-gray-400" />
            </div>
        </nav>
    )
}

export default Navbar
