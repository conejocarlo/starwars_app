import Colors from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
  scrollContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  loadingContainer: {
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
    color: 'white',
    fontFamily: 'StarJedi',
  },
});

export default styles;
