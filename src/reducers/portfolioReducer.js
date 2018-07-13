import { REQUEST_PORTFOLIOS, REQUEST_PORTFOLIO_BY_ID, RECEIVE_PORTFOLIO, FAILURE_PORTFOLIO } from '../actions/portfolioActions';

let initialState = {
    loading: false,
    portfolio: [],
    error: ''
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PORTFOLIOS:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_PORTFOLIO_BY_ID:
            return {
                ...state,
                loading: true,
            }
        case RECEIVE_PORTFOLIO:
            return {
                ...state,
                portfolio: action.portfolio,
                loading: false
            }
        case FAILURE_PORTFOLIO:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default portfolioReducer;