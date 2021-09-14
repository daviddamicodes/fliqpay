import React from 'react';
import { useSelector } from 'react-redux';

const ReviewTransfer = () => {

    const state = useSelector((state) => state.details);

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
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.transferFee} USD</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Amount we’ll convert</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.convertedAmount} USD</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Guaranteed rate</h4>
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.guaranteedRate}</h4>
                    </div>
                    <div class="flex justify-between items-end mb-4">
                        <h4 class="font-medium text-xs text-gray-400 leading-none">Johnny gets</h4>
                        <h4 class="font-semibold text-md text-gray-700 text-right leading-none">{state.recipientGets} EUR</h4>
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
                        <h4 class="font-medium text-xs text-gray-700 text-right leading-none">{state.iban}</h4>
                    </div>
                </div>
                <button class="w-full font-medium text-xs py-2.5 px-6 bg-green-500 text-white flex-grow rounded-md">Continue</button>
            </div>
        </div>
    )
}

export default ReviewTransfer
