import { StackScreenProps } from '@react-navigation/stack';

import { NavigationProps as ShipDetailsProps } from 'screens/ShipDetails';

export type ShipNavigatorParamList = {
  ShipsScreen: undefined;
  ShipDetails: ShipDetailsProps;
};

export type ShipScreenProps = StackScreenProps<
  ShipNavigatorParamList,
  'ShipsScreen'
>;

export type ShipsScreenNavigationProps = ShipScreenProps['navigation'];
export type ShipsScreenRouteProps = ShipScreenProps['route'];

export type ShipDetailsScreenProps = StackScreenProps<
  ShipNavigatorParamList,
  'ShipDetails'
>;

export type ShipDetailsNavigationProps = ShipDetailsScreenProps['navigation'];

export type ShipDetailsRouteProps = ShipDetailsScreenProps['route'];
