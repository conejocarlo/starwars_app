import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import peopleIcon from '../assets/icons/peopleIcon.svg';
import HomeNavigator from './HomeNavigator';
import ShipNavigator from './ShipNavigator';
import { assets } from '../../react-native.config';
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
                source={require('../assets/icons/peopleIcon.png')}
                resizeMode="contain"
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
                source={require('../assets/icons/shipsIcon.png')}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
