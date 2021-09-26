import React from 'react'
import { MdClose } from 'react-icons/md'
import { RiCheckLine } from 'react-icons/ri'

const Modal = () => {
    return (
        <div className="bg-black bg-opacity-50 w-full absolute top-0 h-full flex items-center justify-center">
        <div className="w-72 bg-white text-center p-4 rounded-lg relative">
            <div className="py-4 px-8 border-gray-1 border-2 appearance-none mb-4">
                <h4 className="text-1xs text-gray-400">Total Amount Paid</h4>
                <h1 className="text-purple-900 text-2xl font-medium">1000.00<span className="text-xs font-normal ml-1">NGN</span></h1>
            </div>
            <div className="py-8 px-8 border-gray-1 border-2 appearance-none">
                <div className="h-14 w-14 bg-green-300 bg-opacity-20 mx-auto mb-8 flex items-center justify-center">
                    <RiCheckLine className="text-green-700 text-4xl" />
                </div>
                <h3 className="text-purple-900 font-medium">Transfer Successful</h3>
                <p className="text-gray-400 text-1xs font-normal">Congratulations. You've successfully completed your payment.</p>
            </div>
            <div className="bg-white h-8 w-8 rounded-full border-gray-1 border-2 absolute -top-3 -right-3 cursor-pointer flex items-center justify-center">   
                <MdClose className="text-gray-400" />
            </div>
        </div>
        </div>
    )
}

export default Modal;
