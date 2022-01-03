import React from 'react';
import {
  View,
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
  const { people, isLoading, isError } = usePeople();
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const onItemPress = (url: string) => {
    navigation.navigate('PersonDetails', { url });
  };

  const renderItem = ({ item }: ListRenderItemInfo<People>) => (
    <ListItem
      key={item.url}
      title={item.name}
      id={item.url}
      onPress={onItemPress}
    />
  );

  const keyExtractor = (person: People) => person.url;

  return (
    <View style={styles.container}>
      {isError && <Button title="Try Again" onPress={Home} />}
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
