import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetails } from '../../redux/actions/detailsActions';

const RecipientPage = () => {

    const [input, setInput] = useState({
        email: '',
        fullName: '',
        ibanAcct: '',
        swiftBic: '',
        disabled: true,
    })

    const [toggle, setToggle] = useState(true)

    const dispatch = useDispatch()

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    }


    const handleIbanInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value, 
            // [name]: (value).trim, 
            disabled: false
        })
        // if (value.length && input.fullName.length && input.email.length > 0) {
        // }
    }
    
    const handleDispatch = () => {
        dispatch(setDetails(input))
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div className="bg-gray-50 h-screen flex items-center justify-center pt-20">
            <div className="bg-white w-470 rounded-lg px-6 py-8">
                <div className="font-semibold text-md mb-4 pb-2 border-b-2 border-gray-200 text-purple-900">
                    <h4 className="font-semibold text-md mb-1 text-purple-900">Your Recipient</h4>
                    <h4 className="text-xs text-purple-700 text-opacity-70">Who are you sending money to?</h4>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="pointer-events-none text-xs text-gray-500 mb-1">Their email (optional)</label>
                    <input name="email" type="email" onChange={handleInput} required className="h-9 w-5/5 px-3.5 text-xs rounded-lg focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="fullName" className="pointer-events-none text-xs text-gray-500 mb-1">Full name of the account holder</label>
                    <input name="fullName" type="text" onChange={handleInput} required className="h-9 w-5/5 px-3.5 text-xs rounded-lg focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                </div>
                <h4 className="font-semibold text-sm mb-4 text-purple-900">Bank details</h4>
                <div className="flex flex-col mb-4">
                    <div className="flex mb-6">
                        <button toggle={toggle} class={toggle ? "text-xs font-semibold text-purple-900 bg-white px-3 py-3 border-b-2 border-purple-900 transition-all duration-200" : "text-xs font-normal text-gray-700 bg-white px-3 py-3 transition-all duration-200"} onClick={handleToggle}>Inside Europe</button>
                        <button toggle={toggle} class={toggle ? "text-xs font-normal text-gray-700 bg-white px-3 py-3 transition-all duration-200" : "text-xs font-semibold text-purple-900 bg-white px-3 py-3 border-b-2 border-purple-900 transition-all duration-200"} onClick={handleToggle}>Outside Europe</button>
                    </div>
                    <label htmlFor="ibanAcct" className="pointer-events-none text-xs text-gray-500 mb-1">IBAN / Account Number</label>
                    <input name="ibanAcct" type="text" onChange={handleIbanInput} required className="h-9 w-5/5 px-3.5 text-xs rounded-lg focus:outline-none border-gray-200 border-2 text-purple-900 mb-3" autoComplete="off" placeholder="01234567891" />
                        {
                            toggle ? (
                                <></>
                            ) : (
                                <div className="flex flex-col">
                                    <label htmlFor="swiftBic" className="pointer-events-none text-xs text-gray-500 mb-1">SWIFT / BIC code</label>
                                    <input name="swiftBic" type="text" onChange={handleIbanInput} required className="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900 mb-3" autoComplete="off" placeholder="BUKBGB22" />
                                </div>
                            )
                            
                        }
                </div>
                <Link to="/review"><button className={`w-full font-medium text-xs py-3 px-6 ${input.disabled ? "bg-purple-400" : "bg-purple-700"} text-white flex-grow rounded-md mt-2`} onClick={handleDispatch} disabled={input.disabled}>Continue</button></Link>
            </div>
        </div>
    )
}

export default RecipientPage
