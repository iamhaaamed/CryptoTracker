import React, {useCallback, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {
  removeCryptoCurrency,
  updateCryptoCurrency,
} from '@/actions/cryptoCurrencyActions';
import {Colors, Spacing} from '@/styles';
import {CryptocurrencyItem} from '@/components';

export default function HomeScreen({navigation}) {
  const {cryptoCurrencies} = useSelector(
    state => state.cryptoCurrenciesReducer,
  );

  const dispatch = useDispatch();

  const updateCryptoCurrencyCallback = useCallback(() => {
    cryptoCurrencies?.map(({symbol}) => {
      dispatch(updateCryptoCurrency(symbol));
    });
  }, [dispatch, cryptoCurrencies]);

  useEffect(() => {
    let timer = setTimeout(() => {
      updateCryptoCurrencyCallback();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateCryptoCurrencyCallback]);

  return (
    <View
      style={{flex: 1, backgroundColor: Colors.WHITE, padding: Spacing.BASE}}>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => navigation.navigate('AddCrypto')}>
        <Text style={{color: Colors.PRIMARY}}>+ Add a Crpytocurrency</Text>
      </TouchableOpacity>
      <FlatList
        data={cryptoCurrencies}
        renderItem={({item}) => (
          <CryptocurrencyItem
            {...item}
            onPressRemove={() => dispatch(removeCryptoCurrency({id: item.id}))}
          />
        )}
      />
    </View>
  );
}
