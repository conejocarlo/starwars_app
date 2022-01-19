import React from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FilmDetailsRouteProps } from 'navigation/FilmNavigator';
import useFilmDetails from './hooks/useFilmDetails';
import styles from './styles';
import locales from 'locales';

export interface NavigationProps {
  url: string;
}

const FilmDetails = () => {
  const { url } = useRoute<FilmDetailsRouteProps>().params;
  const {
    filmDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = useFilmDetails(url);

  return (
    <View style={styles.container}>
      {!!error && (
        <View style={styles.container}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={styles.horizontal}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titles}>{`${locales.FilmDetails.title}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.title}</Text>
          <Text
            style={styles.titles}>{`${locales.FilmDetails.episode_id}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.episode_id}</Text>
          <Text
            style={styles.titles}>{`${locales.FilmDetails.director}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.director}</Text>
          <Text
            style={
              styles.titles
            }>{`${locales.FilmDetails.release_date}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.release_date}</Text>
          <Text
            style={
              styles.titles
            }>{`${locales.FilmDetails.opening_crawl}:`}</Text>
          <Text style={styles.subtitles}>{filmDetails?.opening_crawl}</Text>
        </View>
      )}
    </View>
  );
};

export default FilmDetails;
