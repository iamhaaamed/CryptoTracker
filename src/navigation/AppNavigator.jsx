import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddCryptoScreen} from '../screens';

const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'CryptoTracker Pro'}}
        />
        <Stack.Screen
          name="AddCrypto"
          component={AddCryptoScreen}
          options={{title: 'Add Crypto'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
