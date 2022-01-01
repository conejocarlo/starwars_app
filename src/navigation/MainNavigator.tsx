import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
