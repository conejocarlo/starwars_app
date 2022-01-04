import React from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import usePersonDetails from './hooks/usePersonDetails';
import styles from './styles';

export interface NavigationProps {
  url: string;
}

const PersonDetails = () => {
  const { personDetails, isLoading, isError } = usePersonDetails();

  return (
    <View style={styles.container}>
      {isError && <Button title="Try Again" onPress={PersonDetails} />}
      {isLoading ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
        </View>
      ) : (
        <Text>{personDetails}</Text>
      )}
    </View>
  );
};

export default PersonDetails;
