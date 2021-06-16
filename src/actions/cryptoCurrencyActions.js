import axios from 'axios';

// Define action types
export const ADD_CRYPTO_CURRENCY_ITEM = 'ADD_CRYPTO_CURRENCY_ITEM';
export const REMOVE_CRYPTO_CURRENCY_ITEM = 'REMOVE_CRYPTO_CURRENCY_ITEM';

import {Config} from 'react-native-config';

export const addCryptoCurrency = symbol => {
  try {
    return async dispatch => {
      const res = await axios.get(
        `${Config.BASE_URL}/assets/${symbol}/metrics`,
      );

      if (res.data) {
        dispatch({
          type: ADD_CRYPTO_CURRENCY_ITEM,
          payload: res?.data?.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log('error', error);
    // Add custom logic to handle errors
  }
};

export const removeCryptoCurrency = symbol => dispatch => {
  dispatch({
    type: REMOVE_CRYPTO_CURRENCY_ITEM,
    payload: symbol,
  });
};
