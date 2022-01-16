import React from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PersonDetailsRouteProps } from 'navigation/HomeNavigator';

import locales from 'locales';
import styles from './styles';
import usePeopleDetails from './hooks/usePersonDetails';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const {
    personDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = usePeopleDetails(url);

  return (
    <View style={styles.container}>
      {!!error && <Button title="Try Again" onPress={refetch} />}
      {isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>{`${locales.PeopleDetails.name}: ${personDetails?.name}`}</Text>
          <Text>{`${locales.PeopleDetails.height}: ${personDetails?.height}`}</Text>
          <Text>{`${locales.PeopleDetails.gender}: ${personDetails?.gender}`}</Text>
        </View>
      )}
    </View>
  );
};

export default PersonDetails;
