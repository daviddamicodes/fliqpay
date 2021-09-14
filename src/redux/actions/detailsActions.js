import { ActionTypes } from "../constants/action-types"

export const setPayout = (payout) => {
    return {
        type: ActionTypes.SET_PAYOUT,
        payload: payout
    }
}

export const setDetails = (details) => {
    return {
        type: ActionTypes.SET_DETAILS,
        payload: details,
    }
}