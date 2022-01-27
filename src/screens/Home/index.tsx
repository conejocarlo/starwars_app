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

import { HomeScreenNavigationProps } from 'navigation/HomeNavigator';
import ListItem from 'components/ListItem';

import styles from './styles';
import usePeople from './hooks/usePeople';
import { People } from './types';

const Home = () => {
  const { people, isLoading, error, fetchData: refetch } = usePeople();
  const navigation = useNavigation<HomeScreenNavigationProps>();

  // hay alguna manera que pueda pasar el name en esta funcion y hacer que el titulo del screen se muestre por aqui?
  // en otro ejemplo vi navigation.push en vez de navigation.navigate, cuando se usa push?
  const onItemPress = (url: string) => {
    navigation.navigate('PersonDetails', { url });
  };

  // como sabias que para hacer render de una lista habia que crear otro componente ListItem?
  // no se puede hacer la misma lista sin crear un custom component?
  const renderItem = ({ item }: ListRenderItemInfo<People>) => (
    <ListItem
      key={item.url}
      title={item.name.toLowerCase()}
      id={item.url}
      onPress={onItemPress}
    />
  );

  // keyExtractor es siempre una funcion? Se puede usar una libreria que genere un random key?
  // idealmente la data deberia de venir con un id o key, correcto?
  const keyExtractor = (person: People) => person.url;

  return (
    <View style={styles.container}>
      {!!error && (
        <View style={styles.container}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={people}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

export default Home;
