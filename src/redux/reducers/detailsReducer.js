import { ActionTypes } from "../constants/action-types"

const initialState = {
    youSend: '',
    recipientGets: '',
    fromCurrency: '',
    toCurrency: '',
    transferFee: '',
    convertedAmount: '',
    guaranteedRate: '',
    email: '',
    fullName: '',
    ibanAcct: '',
    swiftBic: '',
    payoutProgressBar: '0',
    payoutProgressDot: '0',
    navTextColor1: 'text-gray-500',
    navTextColor2: 'text-gray-300',
    navTextColor3: 'text-gray-300',
    navTextColor4: 'text-gray-300',
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PAYOUT:
            const {youSend, recipientGets, transferFee, convertedAmount, guaranteedRate, fromCurrency, toCurrency} = payload
            return {...state, youSend, recipientGets, transferFee, 
                    convertedAmount, guaranteedRate, fromCurrency, toCurrency, 
                    payoutProgressBar: '1/3', payoutProgressDot: '1/3', 
                    navTextColor1: 'text-light-blue', navTextColor2: 'text-gray-500',
                }
        case ActionTypes.SET_DETAILS:
            const {email, fullName, swiftBic, ibanAcct} = payload
            return {...state, email, fullName, swiftBic, ibanAcct, payoutProgressBar: '2/3', payoutProgressDot: '2/3', navTextColor2: 'text-light-blue', navTextColor3: 'text-gray-500'}
        case ActionTypes.PAYOUT:
            return {...state, payoutProgressBar: 'full', payoutProgressDot: 'full', navTextColor3: 'text-light-blue', navTextColor4: 'text-light-blue'}
        default:
            return state
    }
}