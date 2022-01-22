import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  FilmDetailsNavigationProps,
  FilmDetailsRouteProps,
} from 'navigation/FilmNavigator';
import useFilmDetails from './hooks/useFilmDetails';
import styles from './styles';
import locales from 'locales';

export interface NavigationProps {
  url: string;
}

const FilmDetails = () => {
  const { url } = useRoute<FilmDetailsRouteProps>().params;
  const navigation = useNavigation<FilmDetailsNavigationProps>();

  const {
    filmDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = useFilmDetails(url);

  useLayoutEffect(() => {
    navigation.setOptions({ title: filmDetails?.title });
  }, [navigation, filmDetails?.title]);

  return (
    <View style={styles.container}>
      {!!error && (
        <View style={styles.scrollContainer}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.titles}>{`${locales.FilmDetails.title}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.title}</Text>
          <Text
            style={styles.titles}>{`${locales.FilmDetails.episodeId}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.episodeId}</Text>
          <Text
            style={styles.titles}>{`${locales.FilmDetails.director}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.director}</Text>
          <Text
            style={styles.titles}>{`${locales.FilmDetails.releaseDate}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.releaseDate}</Text>
          <Text
            style={
              styles.titles
            }>{`${locales.FilmDetails.openingCrawl}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.openingCrawl}</Text>
        </ScrollView>
      )}
    </View>
  );
};

export default FilmDetails;
