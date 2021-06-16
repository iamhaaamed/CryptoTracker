import {
  GET_CRYPTO_CURRENCIES,
  ADD_CRYPTO_CURRENCY_ITEM,
  REMOVE_CRYPTO_CURRENCY_ITEM,
} from '../actions/cryptoCurrencyActions';

const initialState = {
  cryptoCurrencies: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CRYPTO_CURRENCY_ITEM:
      return {
        ...state,
        cryptoCurrencies: [...state.cryptoCurrencies, action.payload],
      };

    case REMOVE_CRYPTO_CURRENCY_ITEM:
      return {
        ...state,
        cryptoCurrencies: state.cryptoCurrencies.filter(
          cryptoCurrency => cryptoCurrency.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default moviesReducer;
