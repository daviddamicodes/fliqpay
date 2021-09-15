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
    iban: '',
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PAYOUT:
            const {youSend, recipientGets, transferFee, convertedAmount, guaranteedRate, fromCurrency, toCurrency} = payload
            // return {...state, youSend: payload.youSend, recipientGets: payload.recipientGets, transferFee: payload.transferFee}
            return {...state, youSend, recipientGets, transferFee, convertedAmount, guaranteedRate, fromCurrency, toCurrency}
        case ActionTypes.SET_DETAILS:
            return {...state, email: payload.email, fullName: payload.fullName, iban: payload.iban}
        default:
            return state
    }
}