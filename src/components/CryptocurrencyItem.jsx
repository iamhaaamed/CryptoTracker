import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Spacing, Colors} from '@/styles';

import {CryptocurrencyLogo} from '@/components';

export default function CryptocurrencyItem({
  id,
  symbol,
  name,
  market_data,
  onPressRemove,
}) {
  const percentageChangeLast24Hours =
    market_data.percent_change_usd_last_24_hours.toFixed(2);
  const getPercentageChangeColor = () => {
    if (percentageChangeLast24Hours > 0) {
      return Colors.SUCCESS;
    }

    if (percentageChangeLast24Hours < 0) {
      return Colors.ERROR;
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.LIGHT_GRAY,
        paddingVertical: Spacing.SMALL,
      }}>
      <CryptocurrencyLogo symbol={symbol} />
      <View style={{flex: 1, marginLeft: Spacing.SMALLER}}>
        <Text style={{fontWeight: 'bold'}}>{symbol}</Text>
        <Text>{name}</Text>
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>
          ${market_data.price_usd.toFixed(2)}
        </Text>
        {percentageChangeLast24Hours ? (
          <Text
            style={{alignSelf: 'flex-end', color: getPercentageChangeColor()}}>
            {percentageChangeLast24Hours}%
          </Text>
        ) : null}
      </View>
      <View style={{flexDirection: 'row', marginLeft: Spacing.SMALL}}>
        <View style={{marginLeft: Spacing.SMALLEST}} />
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Confirm Remove',
              'Are you sure to remove?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'Remove',
                  onPress: onPressRemove,
                  style: 'destructive',
                },
              ],
              {cancelable: false},
            )
          }>
          <MaterialIcon
            name="close"
            size={Spacing.LARGER}
            color={Colors.ERROR}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
