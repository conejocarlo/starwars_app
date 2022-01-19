import Colors from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  horizontal: {
    justifyContent: 'space-around',
    padding: 10,
  },
  titles: {
    fontSize: 20,
    color: Colors.mustard,
    fontFamily: 'StarJediRounded',
  },
  subtitles: {
    fontSize: 16,
    fontFamily: 'StarJedi',
    color: 'white',
  },
});

export default styles;
