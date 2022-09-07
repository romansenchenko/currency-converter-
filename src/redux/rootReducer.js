
let initialState = {
    amount1: 1,
    amount2: 1,
    currency1: 'USD',
    currency2: 'RUB',
    rates: [],
    notLoaded: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AMOUNT_1':
            return {
                ...state,
                amount1: action.amount1
            }
        case 'SET_AMOUNT_2':
            return {
                ...state,
                amount2: action.amount2
            }
        case 'SET_CURRENCY_1':
            return {
                ...state,
                currency1: action.currency1
            }
        case 'SET_CURRENCY_2':
            return {
                ...state,
                currency2: action.currency2
            }
        case 'SET_RATES':
            return {
                ...state,
                rates: action.rates
            }
        case 'SET_NOT_LOADED':
            return {
                ...state,
                notLoaded: action.notLoaded
            }
        default:
            return state;
    }
}

export const actions = {
    setAmount1: (amount1) => ({ type: 'SET_AMOUNT_1', amount1 }),
    setAmount2: (amount2) => ({ type: 'SET_AMOUNT_2', amount2 }),
    setCurrency1: (currency1) => ({ type: 'SET_CURRENCY_1', currency1 }),
    setCurrency2: (currency2) => ({ type: 'SET_CURRENCY_2', currency2 }),
    setRates: (rates) => ({ type: 'SET_RATES', rates }),
    setNotLoaded: (notLoaded) => ({ type: 'SET_NOT_LOADED', notLoaded })
}

export default rootReducer;