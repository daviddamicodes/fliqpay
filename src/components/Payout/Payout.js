import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import countryOptions from './countryData';
import DropdownCountriesSelection from './Dropdown';
import { DetailsContext } from '../DetailsContext';

const Payout = () => {

    // const [state, setState] = useContext(DetailsContext)
    const [state, setState] = useState({
        youSend: '',
        recipientGets: ''
    })
    

    const handleInput = e => {
        const {name, value} = e.target
        console.log(name, value)
        // setState({
        //     [name]: value
        // })
    }

    // console.log(state)

    return (
        <div class="bg-gray-50 h-screen flex items-center justify-center">
            {/* <div class="bg-gray-200 w-4/12 rounded-lg px-6 py-8"> */}
            <div class="bg-white w-4/12 rounded-lg px-6 py-8">
                <h4 class="font-semibold text-md mb-1 text-purple-900">One-time payout</h4>
                <h4 class="text-xs mb-4 text-purple-700 text-opacity-70">Send money internationally</h4>
                <div class="flex relative">
                    <input name="youSend" value={state.youSend} onChange={handleInput} type="text" required class="h-14 w-9/12 pt-5 px-3.5 text-lg rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autocomplete="off" placeholder="" />
                    <label htmlFor="youSend" class="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-500">You Send</label>
                    {/* <DropdownCountriesSelection /> */}
                    <select name="" id="" class="flex-1 p-2">
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">NGN</option>
                    </select>
                </div>
                <div class="px-2 py-2 relative">
                    <div class="absolute top-0 left-4 h-full w-0.5 bg-gray-200"></div>
                    <div class="flex items-center mb-2">
                        <div class="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">-</div>
                        <h4 class="font-medium text-xs text-gray-400 w-3/12 z-10">3.69 USD</h4>
                        <span class="font-medium text-xs text-gray-400">Transfer fee</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">=</div>
                        <h4 class="font-medium text-xs text-gray-400 w-3/12 z-10">996.31 EUR</h4>
                        <span class="font-medium text-xs text-gray-400">Amount we'll convert</span>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">x</div>
                        <h4 class="font-medium text-xs text-purple-900 w-3/12 z-10">1.4989</h4>
                        <span class="font-medium text-xs text-purple-900">Guaranteed rate (1hr)</span>
                    </div>
                </div>
                <div class="flex">
                    <input name="recipientGets" value={state.recipientGets} onChange={handleInput} type="text" required class="h-14 w-9/12 pt-5 px-3.5 text-lg rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autocomplete="off" placeholder="" />
                    <label htmlFor="recipientGets" class="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-500">Recipient gets</label>
                    <select name="" id="" class="flex-1 p-2 bg-gray-200 text-purple-900 rounded-br-sm rounded-tr-sm">
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">NGN</option>
                    </select>
                </div>
                <div class="flex mt-6">
                    <button class="font-medium text-xs py-2.5 px-6 bg-white text-purple-700 border border-purple-700 mr-4 flex-grow rounded-md">Compare Rates</button>
                    {/* <button to="/recipient" class="font-medium text-xs py-2.5 px-6 bg-purple-700 text-white flex-grow rounded-md">Continue</button> */}
                    <Link class="font-medium text-xs py-2.5 px-6 bg-purple-700 text-white flex items-center justify-center flex-grow rounded-md" to="/recipient">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Payout
