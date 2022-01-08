import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';

import styles from './styles';
import usePersonDetails from './hooks/usePersonDetails';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const { PersonDet } = usePersonDetails();
  console.log(url + PersonDet);
  return <View style={styles.container} />;
};

export default PersonDetails;
