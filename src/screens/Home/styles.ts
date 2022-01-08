import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  buttonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
});

export default styles;
