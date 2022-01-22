import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShipsHome from 'screens/Ship';
import ShipDetails from 'screens/ShipDetails';
import locales from 'locales';

import { ShipNavigatorParamList } from './types';

const Stack = createStackNavigator<ShipNavigatorParamList>();

const ShipNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'ShipsScreen'}>
      <Stack.Screen
        name="ShipsScreen"
        component={ShipsHome}
        options={{ title: locales.Ships.title }}
      />
      <Stack.Screen name="ShipDetails" component={ShipDetails} />
    </Stack.Navigator>
  );
};

export default ShipNavigator;
