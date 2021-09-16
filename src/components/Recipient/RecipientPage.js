import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetails } from '../../redux/actions/detailsActions';
import { render } from '@testing-library/react';

const RecipientPage = ({}) => {

    const [input, setInput] = useState({
        email: '',
        fullName: '',
        iban: '',
        disabled: true,
    })

    const dispatch = useDispatch()

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    }


    // const handleValidation = () => {
    //     if (input.iban.length > 0) {
    //         setInput({...input, disabled: false})
    //     }
    // }
    
    const handleDispatch = () => {
        dispatch(setDetails(input))
    }


    return (
        <div className="bg-gray-50 h-screen flex items-center justify-center">
            <div className="bg-white w-4/12 rounded-lg px-6 py-8">
                <div className="font-semibold text-md mb-4 pb-2 border-b-2 border-gray-200 text-purple-900">
                    <h4 className="font-semibold text-md mb-1 text-purple-900">Your Recipient</h4>
                    <h4 className="text-xs text-purple-700 text-opacity-70">Who are you sending money to?</h4>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="pointer-events-none text-xs text-gray-500 mb-1">Their email (optional)</label>
                    <input name="email" type="email" onChange={handleInput} type="text" required className="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="fullName" className="pointer-events-none text-xs text-gray-500 mb-1">Full name of the account holder</label>
                    <input name="fullName" type="text" onChange={handleInput} type="text" required className="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                </div>
                <h4 className="font-semibold text-sm mb-4 text-purple-900">Bank details</h4>
                <div className="flex flex-col mb-4">
                    <label htmlFor="iban" className="pointer-events-none text-xs text-gray-500 mb-1">IBAN</label>
                    <input name="iban" type="text" onChange={handleInput} type="text" required className="h-9 w-5/5 px-3.5 text-xs rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                </div>
                {/* <Link to="/review"><button className={input.disabled ? "w-full font-medium text-xs py-2.5 px-6 bg-purple-400 text-white flex-grow rounded-md mt-2" : "w-full font-medium text-xs py-2.5 px-6 bg-purple-700 text-white flex-grow rounded-md mt-2"} onClick={handleDispatch} disabled={input.disabled}>Continue</button></Link> */}
                <Link to="/review"><button className={`w-full font-medium text-xs py-2.5 px-6 ${input.disabled ? "bg-purple-400" : "bg-purple-700"} text-white flex-grow rounded-md mt-2`} onClick={handleDispatch} disabled={input.disabled}>Continue</button></Link>
            </div>
        </div>
    )
}

export default RecipientPage
