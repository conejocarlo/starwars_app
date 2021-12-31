import React from 'react';
import { View } from 'react-native';

import Test from 'components/Test';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
};

export default Home;
