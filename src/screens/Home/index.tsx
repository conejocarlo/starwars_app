import React from 'react';
import { View } from 'react-native';

import Test from 'components/Test';

import styles from './styles';
import usePeople from './hooks/usePeople';

const Home = () => {
  const { people } = usePeople();
  console.log(people);

  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
};

export default Home;
