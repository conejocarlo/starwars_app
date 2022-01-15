import { StackScreenProps } from '@react-navigation/stack';

import { NavigationProps as ShipDetailsProps } from 'screens/ShipDetails';

export type ShipNavigatorParamList = {
  ShipScreen: undefined;
  ShipDetails: ShipDetailsProps;
};

export type ShipScreenProps = StackScreenProps<ShipNavigatorParamList, 'Ship'>;

export type ShipsScreenNavigationProps = ShipScreenProps['navigation'];
export type ShipsScreenRouteProps = ShipScreenProps['route'];

export type ShipDetailsScreenProps = StackScreenProps<
  ShipNavigatorParamList,
  'ShipDetails'
>;
