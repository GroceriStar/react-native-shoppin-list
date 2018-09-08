import gf from '@groceristar/groceristar-fetch/groceristar';
import uuid from 'uuidv4';

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
  }));

  return IngredientsObject;
};

export const getAllGrocery = () => {
  const grocery = gf.getGrocery();
  const GroceryObjectArray = grocery.map(item => ({
    key: uuid(),
    IngredientName: item,
  }));
  return GroceryObjectArray;
};

export const getAllGroceryDepartment = (departmentArray) => {
  const departmentArrayObject = departmentArray.map(item => ({
    key: uuid(),
    departmentName: item,
  }));
  return departmentArrayObject;
};

