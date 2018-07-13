export const REQUEST_PORTFOLIOS = 'REQUEST_PORTFOLIOS';
export const REQUEST_PORTFOLIO_BY_ID = 'REQUEST_PORTFOLIO_BY_ID';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const FAILURE_PORTFOLIO = 'FAILURE_PORTFOLIO';

function requestPortfolios(total) {
    return {
        type: REQUEST_PORTFOLIOS,
        total
    }
}
function requestPortfolioById(id) {
    return {
        type: REQUEST_PORTFOLIO_BY_ID,
        id
    }
}
function receivePortfolio(portfolio) {
    return {
        type: RECEIVE_PORTFOLIO,
        portfolio
    }
}
function failurePortfolio(error) {
    return {
        type: FAILURE_PORTFOLIO,
        error
    }
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export function fetchPortfolios(total) {
    return dispatch => {
        dispatch(requestPortfolios(total));
        let url = `https://my-json-server.typicode.com/rinaldydwii/apirinaldydwiicom/portfolio?_limit=${total}`;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receivePortfolio(json)))
            .catch(error => dispatch(failurePortfolio(error)));
    }
}
export function fetchPortfolioById(id) {
    return dispatch => {
        dispatch(requestPortfolioById(id));
        let url = `https://my-json-server.typicode.com/rinaldydwii/apirinaldydwiicom/portfolio/${id}`;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receivePortfolio(json)))
            .catch(error => dispatch(failurePortfolio(error)));
    }
}