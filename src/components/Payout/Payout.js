import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import countryOptions from './countryData';
// import DropdownCountriesSelection from './Dropdown';
// import { DetailsContext } from '../DetailsContext';
import { setPayout } from '../../redux/actions/detailsActions';

const Payout = () => {

    const [input, setInput] = useState({
        youSend: '',
        recipientGets: '',
        transferFee: '',
        convertedAmount: '',
        guaranteedRate: '',
        disabled: true,
        fromCurrency: '',
        toCurrency: '',
        currenciesKeys: [],
        currenciesKeys2: [],
        conversionRate: '1',
        exchangeRates: [],
    })

    const dispatch = useDispatch()

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    }

    const getRatesData = async () => {
        const url = `https://api.exchangerate.host/latest`
        // const url = `https://api.exchangerate.host/latest?base=${input.fromCurrency}`
        const response = await fetch(url);
        const responseData = await response.json();
        const currData = responseData.rates;
        setInput({...input, 
            currenciesKeys: Object.keys(currData), 
            exchangeRates:  Object.values(currData),
            // fromCurrency: responseData.base,
            fromCurrency: Object.keys(currData)[0], 
            // toCurrency: Object.keys(currData)[(Math.floor(Math.random() * Object.keys(currData).length))]
            toCurrency: Object.keys(currData)[15]
        })
    }


    useEffect(() => {
        getRatesData()
    }, [])

    const getExchangeRates = async () => {
        const url = (`https://api.exchangerate.host/latest?base=${input.fromCurrency}`);
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData)
        const newRates = responseData.rates;
        setInput({...input,
            currenciesKeys2: Object.keys(newRates),
            exchangeRates:  Object.values(newRates),
        })
    }
    
    // useEffect(() => {
    //     getExchangeRates();
    //     // console.log(input.fromCurrency)
    //     // console.log(input.toCurrency)
    //     const index = input.currenciesKeys.findIndex(element => element === (input.toCurrency))
    //     setInput({...input, conversionRate: input.exchangeRates[index]})
    //     console.log(input.exchangeRates[index])
    // }, [input.fromCurrency, input.toCurrency])
    
    
    const handleSelect = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    }

    // const handleRateChange = () => {
    //     getExchangeRates();
    //     // console.log(input.fromCurrency)
    //     // console.log(input.toCurrency)
    //     const index = input.currenciesKeys.findIndex(element => element === (input.toCurrency))
    //     setInput({...input, conversionRate: input.exchangeRates[index]})
    //     console.log(input.exchangeRates[index])
    // }

    const handleRates = () => {
        const valNum = input.youSend.length === 0 ? 1 : parseInt(input.youSend)
        const fee = (valNum * 0.00369).toFixed(2);
        const atConvert = (valNum - fee).toFixed(2);
        const amtWrate = atConvert * parseInt(input.conversionRate);
        console.log(amtWrate)
        console.log(input.conversionRate)
        const grHour = 1.14989
        const totalAmount = (amtWrate * grHour).toFixed(2);
        if (input.youSend !== "") {
            setInput({
                ...input,
                transferFee: fee,
                convertedAmount: atConvert,
                guaranteedRate: grHour,
                recipientGets: totalAmount,
                disabled: false
            })
        }
        // if (input.youSend !== "") {setInput(...input, input.disabled = false)}
    }
    
    console.log(input)
    
    const handleDispatch = () => {
        dispatch(setPayout(input))
    }


    return (
        <div className="bg-gray-50 h-screen flex items-center justify-center">
            {/* <div className="bg-gray-200 w-4/12 rounded-lg px-6 py-8"> */}
            <div className="bg-white w-4/12 rounded-lg px-6 py-8">
                <h4 className="font-semibold text-md mb-1 text-purple-900">One-time payout</h4>
                <h4 className="text-xs mb-4 text-purple-700 text-opacity-70">Send money internationally</h4>
                <div className="flex relative">
                    <input name="youSend" type="number" value={input.youSend} onChange={handleInput} type="text" required className="h-14 w-9/12 pt-5 px-3.5 text-lg rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                    <label htmlFor="youSend" className="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-500">You Send</label>
                    <select name="fromCurrency" value={input.fromCurrency} id="" onChange={handleSelect} className="flex-1 p-2 bg-gray-200 text-purple-900 font-medium rounded-br-sm rounded-tr-sm">
                        {
                            input.currenciesKeys.map(currency => 
                                <option value={currency} key={currency} class="">{currency}</option>
                            )
                        }
                    </select>
                </div>
                <div className="px-2 py-2 relative">
                    <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200"></div>
                    <div className="flex items-center mb-2">
                        <div className="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">-</div>
                        <h4 className="font-medium text-xs text-gray-400 w-3/12 z-10">{input.transferFee} {input.fromCurrency}</h4>
                        <span className="font-medium text-xs text-gray-400">Transfer fee</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">=</div>
                        <h4 className="font-medium text-xs text-gray-400 w-3/12 z-10">{input.convertedAmount} {input.toCurrency}</h4>
                        <span className="font-medium text-xs text-gray-400">Amount we'll convert</span>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-gray-200 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">x</div>
                        <h4 className="font-medium text-xs text-purple-900 w-3/12 z-10">{input.guaranteedRate}</h4>
                        <span className="font-medium text-xs text-purple-900">Guaranteed rate (1hr)</span>
                    </div>
                </div>
                <div className="flex">
                    <input name="recipientGets" value={input.recipientGets} type="text" required className="h-14 w-9/12 pt-5 px-3.5 text-lg rounded-sm focus:outline-none border-gray-200 border-2 text-purple-900" autoComplete="off" placeholder="" />
                    <label htmlFor="recipientGets" className="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-500">Recipient gets</label>
                    <select name="toCurrency" value={input.toCurrency} id="" onChange={handleSelect} className="flex-1 p-2 bg-gray-200 text-purple-900 font-medium rounded-br-sm rounded-tr-sm">
                        {
                            input.currenciesKeys.map(currency => 
                                <option value={currency} key={currency}>{currency}</option>
                            )
                        }
                    </select>
                </div>
                <div className="flex mt-6">
                    <button className="font-medium text-xs py-2.5 px-6 bg-white text-purple-700 border border-purple-700 mr-4 flex-grow rounded-md" onClick={handleRates}>Compare Rates</button>
                    <Link to="/recipient" className=" flex items-center justify-center flex-grow"><button className={`font-medium text-xs py-2.5 px-6 w-full text-white rounded-md ${input.disabled ? "bg-purple-400" : "bg-purple-700"}`} onClick={handleDispatch} disabled={input.disabled}>Continue</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Payout
