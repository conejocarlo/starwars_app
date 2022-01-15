import React from 'react';
import { View, ListRenderItemInfo } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ShipsScreenNavigationProps } from 'navigation/ShipNavigator/types';
import styles from './styles';
import useShips from './hooks/useShips';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from 'components/ListItem';
import { Ships } from './types';

const ShipsHome = () => {
  const { ships } = useShips();
  const navigation = useNavigation<ShipsScreenNavigationProps>();

  const onItemPress = () => {
    console.log('pressed');
  };

  const renderItem = ({ item }: ListRenderItemInfo<Ships>) => (
    <ListItem
      key={item.url}
      title={item.name}
      id={item.url}
      onPress={onItemPress}
    />
  );

  const keyExtractor = (ship: Ships) => ship.url;

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default ShipsHome;
