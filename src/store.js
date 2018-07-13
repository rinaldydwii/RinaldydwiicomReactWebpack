import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import blogReducer from './reducers/blogReducer';
import portfolioReducer from './reducers/portfolioReducer';

const loggerMiddleware = createLogger();
const reducers = combineReducers({blogReducer, portfolioReducer});

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};