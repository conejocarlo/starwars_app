import { StackScreenProps } from '@react-navigation/stack';
import { NavigationProps as FilmDetailsProps } from 'screens/FilmDetails';

export type FilmNavigatorParamList = {
  FilmScreen: undefined;
  FilmDetails: FilmDetailsProps;
};

export type FilmScreenProps = StackScreenProps<
  FilmNavigatorParamList,
  'FilmScreen'
>;

export type FilmScreenNavigationProps = FilmScreenProps['navigation'];
export type FilmScreenRouteProps = FilmScreenProps['route'];

export type FilmDetailsScreenProps = StackScreenProps<
  FilmNavigatorParamList,
  'FilmDetails'
>;

export type FilmDetailsNavigationProps = FilmDetailsScreenProps['navigation'];

export type FilmDetailsRouteProps = FilmDetailsScreenProps['route'];
