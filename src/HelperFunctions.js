import gf from '@groceristar/groceristar-fetch/groceristar';
import uuid from 'uuidv4';

const getOldGrocery = gf.getGrocery();
let newGrocery = getOldGrocery;

export const getAllDepartmentList = () => {
  const newAllDepartments = gf.getAllDepartments();
  const newAllDepartmentsObject = newAllDepartments.map(item => ({
    key: uuid(),
    departmentName: item,
  }));

  return newAllDepartmentsObject;
};

export const getAllIngredientsList = DeparmentName => {
  const Ingredients = gf.getAllIngredientsByOneDepartment(`${DeparmentName}`);
  const IngredientsObject = Ingredients.map(item => ({
    key: uuid(),
    IngredientName: item,
    isChecked: false,
  }));

  return IngredientsObject;
};

export const getAllGrocery = () => {
  const GroceryObjectArray = newGrocery.map(item => ({
    key: uuid(),
    IngredientName: item,
  }));

  return GroceryObjectArray;
};

export const getAllGroceryDepartment = departmentArray => {
  const departmentArrayObject = departmentArray.map(item => ({
    key: uuid(),
    departmentName: item,
    isChecked: false,
  }));
  return departmentArrayObject;
};

export const createNewGroceryList = newDepartment => {
  const isAvailable = newGrocery.filter(item => {
    if (item.name === newDepartment.name) {
      return true;
    }
    return false;
  });

  if (isAvailable.length === 0) {
    const newDepartmentList = [...newGrocery, newDepartment];
    newGrocery = newDepartmentList;
  }
};
