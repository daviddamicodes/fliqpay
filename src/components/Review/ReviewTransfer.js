import React from 'react';
import { useSelector } from 'react-redux';

const ReviewTransfer = () => {

    const state = useSelector((state) => state.details);

    const paymentAlert = () => {
        alert("Payment Successful")
    }

    return (
        <div className="bg-gray-50 h-screen flex items-center justify-center pt-20">
            <div className="bg-white w-470 rounded-lg px-6 py-8">
                <h4 className="font-semibold text-md mb-4 pb-2 border-b-2 border-gray-200 text-purple-900">Review details of your transfer</h4>
                <div className="py-3">
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">You send</h4>
                        <h4 className="font-semibold text-md text-gray-700 text-right leading-none">{state.youSend} {state.fromCurrency}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Total fees (included)</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.transferFee} {state.fromCurrency}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Amount we’ll convert</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.convertedAmount} {state.fromCurrency}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Guaranteed rate</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.guaranteedRate}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Johnny gets</h4>
                        <h4 className="font-semibold text-md text-gray-700 text-right leading-none">{state.recipientGets} {state.toCurrency}</h4>
                    </div>
                </div>
                <div className="py-8 border-t-2 border-gray-200">
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Name</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.fullName}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">Email address</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.email}</h4>
                    </div>
                    <div className="flex justify-between items-end mb-4">
                        <h4 className="font-medium text-xs text-gray-400 leading-none">IBAN / Account number</h4>
                        <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.ibanAcct}</h4>
                    </div>
                    { 
                        state.swiftBic.length > 1 ? (
                            <div className="flex justify-between items-end mb-4">
                                <h4 className="font-medium text-xs text-gray-400 leading-none">SWIFT / BIC code</h4>
                                <h4 className="font-medium text-xs text-gray-700 text-right leading-none">{state.swiftBic}</h4>
                            </div>
                        ) : <></>
                    }
                </div>
                <button className="w-full font-medium text-xs py-2.5 px-6 bg-green-500 text-white flex-grow rounded-md" onClick={paymentAlert}>Continue</button>
            </div>
        </div>
    )
}

export default ReviewTransfer
