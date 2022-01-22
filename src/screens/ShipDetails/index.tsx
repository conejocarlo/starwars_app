import React, { useLayoutEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import {
  ShipDetailsNavigationProps,
  ShipDetailsRouteProps,
} from 'navigation/ShipNavigator';
import useShipDetails from './hooks/useShipDetails';
import locales from 'locales';

export interface NavigationProps {
  url: string;
}

const ShipDetails = () => {
  const { url } = useRoute<ShipDetailsRouteProps>().params;
  const navigation = useNavigation<ShipDetailsNavigationProps>();

  const {
    shipDetails,
    isLoading,
    error,
    fetchData: refetch,
  } = useShipDetails(url);

  useLayoutEffect(() => {
    navigation.setOptions({ title: shipDetails?.name });
  });

  return (
    <View style={styles.container}>
      {!!error && (
        <View style={styles.scrollContainer}>
          <Text>{error.message}</Text>
          <Button title="Try Again" onPress={refetch} />
        </View>
      )}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView style={styles.scrollContainer}>
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
        </ScrollView>
      )}
    </View>
  );
};

export default ShipDetails;
