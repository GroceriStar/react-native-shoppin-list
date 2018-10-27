import { StyleSheet, Dimensions } from 'react-native';

const { height: vh, width: vw } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: { opacity: 0.5, width: vw, height: vh },
  InputStyle: {
    color: '#000000',
    margin: 10,
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: '300',
    borderRadius: 6,
    height: 50,
    backgroundColor: '#ffebcc',
    borderColor: '#ff9900',
    borderWidth: 4,
  },
});

export default styles;
