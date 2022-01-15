import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import ShipNavigator from './ShipNavigator/ShipNavigator';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Ships" component={ShipNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
