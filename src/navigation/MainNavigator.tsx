import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import ShipNavigator from './ShipNavigator';
import FilmNavigator from './FilmNavigator';
import styles from './styles';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="People"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                style={styles.icon}
                source={require('../assets/icons/people-icon.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ships"
        component={ShipNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ships-icon.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Films"
        component={FilmNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                style={styles.icon}
                source={require('../assets/icons/films-icon.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
