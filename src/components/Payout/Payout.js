import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPayout } from '../../redux/actions/detailsActions';
import Select, {components} from 'react-select'
// import { numFormat } from '../NumberFormat';

const Payout = () => {

    const [input, setInput] = useState({
        youSend: '',
        recipientGets: '',
        transferFee: '',
        convertedAmount: '',
        guaranteedRate: '',
        payoutDisabled: true,
        fromCurrency: 'USD',
        toCurrency: 'EUR',
        fromCountryFlag: 'https://www.countryflags.io/eu/flat/32.png',
        toCountryFlag: 'https://www.countryflags.io/us/flat/32.png',
        currenciesKeys: [],
        // conversionRate: '1',
        exchangeRates: [],
        displayRates: false,
    })

    const [conversionRate, setConversionRate] = useState();

    const dispatch = useDispatch()

    const getRatesData = async () => {
        const url = `https://api.exchangerate.host/latest?base=${input.fromCurrency}`
        const response = await fetch(url);
        const responseData = await response.json();
        const currData = responseData.rates;
        console.log(currData)
        // const index = (input.currenciesKeys).findIndex(element => element === (input.toCurrency));
        setInput({...input, 
            currenciesKeys: Object.keys(currData), 
            exchangeRates:  Object.values(currData),
            // fromCurrency: input.fromCurrency, 
            // toCurrency: input.toCurrency,
            // conversionRate: input.exchangeRates[index]
        })
    }
    

    useEffect(() => {
        getRatesData();
        const index = (input.currenciesKeys).findIndex(element => element === (input.toCurrency));
        setConversionRate(input.exchangeRates[index])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input.fromCurrency, input.toCurrency])

    const handleInput = e => {
        const {name, value} = e.target;
        setInput({
            ...input, 
            [name]: value
        });
    }  
    
    const handleFromSelect = (e) => {
        const {value, flag} = e;
        setInput({
            ...input, 
            fromCurrency: value,
            fromCountryFlag: flag
        })
    }
    
    const handleToSelect = (e) => {
        const {value, flag} = e;
        setInput({
            ...input, 
            toCurrency: value,
            toCountryFlag: flag
        })
    }
       
    const options = input.currenciesKeys.map(currency => {
        const currencyLC = currency.toLowerCase().substring(0, 2);
        return { value: currency, label: currency, key: currency, flag: `https://www.countryflags.io/${currencyLC}/flat/64.png` }
    })

    const handleRates = () => {
        const valNum = input.youSend.length === 0 ? 1 : parseFloat(input.youSend)
        const fee = (valNum * 0.00369).toFixed(2);
        const atConvert = parseFloat((valNum - fee).toFixed(2));
        // const amtWrate = atConvert * parseFloat(input.conversionRate);
        const amtWrate = atConvert * parseFloat(conversionRate);
        console.log(atConvert)
        console.log(amtWrate)
        console.log(conversionRate)
        const grHour = 1.14989
        const totalAmount = (amtWrate * grHour).toFixed(2);
        if (input.youSend !== "") {
            setInput({
                ...input,
                transferFee: fee,
                convertedAmount: atConvert,
                guaranteedRate: grHour,
                recipientGets: totalAmount,
                payoutDisabled: false,
                displayRates: true,
            })
        }
    }
    
    console.log(input)
    
    const handleDispatch = () => {
        dispatch(setPayout(input))
    }

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid #f2f2f2',
          color: '#372271',
        //   padding: 20,
        }),
        control: () => ({
          // none of react-select's styles are passed to <Control />
          width: 100,
          display: 'flex',
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition,
            color: '#372271',
          };
        },
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: '#372271',
        }),
        indicatorSeparator: (provided, state) => ({
            display: 'none'
        }),
        container: (provided, state) => ({
            ...provided,
        }),
    }


    return (
        <div className="bg-gray-50 h-screen pt-14">
            <div className="bg-white w-470 rounded-lg px-6 py-8 mx-auto">
                <h4 className="font-semibold text-md mb-1 text-purple-900">One-time payout</h4>
                <h4 className="text-xs mb-4 text-purple-900 text-opacity-70">Send money internationally</h4>
                <div className="flex relative">
                    <input name="youSend" value={input.youSend} onChange={handleInput} type="text" required className="h-14 w-8/12 pt-5 px-3.5 text-lg rounded-lg focus:outline-none border-gray-1 border-2 text-purple-900 appearance-none" autoComplete="off" placeholder="" />
                    <label htmlFor="youSend" className="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-400">You Send</label>
                    <div className="flex flex-1 relative">
                        <Select 
                            name="fromCurrency"
                            options={options}
                            styles={customStyles}
                            onChange={handleFromSelect} 
                            placeholder=""
                            defaultValue={options.find(option => option.value === input.fromCurrency)}
                            // defaultValue={{value: "EUR", label: "EUR"}}
                            className="select-box flex flex-1 justify-end bg-gray-1 font-medium rounded-br-lg rounded-tr-lg -ml-2"
                        >
                        </Select>
                        <div className="flex align-center justify-center w-6 h-6 bg-blue-300 rounded-full absolute top-2/4 transform translate-x-2/4 -mt-3 overflow-hidden">
                            <img src={input.fromCountryFlag} alt={input.fromCurrency} className="object-cover max-w-none transform scale-150" />
                        </div>
                    </div>
                </div>
                <div className="px-2 py-2 relative">
                    {
                        input.displayRates ? (
                            <>
                                <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-1"></div>
                                <div className="flex items-center mb-2">
                                    <div className="bg-gray-1 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">-</div>
                                    <h4 className="font-semibold text-xs text-gray-400 w-3/12 z-10">{input.transferFee} {input.fromCurrency}</h4>
                                    <span className="font-medium text-xs text-gray-400">Transfer fee</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="bg-gray-1 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">=</div>
                                    <h4 className="font-medium text-xs text-gray-400 w-3/12 z-10">{input.convertedAmount} {input.toCurrency}</h4>
                                    <span className="font-medium text-xs text-gray-400">Amount we'll convert</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-gray-1 text-gray-400 text-xs h-5 w-5 rounded-full flex items-center justify-center mr-2 z-10">x</div>
                                    <h4 className="font-medium text-xs text-purple-900 w-3/12 z-10">{input.guaranteedRate}</h4>
                                    <span className="font-medium text-xs text-purple-900">Guaranteed rate (1hr)</span>
                                </div>
                            </>
                        ) : (
                            <div className="h-1"></div>
                        )
                    }
                </div>
                <div className="flex relative">
                    <input name="recipientGets" value={input.recipientGets} readOnly type="text" required className="h-14 w-8/12 pt-5 px-3.5 text-lg rounded-lg focus:outline-none border-gray-1 border-2 text-purple-900 appearance-none" autoComplete="off" placeholder="" />
                    <label htmlFor="recipientGets" className="absolute h-full w-9/12 px-3.5 pt-2 pointer-events-none text-xs text-gray-400">Recipient gets</label>
                    <div className="flex flex-1 relative">
                        <Select 
                            name="toCurrency"
                            options={options}
                            styles={customStyles}
                            onChange={handleToSelect} 
                            placeholder=""
                            className="select-box flex flex-1 justify-end bg-gray-1 font-medium rounded-br-lg rounded-tr-lg -ml-2"
                        >
                        </Select>
                        <div className="flex align-center justify-center w-6 h-6 bg-blue-300 rounded-full absolute top-2/4 transform translate-x-2/4 -mt-3 overflow-hidden">
                            <img src={input.toCountryFlag} alt={input.toCurrency} className="object-cover max-w-none transform scale-150" />
                        </div>
                    </div>
                    {/* <select name="toCurrency" value={input.toCurrency} id="" onChange={handleToSelect} className="flex-1 p-2 bg-gray-1 text-purple-900 font-medium rounded-br-lg rounded-tr-lg -ml-2">
                        {
                            input.currenciesKeys.map(currency => 
                                <option value={currency} key={currency}>
                                    {currency}
                                </option>
                            )
                        }
                    </select> */}
                </div>
                <div className="flex mt-6">
                    <button className="font-medium text-xs py-4 px-6 bg-white text-purple-700 border border-purple-700 mr-4 flex-grow rounded-md" onClick={handleRates}>Compare Rates</button>
                    <Link to="/recipient" className=" flex items-center justify-center flex-grow"><button className={`font-medium text-xs py-4 px-6 w-full text-white rounded-md ${input.payoutDisabled ? "bg-mid-blue opacity-50" : "bg-mid-blue"}`} onClick={handleDispatch} disabled={input.payoutDisabled}>Continue</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Payout
