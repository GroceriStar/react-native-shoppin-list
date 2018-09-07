import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import DrawerComponent from './DrawerComponent';
import IngredientDetails from './IngredientDetails';

const MyAppNavigator = createStackNavigator(
  {
    Deparment: { screen: DrawerComponent },
    Ingredients: { screen: IngredientDetails },
  },
  {
    initialRouteName: 'Deparment',
  }
);

const defaultGetStateForAction = MyAppNavigator.router.getStateForAction;

MyAppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'PushTwoProfiles') {
    const routes = [
      ...state.routes,
      { key: 'A', routeName: 'Profile', params: { name: action.name1 } },
      { key: 'B', routeName: 'Profile', params: { name: action.name2 } },
    ];
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return defaultGetStateForAction(action, state);
};

export default class DrawerRouterHandle extends Component {
  render() {
    return <MyAppNavigator />;
  }
}
