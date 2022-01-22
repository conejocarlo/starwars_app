import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from 'screens/Home';
import PersonDetails from 'screens/PersonDetails';
import locales from 'locales';

import { HomeNavigatorParamList } from './types';

const Stack = createStackNavigator<HomeNavigatorParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: locales.Home.title }}
      />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
