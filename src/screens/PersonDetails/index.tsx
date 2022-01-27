import React, { useLayoutEffect } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  PersonDetailsNavigationProps,
  PersonDetailsRouteProps,
} from 'navigation/HomeNavigator';

import locales from 'locales';
import styles from './styles';
import usePeopleDetails from './hooks/usePersonDetails';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { url } = useRoute<PersonDetailsRouteProps>().params;
  const navigation = useNavigation<PersonDetailsNavigationProps>();

  const {
    personDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = usePeopleDetails(url);

  // esto es lo que quiero lograr en el onItemPress del Home Screen
  useLayoutEffect(() => {
    navigation.setOptions({ title: personDetails?.name });
  }, [navigation, personDetails?.name]);

  return (
    <View style={styles.container}>
      {!!error && (
        <View style={styles.scrollContainer}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={[styles.container, styles.loadingContainer]}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.scrollContainer}>
          <Text style={styles.titles}>{`${locales.PeopleDetails.name}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.name}</Text>
          <Text
            style={styles.titles}>{`${locales.PeopleDetails.height}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.height}</Text>
          <Text style={styles.titles}>{`${locales.PeopleDetails.mass}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.mass}</Text>
          <Text
            style={styles.titles}>{`${locales.PeopleDetails.hairColor}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.hairColor}</Text>
          <Text
            style={styles.titles}>{`${locales.PeopleDetails.eyeColor}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.eyeColor}</Text>
          <Text
            style={styles.titles}>{`${locales.PeopleDetails.birthYear}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.birthYear}</Text>
          <Text
            style={styles.titles}>{`${locales.PeopleDetails.gender}:`}</Text>
          <Text style={styles.subtitles}>{personDetails?.gender}</Text>
        </View>
      )}
    </View>
  );
};

export default PersonDetails;
