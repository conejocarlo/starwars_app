import Colors from 'constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  titles: {
    fontFamily: 'StarJedi',
    color: Colors.mustard,
  },
});

export default styles;
