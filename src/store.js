import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import cryptoCurrenciesReducer from './reducers/cryptoCurrencyReducer';

const rootReducer = combineReducers({cryptoCurrenciesReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
