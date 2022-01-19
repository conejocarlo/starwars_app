import React from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { ShipDetailsRouteProps } from 'navigation/ShipNavigator';
import useShipDetails from './hooks/useShipDetails';
import locales from 'locales';

export interface NavigationProps {
  url: string;
}

const ShipDetails = () => {
  const { url } = useRoute<ShipDetailsRouteProps>().params;
  const {
    shipDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = useShipDetails(url);

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
          <Text style={styles.titles}>{`${locales.ShipDetails.name}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.name}</Text>
          <Text style={styles.titles}>{`${locales.ShipDetails.model}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.model}</Text>
          <Text
            style={
              styles.titles
            }>{`${locales.ShipDetails.manufacturer}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.manufacturer}</Text>
          <Text style={styles.titles}>{`${locales.ShipDetails.cost}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.cost}</Text>
          <Text
            style={styles.titles}>{`${locales.ShipDetails.passengers}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.passengers}</Text>
          <Text style={styles.titles}>{`${locales.ShipDetails.crew}:`}</Text>
          <Text style={styles.subtitles}>{shipDetails?.crew}</Text>
        </View>
      )}
    </View>
  );
};

export default ShipDetails;
