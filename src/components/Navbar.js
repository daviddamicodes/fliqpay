import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import fliqpayLogo from '../images/fliqpay-logo.png'

const Navbar = () => {
    return (
        <nav class="bg-white flex justify-center items-center w-screen h-20 fixed z-20">
            <div class="flex justify-between items-center w-3/5 h-full">
                <div class="">
                    <Link to="/" class="font-bold text-2xl flex items-center">
                        <img src={fliqpayLogo} alt="Fliqpay Logo" class="h-9 mr-1.5" />
                        <h1 class="">pay</h1>
                    </Link>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-11/12 h-0.5 bg-gray-200 mb-3 relative">
                        <div class="w-4/12 h-0.5 bg-gradient-to-r from-purple-700 to-gray-500 mb-3 absolute top-0 left-0" />
                        <div class="h-2 w-2 bg-gray-500 rounded-lg absolute -top-0.5 left-1/3" />
                    </div>
                    <ul class="flex">
                        <li class="mr-20 font-medium text-sm">Amount</li>
                        <li class="mr-20 font-medium text-sm">Recipient</li>
                        <li class="mr-20 font-medium text-sm">Review</li>
                        <li class="font-medium text-sm">Pay</li>
                    </ul>
                </div>
                <VscChromeClose class="text-2xl text-gray-400" />
            </div>
        </nav>
    )
}

export default Navbar
