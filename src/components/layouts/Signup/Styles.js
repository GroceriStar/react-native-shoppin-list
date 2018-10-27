import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 25,
    paddingRight: 25,
    paddingLeft: 25,

    justifyContent: 'center',
  },
  buttonOuterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#4985FF',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default styles;
