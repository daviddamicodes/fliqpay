import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import fliqpayLogo from '../images/fliqpay-logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const state = useSelector((state) => state.details)
    return (
        <nav className="bg-white flex justify-center items-center w-screen h-20">
            <div className={`flex justify-between items-center lg:w-3/5 w-full h-full px-6`}>
                <div className="">
                    <Link to="/" className="font-bold text-2xl flex items-center">
                        <img src={fliqpayLogo} alt="Fliqpay Logo" className="h-9 mr-1.5" />
                        <h1 className="leading-none">pay</h1>
                    </Link>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 items-center px-4 w-8/12">
                    {/* <div className="w-11/12 h-0.5 bg-gray-200 mb-3 relative">
                        <div className={`w-${state.payoutProgressBar} h-0.5 bg-gradient-to-r from-purple-700 to-gray-500 mb-3 absolute top-0 left-0 transition-all duration-500 ease-in-out`} />
                        <div className={`h-2 w-2 bg-gray-500 rounded-lg absolute -top-0.5 left-${state.payoutProgressDot} transition-all duration-500 ease-in-out`} />
                    </div> */}
                    <div className="col-span-full h-0.5 bg-gray-200 relative self-center">
                        <div className={`w-${state.payoutProgressBar} h-0.5 bg-gradient-to-r from-light-blue via-light-blue to-gray-500 mb-3 absolute top-0 left-0 transition-all duration-500 ease-in-out`} />
                        <div className={`h-2 w-2 bg-gray-500 rounded-lg absolute -top-0.5 left-${state.payoutProgressDot} transition-all duration-500 ease-in-out`} />
                    </div>
                    <ul className="col-span-full grid grid-cols-3 row-start-2 text-gray-300">
                        <li className={`mr-5 sm:mr-10 md:mr-20 font-medium text-sm -ml-7 ${state.navTextColor1}`}>
                            <NavLink exact to="/">
                                Amount
                            </NavLink>
                        </li>
                        <li className={`mr-5 sm:mr-10 md:mr-20 font-medium text-sm -ml-6 ${state.navTextColor2}`}>
                            <NavLink exact to="/recipient">
                                Recipient
                            </NavLink>
                        </li>
                        <li className={`mr-5 sm:mr-10 md:mr-20 font-medium text-sm -ml-3 ${state.navTextColor3}`}>
                            <NavLink exact to="/review">
                                Review
                            </NavLink>
                        </li>
                        <li className={`font-medium text-sm col-start-4 -mr-4 ${state.navTextColor4}`}>
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
