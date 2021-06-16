import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddCryptoScreen, HomeScreen} from '@/screens';

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
