import React, { useState } from 'react'

const RecipientPage = () => {

    const [state, setState] = useState({
        
    })

    const handleInput = e => {
        setState({
            
        })
    }

    return (
        <div class="bg-gray-50 h-screen flex items-center justify-center">
            <div class="bg-white w-4/12 rounded-lg px-6 py-8">
                <h4 class="font-semibold text-md mb-1 text-purple-900">Your Recipient</h4>
                <h4 class="text-xs mb-4 text-purple-700 text-opacity-70">Who are you sending money to?</h4>
                <div class="flex flex-col mb-4">
                    <label htmlFor="you-send" class="pointer-events-none text-xs text-gray-500 mb-1">Their email (optional)</label>
                    <input name="email" type="email" onChange={handleInput} type="text" required class="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autocomplete="off" placeholder="" />
                </div>
                <div class="flex flex-col mb-4">
                    <label htmlFor="you-send" class="pointer-events-none text-xs text-gray-500 mb-1">Full name of the account holder</label>
                    <input name="email" type="email" onChange={handleInput} type="text" required class="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autocomplete="off" placeholder="" />
                </div>
                <h4 class="font-semibold text-sm mb-1 text-purple-900">Bank details</h4>
                <button class="w-full font-medium text-xs py-2.5 px-6 bg-purple-700 text-white flex-grow rounded-md">Continue</button>
            </div>
        </div>
    )
}

export default RecipientPage
