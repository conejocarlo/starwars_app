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

  console.log(shipDetails);

  return (
    <View>
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
        <View>
          <Text>{`${locales.ShipDetails.name}: ${shipDetails?.name}`}</Text>
          <Text>{`${locales.ShipDetails.model}: ${shipDetails?.model}`}</Text>
          <Text>{`${locales.ShipDetails.manufacturer}: ${shipDetails?.manufacturer}`}</Text>
        </View>
      )}
    </View>
  );
};

export default ShipDetails;
