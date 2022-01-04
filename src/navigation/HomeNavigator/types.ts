import { StackScreenProps } from '@react-navigation/stack';

import { NavigationProps as PersonDetailsProps } from 'screens/PersonDetails';

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
  PersonDetails: PersonDetailsProps;
};

export type HomeScreenProps = StackScreenProps<
  HomeNavigatorParamList,
  'HomeScreen'
>;

export type HomeScreenNavigationProps = HomeScreenProps['navigation'];
export type HomeScreenRouteProps = HomeScreenProps['route'];

export type PersonDetailsScreenProps = StackScreenProps<
  HomeNavigatorParamList,
  'PersonDetails'
>;

export type PersonDetailsNavigationProps =
  PersonDetailsScreenProps['navigation'];
export type PersonDetailsRouteProps = PersonDetailsScreenProps['route'];
