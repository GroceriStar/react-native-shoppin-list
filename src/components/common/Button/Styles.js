import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  buttonView: {
    width: Dimensions.get('window').width - 48,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3,
    marginTop: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default styles;
