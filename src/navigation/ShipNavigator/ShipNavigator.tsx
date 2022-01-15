import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShipsHome from 'screens/Ship';
import locales from 'locales';

import { ShipNavigatorParamList } from './types';

const Stack = createStackNavigator<ShipNavigatorParamList>();

const ShipNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Ships'}>
      <Stack.Screen
        name="Ships"
        component={ShipsHome}
        options={{ title: locales.ships.title }}
      />
    </Stack.Navigator>
  );
};

export default ShipNavigator;
