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
    color: '#F8E71B',
    fontFamily: 'StarJediRounded',
  },
  subtitles: {
    fontSize: 16,
    fontFamily: 'StarJedi',
    color: 'white',
  },
});

export default styles;
