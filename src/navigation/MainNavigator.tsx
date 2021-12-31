import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'screens/Home';

import Routes from './routes';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.Home} component={Home} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
