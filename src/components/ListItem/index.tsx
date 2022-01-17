import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  id: string;
  onPress: (id: string) => void;
}

const ListItem = ({ title, id, onPress }: Props) => {
  const handleOnPress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Text style={styles.titles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
