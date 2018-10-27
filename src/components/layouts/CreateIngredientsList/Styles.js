import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  saveButtonContainer: {
    backgroundColor: '#73e600',
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: { color: '#fff', padding: 5, fontSize: 20 },
  groceryTable: { margin: 10, borderColor: '#ff9900', borderWidth: 3 },
  tableKey: { backgroundColor: '#ff7733', padding: 10 },
  tableKeyText: { color: '#331100', fontSize: 20, fontWeight: '400' },
  tableValue: { backgroundColor: '#ffccb3', padding: 10 },
  tableValueText: { color: '#331100', fontSize: 15 },
  ingredientsTable: { height: 330, margin: 5 },
  ingredientsKey: { backgroundColor: '#ff7733', padding: 10 },
  ingredientsKeyText: {
    color: '#331100',
    fontSize: 20,
    fontWeight: '400',
  },
  localDeptContainer: {
    margin: 10,
    backgroundColor: '#ffcc99',
    padding: 10,
  },
  localDeptContainerText: {
    color: '#331100',
    fontSize: 15,
    fontWeight: '300',
  },
});

export default styles;
