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
