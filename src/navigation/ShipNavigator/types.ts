import { StackScreenProps } from '@react-navigation/stack';

import { NavigationProps as ShipDetailsProps } from 'screens/ShipDetails';

export type ShipNavigatorParamList = {
  Ships: undefined;
  ShipDetails: ShipDetailsProps;
};

export type ShipScreenProps = StackScreenProps<ShipNavigatorParamList, 'Ships'>;

export type ShipsScreenNavigationProps = ShipScreenProps['navigation'];
export type ShipsScreenRouteProps = ShipScreenProps['route'];

export type ShipDetailsScreenProps = StackScreenProps<
  ShipNavigatorParamList,
  'ShipDetails'
>;
