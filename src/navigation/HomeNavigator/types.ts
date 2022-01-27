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

// me gustaria entender mas la differencia entre navigation y route y porque tengo que definir ambos
export type HomeScreenNavigationProps = HomeScreenProps['navigation'];
export type HomeScreenRouteProps = HomeScreenProps['route'];

export type PersonDetailsScreenProps = StackScreenProps<
  HomeNavigatorParamList,
  'PersonDetails'
>;

export type PersonDetailsNavigationProps =
  PersonDetailsScreenProps['navigation'];
export type PersonDetailsRouteProps = PersonDetailsScreenProps['route'];
