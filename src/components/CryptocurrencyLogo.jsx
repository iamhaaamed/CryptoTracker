import React from 'react';
import {View, Image} from 'react-native';
import {Colors, Spacing} from '../styles';

import logos from '../data/cryptocurrencies-logos.json';

export default function CryptocurrencyLogo({symbol}) {
  const logo = logos[symbol.toLowerCase()];

  if (logo) {
    return logo ? (
      <Image
        source={{uri: logo}}
        style={{width: Spacing.EXTRA_LARGE, height: Spacing.EXTRA_LARGE}}
      />
    ) : (
      <View
        style={[
          {
            backgroundColor: Colors.LIGHT_GRAY,
            width: Spacing.EXTRA_LARGE,
            height: Spacing.EXTRA_LARGE,
          },
        ]}
      />
    );
  }
}
