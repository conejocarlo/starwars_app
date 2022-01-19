import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FilmsHome from 'screens/Films';
import locales from 'locales';

import { FilmNavigatorParamList } from './types';
import FilmDetails from 'screens/FilmDetails';

const Stack = createStackNavigator<FilmNavigatorParamList>();

const FilmNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'FilmScreen'}>
      <Stack.Screen
        name="FilmScreen"
        component={FilmsHome}
        options={{ title: locales.Films.title }}
      />
      <Stack.Screen name="FilmDetails" component={FilmDetails} />
    </Stack.Navigator>
  );
};

export default FilmNavigator;
