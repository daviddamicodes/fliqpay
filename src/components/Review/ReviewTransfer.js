import React, { useContext } from 'react';
import { DetailsContext } from '../DetailsContext';

const ReviewTransfer = ({state}) => {

    // const [state] = useContext(DetailsContext);

    console.log(state)

    return (
        <div class="bg-gray-50 h-screen flex items-center justify-center">
            <div class="bg-white w-4/12 rounded-lg px-6 py-8">
                <h4 class="font-semibold text-md mb-4 pb-2 border-b-2 border-gray-200 text-purple-900">Review details of your transfer</h4>
                <div class="py-3">
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">You send</h4>
                        <h4 class="font-semibold text-md text-gray-700 text-right leading-none">{state.youSend} USD</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Total fees (included)</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">3.69 USD</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Amount we’ll convert</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">996.31 USD</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Guaranteed rate</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">1.10289</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Johnny gets</h4>
                        <h4 class="font-semibold text-md text-gray-700 text-right leading-none">1,248.63 EUR</h4>
                    </div>
                </div>
                <div class="py-8 border-t-2 border-gray-200">
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Name</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.fullName}</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Email address</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.email}</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">IBAN / Account number</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">DE898919013902102</h4>
                    </div>
                </div>
                <button class="w-full font-medium text-xs py-2.5 px-6 bg-green-500 text-white flex-grow rounded-md">Continue</button>
            </div>
        </div>
    )
}

export default ReviewTransfer
