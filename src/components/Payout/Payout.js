import React, { useState } from 'react';
// import countryOptions from './countryData';
import DropdownCountriesSelection from './Dropdown';

const Payout = () => {

    const [state, setState] = useState({
        youSend: '',
        recipientGets: ''
    })

    console.log(state.youSend)

    return (
        <div class="bg-gray-50 h-screen flex items-center justify-center">
            {/* <div class="bg-gray-200 w-4/12 rounded-lg px-6 py-8"> */}
            <div class="bg-white w-4/12 rounded-lg px-6 py-8">
                <h4 class="font-medium text-md mb-1 text-purple-900">One-time payout</h4>
                <h4 class="text-xs mb-4 text-purple-400">Send money internationally</h4>
                <div class="flex">
                    <input name="you-send" value={state.youSend} type="number" required class="h-14 w-9/12 py-1.5 px-3.5 text-sm rounded-sm focus:outline-none border-gray-200 border-2 mb-2" placeholder="You send" />
                    <label htmlFor="">You Send</label>
                    {/* <DropdownCountriesSelection /> */}
                </div>
                <div class="flex">
                    <input name="recipient-gets" value={state.recipientGets} type="text" required class="h-14 w-9/12 py-1.5 px-3.5 text-sm rounded-sm focus:outline-none border-gray-200 border-2" placeholder="Recipient gets" />
                    {/* <DropdownCountriesSelection /> */}
                </div>
                <div class="flex mt-6">
                    <button class="font-medium text-xs py-2.5 px-6 bg-white text-purple-700 border border-purple-700 mr-4 flex-grow rounded-md">Compare Rates</button>
                    <button class="font-medium text-xs py-2.5 px-6 bg-purple-700 text-white flex-grow rounded-md">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Payout
