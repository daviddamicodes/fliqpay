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
    payoutDisabled: true,
    payoutProgress: {
        bar: 0,
        dot: 0
    }
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PAYOUT:
            const {youSend, recipientGets, transferFee, convertedAmount, guaranteedRate, fromCurrency, toCurrency, payoutDisabled} = payload
            // return {...state, youSend: payload.youSend, recipientGets: payload.recipientGets, transferFee: payload.transferFee}
            return {...state, youSend, recipientGets, transferFee, convertedAmount, guaranteedRate, fromCurrency, toCurrency, payoutDisabled}
        case ActionTypes.SET_DETAILS:
            const {email, fullName, swiftBic, ibanAcct} = payload
            return {...state, email, fullName, swiftBic, ibanAcct}
        default:
            return state
    }
}