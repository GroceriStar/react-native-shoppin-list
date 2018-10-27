import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  extraText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  extraTextGradient: {
    marginTop: 23,
    margin: 8,
    borderRadius: 15,
  },
  check: {
    fontSize: 23,
    backgroundColor: 'transparent',
    padding: 5,
  },
  additional: {
    color: '#88C5EE',
    marginVertical: 10,
    borderBottomColor: '#88C5EE',
    borderBottomWidth: 2,
  },
});

export default styles;
