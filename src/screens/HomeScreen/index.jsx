import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

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

  useEffect(() => {
    setTimeout(() => {
      cryptoCurrencies?.map(({symbol}) => {
        dispatch(updateCryptoCurrency(symbol));
      });
    }, 10000);
  }, [dispatch, cryptoCurrencies]);

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
