import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';

import styles from './styles';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  console.log(url);
  return <View style={styles.container} />;
};

export default PersonDetails;
