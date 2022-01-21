import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FilmScreenNavigationProps } from 'navigation/FilmNavigator';
import ListItem from 'components/ListItem';

import styles from './styles';
import useFilms from './hooks/useFilms';
import { Films } from './types';

const FilmsHome = () => {
  const { films, isLoading, error, fetchData: refetch } = useFilms();
  const navigation = useNavigation<FilmScreenNavigationProps>();

  const onItemPress = (url: string) => {
    navigation.navigate('FilmDetails', { url });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Films>) => (
    <ListItem
      key={item.url}
      title={item.title.toLowerCase()}
      id={item.url}
      onPress={onItemPress}
    />
  );

  const keyExtractor = (film: Films) => film.url;

  return (
    <View style={styles.containter}>
      {!!error && (
        <View style={styles.containter}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={[styles.containter, styles.horizontal]}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={films}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

export default FilmsHome;
