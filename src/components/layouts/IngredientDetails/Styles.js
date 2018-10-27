import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 175, 82,0.8)',
    paddingTop: 15,
    paddingLeft: 30,
  },
  addOldIngrdients: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#657287',
  },
  ingredientName: {
    flex: 0.9,
    marginLeft: 10,
    borderRightWidth: 2,
    borderRightColor: '#000',
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
