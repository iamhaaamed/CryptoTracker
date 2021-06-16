import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {Colors, Spacing} from '../../styles';

import {
  getCryptoCurrencies,
  addCryptoCurrency,
  removeCryptoCurrency,
} from '../../actions/cryptoCurrencyActions';
import Spinner from 'react-native-loading-spinner-overlay';

export default function AddCryptoScreen({navigation}) {
  const [newCurrency, setNewCurrency] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const {cryptoCurrencies} = useSelector(
    state => state.cryptoCurrenciesReducer,
  );

  const dispatch = useDispatch();

  const handleAddCryptoCurrency = async () => {
    setIsLoading(true);
    await dispatch(addCryptoCurrency(newCurrency));
    setIsLoading(false);
    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        padding: Spacing.BASE,
      }}>
      <Spinner visible={isLoading} textContent={'Loading...'} />
      <Text
        style={{
          marginVertical: Spacing.BASE,
          fontWeight: 'bold',
          fontSize: Spacing.LARGE,
        }}>
        Add a CrptoCurremcy
      </Text>
      <TextInput
        style={{
          backgroundColor: Colors.WHITE,
          borderWidth: 1,
          borderColor: Colors.WARNING,
          padding: Spacing.SMALLER,
          borderRadius: Spacing.SMALLEST,
        }}
        value={newCurrency}
        onChangeText={e => setNewCurrency(e)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.WARNING,
          alignSelf: 'flex-end',
          paddingVertical: Spacing.BASE,
          paddingHorizontal: Spacing.LARGEST,
          marginTop: Spacing.BASE,
          borderRadius: Spacing.SMALLEST,
        }}
        onPress={() => {
          handleAddCryptoCurrency();
          navigation.navigate('Home');
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
