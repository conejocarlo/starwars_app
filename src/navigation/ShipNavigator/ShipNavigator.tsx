import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShipsHome from 'screens/Ship';

import { ShipNavigatorParamList } from './types';

const Stack = createStackNavigator<ShipNavigatorParamList>();

const ShipNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'ShipScreen'}>
      <Stack.Screen name="ShipScreen" component={ShipsHome} />
    </Stack.Navigator>
  );
};

export default ShipNavigator;
