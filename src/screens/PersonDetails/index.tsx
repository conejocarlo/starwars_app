import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';

import styles from './styles';
import usePeopleDetails from './hooks/usePersonDetails';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const { personDetails } = usePeopleDetails(url);
  console.log(personDetails);
  return (
    <View style={styles.container}>
      <Text>Name: {personDetails?.name}</Text>
      <Text>Height: {personDetails?.height}</Text>
      <Text>Gender: {personDetails?.gender}</Text>
    </View>
  );
};

export default PersonDetails;
